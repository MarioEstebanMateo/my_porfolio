# 🚀 Mario Esteban Mateo - Portfolio

A modern, fully responsive portfolio website showcasing my work as a Full Stack Developer, Systems Analyst, UX/UI Designer, and AI Engineer.

[![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## ✨ Features

- **🎨 Modern UI/UX** - Clean, professional design with sophisticated animations and micro-interactions
- **🌓 Dark Mode (Default)** - Dark theme enabled by default with light mode toggle and persistent storage
- **🌍 Bilingual Support** - Full English/Spanish support with language persistence and context API
- **📱 Fully Responsive** - Mobile-first design optimized for all devices (mobile, tablet, desktop)
- **✨ Advanced Animations** - Staggered fade-in animations on grids, smooth scroll detection, hover effects
- **🧮 Animated Statistics** - CounterStat component with smooth number animations on scroll
- **🎯 Skill Tooltips** - Interactive tooltips showing years of experience on skill hover
- **📧 Contact Form** - Integrated with EmailJS for direct communication
- **🔗 GitHub Integration** - Direct links to each project on GitHub
- **📄 Smart CV/Resume** - Language-aware CV/Resume downloads (English → Resume, Spanish → CV)
- **⚡ Performance Optimized** - Built with Vite for lightning-fast load times and HMR
- **🔍 SEO Optimized** - Complete meta tags, Open Graph, Twitter Cards, and structured data
- **♿ Accessible** - PropTypes validation, semantic HTML, and WCAG compliance

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

**Responsive Layout**: Image on left (mobile: top), text content on right with:

- Animated greeting, name, and professional title
- Three animated statistics (13+ years experience, 50+ projects, 100% client satisfaction)
- Professional description with context-aware styling
- Call-to-action buttons with hover animations
- Social media links with icon transitions
- Full dark mode integration with smooth gradient transitions

### 2. Skills

Interactive skill cards with proficiency indicators and experience tooltips for:

- **Frontend Development** - React, JavaScript, HTML5, CSS3, Tailwind CSS
- **Backend Development** - Node.js, Express, Python, MySQL, MongoDB
- **Version Control** - Git, GitHub, GitLab
- **UX/UI Design** - Figma, Wireframing, Prototyping
- **AI/ML** - Prompt Engineering, LLM APIs (newly acquired)

Each skill displays years of experience on hover with animated progress bars and staggered animations.

### 3. Languages

Bilingual proficiency display featuring:

- **Spanish** - Native language card with decorative design
- **English** - C2 Level certification with EF SET credentials

Both cards are displayed side-by-side in a responsive grid layout.

### 4. Certifications

Professional certifications and degrees with clickable certificates.

### 5. Projects

Portfolio of 7+ projects with:

- Featured/badge indicators
- Technology tags for each project
- Live demo and GitHub links per project
- Staggered fade-in animations on scroll (0.1s delays)
- Hover effects with shadow elevation and upward translation
- Responsive card layout (1 col mobile, 2 tablets, 3 desktop)

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

### Customization

**Translations**: Edit `src/translations.js` for English/Spanish content

**Colors**: Modify `tailwind.config.js` for theme colors:

- Primary: `#126699`
- Accent: `#6366f1`
- Dark backgrounds: Slate grays

**Resume/CV URLs**: Update resume links in `Navbar.jsx`

**Skills & Experience**: Update data in respective component files

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
- Animation patterns and best practices from modern web development

---

⭐ If you like this project, please give it a star on GitHub! ⭐

Made with ❤️ by Mario Esteban Mateo
