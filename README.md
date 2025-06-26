# 🚀 Ankur Gupta - Developer Portfolio


> A modern, responsive, and animated developer portfolio to showcase my skills, projects, and contact information — built with ❤️ and React.


---

## 🧠 About This Project

This is my personal portfolio website where I highlight:

- ✨ My **skills** and tech stack
- 🛠️ My best **projects** with GitHub links
- 📬 An integrated **contact form** powered by EmailJS
- 🌙 A responsive **dark/light theme**
- ⚡ Smooth **Framer Motion** animations

This portfolio was built to not just tell — but **show** what I can do as a developer.

---

## 🔧 Tech Stack

- **React.js + TypeScript**
- **Tailwind CSS** for responsive styling
- **Framer Motion** for animations
- **Lucide Icons** for clean vector icons
- **EmailJS** for contact form integration
- **Vite** as the build tool
- **Deployed on Vercel**

---

## 📁 Folder Structure

├── src/
│ ├── components/ # Reusable UI components
│ ├── sections/ # Page sections (Hero, About, Projects, Contact)
│ ├── assets/ # Images, icons
│ ├── utils/ # Utility functions
│ └── App.tsx # Main layout
├── public/
├── .env # EmailJS credentials (not committed)
├── index.html
└── vite.config.ts

yaml
Copy
Edit

---

## 📬 Contact Form Integration

The contact form is powered by **EmailJS**, allowing visitors to send me a message directly from the site.

```ts
emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID!,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
  {
    from_name: formData.name,
    reply_to: formData.email,
    subject: formData.subject,
    message: formData.message,
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
);
Make sure to configure your own EmailJS template and environment variables.
```

🌓 Theme Support
This site supports light and dark modes, and automatically adapts based on the user's system preference using Tailwind's dark: classes.

📦 Getting Started Locally
bash
Copy
Edit
# Clone the repo
git clone https://github.com/yourusername/your-portfolio.git
cd your-portfolio

# Install dependencies
npm install

# Set environment variables
touch .env
# Add your EmailJS credentials:
# VITE_EMAILJS_SERVICE_ID=
# VITE_EMAILJS_TEMPLATE_ID=
# VITE_EMAILJS_PUBLIC_KEY=

# Start the dev server
npm run dev
🌐 Deployment
This portfolio is deployed using Vercel for fast, serverless deployment.

To deploy your own version:

Push your repo to GitHub

Connect it to Vercel

Add your .env variables in Vercel dashboard

📜 License
This project is open-source and available under the MIT License.

🙋‍♂️ Let's Connect!
I'm currently open to internships, freelance work, and full-time roles starting Summer 2024.

📫 Email: ankurg0824@gmail.com

💼 LinkedIn: linkedin.com/in/ankur-g-457891260

🐱 GitHub: Ankur2024

🐦 Twitter: @AnkurG24
