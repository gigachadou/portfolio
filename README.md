# Akobir Mardonov - Portfolio

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![Build](https://img.shields.io/badge/Built_with-HTML/CSS/JS-orange)

A modern, alpine-themed portfolio website for Akobir Mardonov - Full-Stack Developer & Software Engineer. Features a minimalist design with dark blue/cyan color scheme, responsive layout, and interactive elements.

## 🚀 Live Demo

[**View Live Portfolio**](https://akobir-mardonov.netlify.app)

## ✨ Features

- **🎨 Modern Design** - Alpine-inspired theme with dark blue/cyan color palette
- **📱 Fully Responsive** - Works on all devices (mobile, tablet, desktop)
- **⚡ Fast Performance** - Optimized for speed and SEO
- **📝 Interactive Elements**:
  - Project filtering system
  - Animated skill bars
  - Timeline for professional journey
  - Contact form with email integration
- **🎯 Clean Code** - Well-structured, commented, and maintainable

## 🛠️ Technologies Used

### Frontend:
- **HTML5** - Semantic markup
- **CSS3** - Flexbox, Grid, animations, variables
- **JavaScript (ES6+)** - Modern syntax and features
- **Font Awesome** - Icons

### Libraries & Tools:
- **EmailJS** - Contact form email service
- **Google Fonts** - Typography (Montserrat, Inter, Space Grotesk)
- **Netlify** - Hosting and serverless functions

## 📁 Project Structure
akobir-portfolio/
│
├── 📄 index.html        # Main HTML file                                                   
├── 🎨 style.css         # All CSS styles (1200+ lines)                                                   
├── ⚙️ script.js         # JavaScript functionality                                                   
│
├── 📄 akobir-cv.pdf     # Resume / CV (downloadable)                                                   
├── 📄 cv.html           # HTML version of CV (editable)                                                   
├── 📖 README.md         # Project documentation                                                   
│                                                                                                       
├── 📂 images/           # Project images                                                   
│   ├── project1.jpg                                                                                                      
│   ├── project2.jpg                                                                                                      
│   └── profile.jpg                                                                                                      
│                                                                                                      
├── 📄 netlify.toml      # Netlify configuration                                                   
├── 📄 .gitignore        # Git ignore rules                                                   
└── 📄 LICENSE           # MIT License                                                   
                                                                                                      

### File Details:

- **`index.html`** - Complete HTML structure with 9 sections:
  1. Navigation
  2. Hero Section
  3. About Section
  4. Skills Section
  5. Professional Journey
  6. Projects Section (with filtering)
  7. Contact Section (with form)
  8. Footer

- **`style.css`** - Comprehensive CSS file with:
  - CSS Variables for theme colors
  - Responsive design (mobile-first approach)
  - Animations and transitions
  - Dark blue/cyan color scheme

- **`script.js`** - JavaScript functionality:
  - Mobile menu toggle
  - Project filtering system
  - Form validation and submission
  - Smooth scrolling
  - Skill bars animation
  - EmailJS integration

- **`akobir-cv.pdf`** - Professional resume with:
  - Personal information
  - Education background
  - Technical skills with proficiency levels
  - Projects portfolio
  - Contact details

## 🚦 Getting Started

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Code editor (VS Code recommended)
- Git (for version control)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/gigachadou/portfolio.git
   cd portfolio
Open in browser:

Simply open index.html in your browser

Or use a local server (VS Code Live Server extension)

For development:

Edit index.html, style.css, or script.js

Refresh browser to see changes

Local Development with Netlify
bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Start local development server
netlify dev
🔧 Configuration
EmailJS Setup (for contact form):
Create account at EmailJS

Add email service (Gmail recommended)

Create email template with variables:

{{from_name}} - Sender's name

{{from_email}} - Sender's email

{{message}} - Message content

Get your credentials:

Service ID

Template ID

Public Key

Netlify Environment Variables:
Add these to Netlify Dashboard → Site settings → Environment variables:

text
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id  
EMAILJS_PUBLIC_KEY=your_public_key
🎨 Customization Guide
1. Update Personal Information:
Edit index.html and replace:

Name, email, phone

Social media links

Project details

Profile images

2. Change Color Scheme:
Modify CSS variables in style.css:

css
:root {
    --alpine-blue: #0a192f;     /* Main dark blue */
    --alpine-dark: #020c1b;     /* Darker background */
    --alpine-light: #112240;    /* Light blue cards */
    --alpine-cyan: #64ffda;     /* Accent cyan color */
    --alpine-slate: #8892b0;    /* Text color */
    --alpine-white: #e6f1ff;    /* White text */
}
3. Add New Projects:
Add to projects section in index.html:

html
<div class="project-card" data-category="category">
    <div class="project-image">
        <img src="images/your-project.jpg" alt="Project Name">
        <div class="project-overlay">
            <a href="https://github.com/yourusername/project" target="_blank">
                <i class="fab fa-github"></i> View Code
            </a>
        </div>
    </div>
    <div class="project-content">
        <h3>Project Title</h3>
        <p>Project description here.</p>
        <div class="project-tech">
            <span>React</span>
            <span>Node.js</span>
        </div>
        <div class="project-links">
            <a href="https://github.com/yourusername/project">Code</a>
            <a href="https://live-demo.com">Live Demo</a>
        </div>
    </div>
</div>
4. Update Skills:
Modify the skills section in index.html:

html
<div class="skill-card">
    <div class="skill-icon">
        <i class="fab fa-js-square"></i>
    </div>
    <h3>JavaScript</h3>
    <p>ES6+, modern syntax, async programming</p>
    <div class="skill-level">
        <div class="level-bar">
            <div class="level-fill" style="width: 95%"></div>
        </div>
        <span class="level-text">95%</span>
    </div>
</div>
📊 Performance Optimization
This portfolio is optimized for:

Fast Loading: All CSS/JS in single files

SEO Friendly: Semantic HTML, meta tags

Accessibility: ARIA labels, keyboard navigation

Mobile First: Responsive design approach

🐛 Troubleshooting
Common Issues:
Contact form not sending emails:

Check EmailJS credentials

Verify Netlify environment variables

Check browser console for errors

PDF CV not downloading:

Ensure akobir-cv.pdf file exists in root folder

Check file permissions

Test with different browser

Mobile menu not working:

Check JavaScript console for errors

Verify Font Awesome CDN is loaded

Ensure correct CSS classes

🤝 Contributing
While this is a personal portfolio, suggestions and improvements are welcome!

Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

🙏 Acknowledgments
Design inspiration from alpine/mountain themes

Unsplash for beautiful placeholder images

Font Awesome for icons

EmailJS for email service

Netlify for hosting and serverless functions

📞 Contact
Akobir Mardonov
📧 axmedovaasira@gmail.com
📱 +998 93 716 75 81
🔗 GitHub
🌐 Portfolio

⭐ If you find this portfolio useful, please give it a star on GitHub! ⭐

Last Updated: December 2026

