// netlify/functions/send-email.js

exports.handler = async function (event, context) {
    // CORS headers
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json',
    };

    // CORS preflight request
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ message: 'CORS preflight' })
        };
    }

    // Faqat POST request'larni qabul qilamiz
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method Not Allowed' })
        };
    }

    try {
        // Frontend'dan kelgan ma'lumotlarni olish
        const { name, email, message } = JSON.parse(event.body);

        // Validate required fields
        if (!name || !email || !message) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({
                    success: false,
                    error: 'Missing required fields'
                })
            };
        }

        // Check environment variables
        if (!process.env.EMAILJS_SERVICE_ID ||
            !process.env.EMAILJS_TEMPLATE_ID ||
            !process.env.EMAILJS_PUBLIC_KEY) {
            console.error('Missing EmailJS environment variables');
            return {
                statusCode: 500,
                headers,
                body: JSON.stringify({
                    success: false,
                    error: 'Server configuration error - missing credentials'
                })
            };
        }

        console.log('Sending email to:', email);
        console.log('Using service_id:', process.env.EMAILJS_SERVICE_ID?.substring(0, 10) + '...');

        // EmailJS API ga so'rov
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                service_id: process.env.EMAILJS_SERVICE_ID,
                template_id: process.env.EMAILJS_TEMPLATE_ID,
                user_id: process.env.EMAILJS_PUBLIC_KEY,
                template_params: {
                    from_name: name,
                    from_email: email,
                    message: message,
                    to_email: 'axmedovaasira@gmail.com',
                    reply_to: email,
                    time: new Date().toLocaleString()
                }
            })
        });

        const responseText = await response.text();
        console.log('EmailJS response status:', response.status);
        console.log('EmailJS response:', responseText);

        let data;
        try {
            data = JSON.parse(responseText);
        } catch {
            data = { raw: responseText };
        }

        if (response.ok) {
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({
                    success: true,
                    message: 'Email sent successfully!'
                })
            };
        } else {
            console.error('EmailJS API error:', data);
            return {
                statusCode: response.status,
                headers,
                body: JSON.stringify({
                    success: false,
                    error: 'Email service failed',
                    details: data
                })
            };
        }

    } catch (error) {
        console.error('Unhandled error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                success: false,
                error: 'Internal server error',
                details: error.message
            })
        };
    }
};