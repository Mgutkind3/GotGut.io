# 🎨 Customization Guide

This guide will help you customize your portfolio website with your own information, projects, and styling preferences.

## 📝 Quick Checklist

Before deploying, make sure to update:
- [ ] Personal information (name, title, bio)
- [ ] Work experience and education
- [ ] Skills and proficiency levels
- [ ] Projects with real links and descriptions
- [ ] Social media links
- [ ] Contact information
- [ ] Meta tags in `index.html`
- [ ] Favicon

## 🎯 Section-by-Section Customization

### 1. Hero Section (`src/sections/Hero.jsx`)

**What to update:**
- Line 60: Your name
- Line 70-71: Your title/role
- Line 73-75: Your tagline/description

```jsx
// Find these lines and replace with your info:
Michael Gutkind → Your Name
Software Engineer & Creative Developer → Your Title
Crafting beautiful digital experiences... → Your Tagline
```

### 2. About Section (`src/sections/About.jsx`)

**What to update:**
- Lines 35-48: Your personal bio (3 paragraphs)
- Line 65: Your location
- Line 72: Your current role
- Line 79: Your education background
- Lines 4-11: Your interests/values (edit the `interests` array)

**Example:**
```jsx
const interests = [
  { icon: '💻', title: 'Your Interest', description: 'Description' },
  // Add more...
];
```

### 3. Experience Section (`src/sections/Experience.jsx`)

**What to update:**
- Lines 4-31: Replace with your actual work experience
- Lines 33-39: Update with your education

**Template:**
```jsx
const experiences = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    period: 'Start Date - End Date',
    description: 'What you did in this role...',
    skills: ['Skill1', 'Skill2', 'Skill3']
  },
  // Add more experiences...
];
```

### 4. Skills Section (`src/sections/Skills.jsx`)

**What to update:**
- Lines 4-38: Update skill categories and proficiency levels
- Line 112: Update "Also familiar with" technologies

**How to adjust skill levels:**
```jsx
{ name: 'React', level: 90 } // Change level from 0-100
```

**Adding a new skill category:**
```jsx
{
  title: 'Your Category',
  icon: '🔧',
  skills: [
    { name: 'Skill Name', level: 85 },
    // Add more...
  ]
}
```

### 5. Projects Section (`src/sections/Projects.jsx`)

**What to update:**
- Lines 4-58: Replace with your actual projects
- Set `featured: true` for your top 3 projects (shown as large cards)
- Set `featured: false` for other projects (shown as smaller cards)

**Template:**
```jsx
{
  title: 'Your Project Name',
  description: 'Detailed description of what the project does...',
  image: '🚀', // Use an emoji or later replace with actual images
  tags: ['Tech1', 'Tech2', 'Tech3'],
  link: 'https://your-project-url.com',
  github: 'https://github.com/yourusername/project',
  featured: true // or false
}
```

**Using real images instead of emojis:**
1. Add images to `public/` folder
2. Update: `image: '/project-image.jpg'`
3. Change line 89 from `<div className="text-6xl mb-6">{project.image}</div>` to:
   ```jsx
   <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-6" />
   ```

### 6. Contact Section (`src/sections/Contact.jsx`)

**What to update:**
- Lines 5-10: Your social media links
- Line 56: Your email address (appears twice - lines 56 and 63)

```jsx
const socialLinks = [
  { name: 'GitHub', icon: '🔗', url: 'https://github.com/YOUR_USERNAME', color: 'hover:text-gray-400' },
  { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/YOUR_USERNAME', color: 'hover:text-blue-400' },
  // Update all URLs...
];
```

**Setting up form submission:**
The contact form currently shows an alert. To make it functional:
1. Use a service like [Formspree](https://formspree.io/), [EmailJS](https://www.emailjs.com/), or [Netlify Forms](https://www.netlify.com/products/forms/)
2. Replace the `handleSubmit` function (lines 15-20) with your form submission logic

### 7. Navigation & Footer (`src/components/`)

**Navigation.jsx:**
- Line 48: Update the logo initials (MG → Your Initials)

**Footer.jsx:**
- Lines 7-12: Update social links
- Line 23: Your name
- Lines 58-62: Contact information
- Line 76: Update copyright text

### 8. Meta Tags & SEO (`index.html`)

**What to update:**
- Line 9: Page title
- Lines 10-13: Meta description and keywords
- Lines 16-18: Open Graph tags (for social media sharing)
- Lines 21-23: Twitter card tags

### 9. Favicon

**To add your own favicon:**
1. Generate a favicon using [favicon.io](https://favicon.io/)
2. Replace `/vite.svg` in the `public/` folder
3. Update line 5 in `index.html`:
   ```html
   <link rel="icon" type="image/png" href="/favicon.png" />
   ```

## 🎨 Styling & Color Customization

### Changing the Color Scheme

The site uses these main color schemes by section:
- **Hero:** Indigo/Purple (`from-indigo-400 to-purple-400`)
- **About:** Cyan/Blue (`from-cyan-400 to-blue-400`)
- **Experience:** Indigo/Purple
- **Skills:** Purple/Pink (`from-purple-400 to-pink-400`)
- **Projects:** Pink/Orange (`from-pink-400 to-orange-400`)
- **Contact:** Green/Emerald (`from-green-400 to-emerald-400`)

**To change a section's color:**
1. Find the gradient classes (e.g., `from-indigo-400 to-purple-400`)
2. Replace with your preferred Tailwind colors
3. Also update hover states and border colors to match

**Example - Changing Hero to blue/teal:**
```jsx
// Before:
className="bg-gradient-to-r from-indigo-400 to-purple-400"

// After:
className="bg-gradient-to-r from-blue-400 to-teal-400"
```

### Tailwind Colors Reference

Common colors: `slate`, `gray`, `zinc`, `neutral`, `stone`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`

Shades: `50`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`, `950`

### Changing Fonts

The site uses Inter font. To change:

1. Update `src/index.css` line 1:
   ```css
   @import url('https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@300;400;500;600;700;800;900&display=swap');
   ```

2. Update line 18:
   ```css
   font-family: 'YOUR_FONT', -apple-system, BlinkMacSystemFont, ...
   ```

## 🖼️ Adding Real Images

### For Projects:
1. Add images to `public/projects/` folder
2. Update project objects to use image paths:
   ```jsx
   image: '/projects/my-project.jpg'
   ```

### For About Section (Optional Profile Picture):
Add after line 31 in `About.jsx`:
```jsx
<div className="flex justify-center mb-8">
  <img 
    src="/profile.jpg" 
    alt="Michael Gutkind"
    className="w-48 h-48 rounded-full border-4 border-cyan-500 shadow-xl"
  />
</div>
```

## 📱 Testing Your Changes

After making changes:
1. Save all files
2. Check the browser (should auto-reload)
3. Test on mobile view (Chrome DevTools → Toggle Device Toolbar)
4. Test all navigation links
5. Test form submission
6. Check for console errors

## 🚀 Before Deployment

Final checklist:
- [ ] All placeholder text replaced
- [ ] All links working
- [ ] Social media links updated
- [ ] Email addresses correct
- [ ] Skills accurately reflect your abilities
- [ ] Projects have real links (or remove if not applicable)
- [ ] Meta tags updated for SEO
- [ ] Favicon updated
- [ ] Tested on mobile devices
- [ ] No console errors

## 💡 Tips

1. **Start small:** Update one section at a time and test
2. **Keep backups:** Git commit after each major change
3. **Use real data:** Replace all placeholder content before deploying
4. **Be honest:** Don't inflate skill levels - be realistic
5. **Keep it updated:** Regularly add new projects and update experience

## ❓ Need Help?

Common issues:
- **Animations not working?** Check if Framer Motion is installed: `npm install framer-motion`
- **Styles not applying?** Make sure Tailwind is configured correctly
- **Images not loading?** Ensure images are in the `public/` folder

---

Happy customizing! 🎉

