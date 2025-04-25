# Nikhil Gupta Portfolio

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.2-38B2AC?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.12.16-0055FF?style=flat-square&logo=framer)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

A modern, responsive developer portfolio website showcasing my projects, skills, and professional experience. Built with React, Tailwind CSS, and Framer Motion.

![Portfolio Preview](https://placehold.co/800x400?text=Portfolio+Preview)

## 🚀 Features

- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Mode** - Toggle between themes with smooth transitions
- **Interactive UI** - Engaging animations and micro-interactions powered by Framer Motion
- **Project Showcase** - 3D carousel on desktop and swipeable cards on mobile
- **Skills Visualization** - Grid-based skills categorization with proficiency indicators
- **Video Portfolio** - Showcase video content with custom player
- **Contact Form** - Functional contact form with validation
- **Performance Optimized** - Fast loading times and smooth interactions

## 🛠️ Technologies

- **Frontend Framework**: React.js
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **Icons**: React Icons
- **Development**: Vite

## 📋 Prerequisites

- Node.js 14.x or later
- npm or yarn

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Nikhilgup12/nikhil-portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd nikhil-portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit: `http://localhost:5173`

## 📁 Project Structure

```
nikhil-portfolio/
├── public/             # Static assets
│   ├── assets/         # Images, videos, etc.
│   ├── favicon.svg     # Site favicon
│   └── manifest.json   # PWA manifest
├── src/
│   ├── components/     # React components
│   │   ├── Navbar.jsx  # Navigation component
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── VideosSection.jsx
│   │   ├── ContactSection.jsx
│   │   └── Footer.jsx
│   ├── ThemeProvider.jsx # Dark/light mode context
│   ├── App.jsx         # Main application component
│   ├── index.css       # Global styles
│   └── main.jsx        # Application entry point
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
├── package.json        # Dependencies and scripts
└── README.md           # Project documentation
```

## 🖼️ Sections

- **Navbar**: Navigation with smooth scrolling and active section highlighting
- **Hero**: Introduction with animated text and CTA buttons
- **About**: Personal bio and background information
- **Projects**: Interactive project showcase with details
- **Skills**: Visual representation of technical skills
- **Experience**: Timeline of professional experience
- **Videos**: Showcase of video content/tutorials
- **Contact**: Form for getting in touch
- **Footer**: Additional links and back-to-top button

## 🚀 Deployment

This project can be deployed to platforms like Vercel, Netlify, or GitHub Pages:

1. Build the project:
   ```bash
   npm run build
   ```

2. The optimized production build will be in the `dist` folder, ready for deployment.

3. For Netlify or Vercel, simply connect your GitHub repository and the platform will handle the build process automatically.

## 📝 Customization

To customize this portfolio for your own use:

1. Update personal information in each section component
2. Replace project data in `ProjectsSection.jsx`
3. Update skills in `SkillsSection.jsx`
4. Modify contact information in `ContactSection.jsx`
5. Add your own images to the `/public/assets/` directory

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

Nikhil Gupta

[![LinkedIn](https://img.shields.io/badge/LinkedIn-nikhil--kumargupta-blue?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/nikhil-kumargupta)
[![GitHub](https://img.shields.io/badge/GitHub-Nikhilgup12-black?style=flat-square&logo=github)](https://github.com/Nikhilgup12)
[![Email](https://img.shields.io/badge/Email-Contact_Me-red?style=flat-square&logo=gmail)](mailto:your-email@example.com) 