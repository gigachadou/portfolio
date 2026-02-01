// netlify/functions/send-email.js

exports.handler = async function (event, context) {
    // Faqat POST request'larni qabul qilamiz
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method Not Allowed' })
        };
    }

    try {
        // Frontend'dan kelgan ma'lumotlarni olish
        const { name, email, message } = JSON.parse(event.body);

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

        const data = await response.json();

        if (response.ok) {
            return {
                statusCode: 200,
                body: JSON.stringify({
                    success: true,
                    message: 'Email sent successfully!'
                })
            };
        } else {
            return {
                statusCode: 500,
                body: JSON.stringify({
                    success: false,
                    error: 'Email sending failed',
                    details: data
                })
            };
        }

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                success: false,
                error: 'Server error',
                details: error.message
            })
        };
    }
};