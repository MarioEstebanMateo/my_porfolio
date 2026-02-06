# 🚀 Mario Esteban Mateo - Portfolio

A modern, fully responsive portfolio website showcasing my work as a Full Stack Developer, Systems Analyst, UX/UI Designer, and AI Engineer.

[![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## ✨ Features

- **🎨 Modern UI/UX** - Clean, professional design with smooth animations and transitions
- **🌓 Dark Mode** - Toggle between light and dark themes with persistent storage
- **🌍 Multi-language** - Support for English and Spanish with seamless switching
- **📱 Fully Responsive** - Optimized for all devices from mobile to desktop
- **⚡ Fast Performance** - Built with Vite for lightning-fast load times
- **📧 Contact Form** - Integrated with EmailJS for direct communication
- **🎯 Smooth Scrolling** - Enhanced navigation experience with animated sections
- **♿ Accessible** - Following WCAG guidelines for accessibility

## 🛠️ Tech Stack

### Frontend

- **React 18** - Modern UI library with hooks
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful & consistent icon family

### Additional Libraries

- **EmailJS** - Email service integration
- **SweetAlert2** - Beautiful, responsive popups
- **React Confetti** - Celebration animations

## 📂 Project Structure

```
my_portfolio/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, icons, and media files
│   │   ├── icons/      # SVG icons
│   │   └── img/        # Images
│   ├── components/     # React components
│   │   ├── Main.jsx           # Hero section
│   │   ├── Skills.jsx         # Skills showcase
│   │   ├── Languages.jsx      # Language proficiency
│   │   ├── Certifications.jsx # Professional certifications
│   │   ├── Projects.jsx       # Project portfolio
│   │   ├── Freelance.jsx      # Freelance work
│   │   ├── Contact.jsx        # Contact form
│   │   ├── Navbar.jsx         # Navigation bar
│   │   ├── Footer.jsx         # Footer section
│   │   ├── BackToTop.jsx      # Scroll to top button
│   │   └── common/            # Reusable components
│   ├── context/        # React context providers
│   │   ├── DarkModeContext.jsx
│   │   └── LanguageContext.jsx
│   ├── hooks/          # Custom React hooks
│   │   └── useInView.jsx
│   ├── translations.js # Multi-language content
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles
├── index.html          # HTML entry point
├── tailwind.config.js  # Tailwind configuration
├── vite.config.js      # Vite configuration
└── package.json        # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/MarioEstebanMateo/my_portfolio.git
cd my_portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Open your browser**

```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The optimized files will be generated in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Color Palette

The portfolio uses a carefully selected color scheme:

- **Primary**: `#126699` - Professional blue
- **Accent**: `#6366f1` - Modern indigo
- **Dark Mode**: `#0f172a` - Slate gray

Additional gradients and colors are used throughout for visual hierarchy and emphasis.

## 🌟 Key Sections

### 1. Hero (Main)

Dynamic introduction with animated statistics and call-to-action buttons.

### 2. Skills

Interactive skill cards with proficiency indicators for:

- Frontend Development
- Backend Development
- Version Control
- UX/UI Design

### 3. Languages

Language proficiency showcase with certifications.

### 4. Certifications

Professional certifications and degrees with clickable certificates.

### 5. Projects

Portfolio of personal and academic projects with live demos.

### 6. Freelance

Showcase of real-world client projects and applications.

### 7. Contact

Fully functional contact form integrated with EmailJS.

## 📧 Contact Form Setup

To enable the contact form, configure EmailJS:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service
3. Create an email template
4. Update the credentials in `Contact.jsx`:

```javascript
emailjs.sendForm(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  form.current,
  "YOUR_PUBLIC_KEY",
);
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory for sensitive data:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance Optimizations

- Code splitting with React lazy loading
- Optimized images with proper formats
- Minimal bundle size with tree shaking
- CSS purging with Tailwind
- Lazy loading for off-screen content

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/MarioEstebanMateo/my_portfolio/issues).

## 📝 License

This project is [MIT](LICENSE) licensed.

## 👨‍💻 Author

**Mario Esteban Mateo**

- Portfolio: [marioestebanmateo.com](https://marioestebanmateo.com)
- GitHub: [@MarioEstebanMateo](https://github.com/MarioEstebanMateo)
- LinkedIn: [Mario Esteban Mateo](https://www.linkedin.com/in/marioestebanmateo/)
- Email: memateo@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from [Lucide](https://lucide.dev/)
- Font families: Open Sans, Roboto Slab, League Spartan
- Color palette tools: [Tailwind Colors](https://tailwindcss.com/docs/customizing-colors)

---

⭐ If you like this project, please give it a star on GitHub! ⭐

Made with ❤️ by Mario Esteban Mateo
