# GotGut.io - Personal Portfolio Website

A modern, aesthetically pleasing personal portfolio website built with React, Tailwind CSS, and Framer Motion. This site showcases my professional experience, skills, projects, and provides a way to get in touch.

## ✨ Features

- **🎨 Modern Design:** Beautiful gradient backgrounds, smooth animations, and a clean, professional aesthetic
- **📱 Fully Responsive:** Optimized for all devices from mobile to desktop
- **⚡ Fast Performance:** Built with Vite for lightning-fast development and production builds
- **🎭 Smooth Animations:** Framer Motion powers all the delightful transitions and effects
- **🌐 Easy Navigation:** Smooth scrolling with an intuitive navigation system
- **📊 Complete Sections:**
  - Hero section with animated gradients
  - About me with interests and background
  - Professional experience timeline
  - Skills showcase with progress bars
  - Featured projects with detailed cards
  - Contact form with social links
  - Professional footer

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

### Installation

1. **Clone or navigate to the repository:**
   ```bash
   cd /Users/michaelgutkind/Documents/Development/Github/gotgut-site/GotGut.io
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   or if you prefer yarn:
   ```bash
   yarn install
   ```

### Running the Development Server

Start the development server with hot reload:

```bash
npm run dev
```

or with yarn:

```bash
yarn dev
```

The site will be available at `http://localhost:5173` (or another port if 5173 is busy - check the terminal output).

### Building for Production

To create an optimized production build:

```bash
npm run build
```

or:

```bash
yarn build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

or:

```bash
yarn preview
```

## 🛠️ Built With

- **[React](https://react.dev/)** - JavaScript library for building user interfaces
- **[Vite](https://vitejs.dev/)** - Next-generation frontend build tool
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animation library
- **[Inter Font](https://fonts.google.com/specimen/Inter)** - Modern, clean typography

## 📝 Customization Guide

### Update Personal Information

1. **Hero Section** (`src/sections/Hero.jsx`):
   - Update your name and title
   - Customize the description text

2. **About Section** (`src/sections/About.jsx`):
   - Edit your bio and background
   - Update quick facts (location, role, education)
   - Modify interests

3. **Experience Section** (`src/sections/Experience.jsx`):
   - Add/edit your work experience
   - Update education information
   - Customize skills for each role

4. **Skills Section** (`src/sections/Skills.jsx`):
   - Update skill categories and proficiency levels
   - Add new technologies you work with

5. **Projects Section** (`src/sections/Projects.jsx`):
   - Add your actual projects
   - Update project descriptions, tags, and links
   - Mark your featured projects

6. **Contact Section** (`src/sections/Contact.jsx`):
   - Update social media links
   - Customize contact information

7. **Footer** (`src/components/Footer.jsx`):
   - Update social links
   - Customize footer content

### Color Scheme

The site uses a modern purple/indigo color scheme. To change colors, update the Tailwind classes throughout the components. Common colors used:
- Primary: `indigo-500`, `purple-500`
- Accent: `cyan-400`, `pink-400`, `green-400`
- Background: `slate-950`, `slate-900`

## 📂 Project Structure

```
GotGut.io/
├── src/
│   ├── components/
│   │   ├── CursorHighlight.jsx    # Custom cursor effect
│   │   ├── FadeInSection.jsx      # Reusable animation wrapper
│   │   ├── Navigation.jsx         # Main navigation bar
│   │   └── Footer.jsx             # Site footer
│   ├── sections/
│   │   ├── Hero.jsx               # Landing section
│   │   ├── About.jsx              # About me section
│   │   ├── Experience.jsx         # Work experience & education
│   │   ├── Skills.jsx             # Skills showcase
│   │   ├── Projects.jsx           # Projects portfolio
│   │   └── Contact.jsx            # Contact form
│   ├── App.jsx                    # Main app component
│   ├── main.jsx                   # App entry point
│   └── index.css                  # Global styles
├── public/                        # Static assets
├── index.html                     # HTML template
└── package.json                   # Dependencies
```

## 🚢 Deployment

This site can be easily deployed to:

- **Vercel:** `npm run build` then deploy the `dist` folder
- **Netlify:** Connect your GitHub repo or upload the `dist` folder
- **GitHub Pages:** Use the `gh-pages` package
- **Other hosting:** Any static hosting service that supports SPA

### Quick Deploy to Vercel:

```bash
npm install -g vercel
npm run build
vercel
```

## 📧 Contact

**Michael Gutkind**
- Email: mikegutkind@gmail.com
- LinkedIn: [Add your LinkedIn URL]
- GitHub: [Add your GitHub URL]

## 📄 License

This project is open source and available for personal use. Feel free to fork and customize for your own portfolio!

---

**Built with ❤️ by Michael Gutkind**