# Aksel Portfolio

A modern, clean, and responsive portfolio website built with HTML, CSS, JavaScript, and Tailwind CSS.

## 🚀 Features

### Design & UX
- **Modern Clean Design**: Minimalist approach with beautiful gradients and smooth animations
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Smooth Animations**: CSS animations and JavaScript-powered interactions
- **Dark Mode Support**: Automatically adapts to user's system preferences
- **Accessibility**: Semantic HTML and keyboard navigation support

### Sections
- **Hero Section**: Eye-catching introduction with typing animation
- **About**: Personal information and quick facts
- **Projects**: Showcase of work with hover effects
- **Skills**: Organized by categories (Frontend, Backend, Database, Tools)
- **Contact**: Contact form with validation and social links
- **Footer**: Additional links and copyright information

### Interactive Features
- **Smooth Scrolling**: Navigation links smoothly scroll to sections
- **Active Navigation**: Current section is highlighted in the navigation
- **Mobile Menu**: Responsive hamburger menu for mobile devices
- **Form Validation**: Contact form with real-time validation
- **Notifications**: Success/error messages for form submissions
- **Back to Top**: Floating button that appears when scrolling
- **Hover Effects**: Interactive elements with smooth transitions

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Custom animations and responsive design
- **JavaScript (ES6+)**: Interactive functionality and DOM manipulation
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Font Awesome**: Icons for enhanced visual appeal
- **Google Fonts**: Inter font family for typography

## 📁 Project Structure

```
aksel_portfolio_2/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue (#3B82F6)
- **Secondary**: Dark Gray (#1F2937)
- **Accent**: Green (#10B981)
- **Background**: Light Gray (#F9FAFB)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Scales appropriately on all devices

### Animations
- **Fade In**: Elements appear with smooth opacity transitions
- **Slide In**: Content slides in from left/right
- **Float**: Subtle floating animation for certain elements
- **Hover Effects**: Interactive elements respond to user interaction
- **Typing Animation**: Hero text types out character by character

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools required - runs directly in the browser

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. The portfolio is ready to use!

### Customization

#### Personal Information
Edit the following in `index.html`:
- Name and title in the hero section
- About section content
- Contact information
- Social media links

#### Projects
Add your projects by duplicating the project card structure:
```html
<div class="project-card bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
    <div class="h-48 bg-gradient-to-br from-[your-gradient]"></div>
    <div class="p-6">
        <h3 class="text-xl font-semibold text-gray-900 mb-2">Project Title</h3>
        <p class="text-gray-600 mb-4">Project description</p>
        <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Technology</span>
        </div>
        <div class="flex space-x-4">
            <a href="#" class="text-primary hover:text-blue-600 transition-colors">
                <i class="fab fa-github"></i> Code
            </a>
            <a href="#" class="text-primary hover:text-blue-600 transition-colors">
                <i class="fas fa-external-link-alt"></i> Live
            </a>
        </div>
    </div>
</div>
```

#### Skills
Update the skills section with your expertise:
- Frontend technologies
- Backend technologies
- Database systems
- Development tools

#### Styling
Modify `styles.css` for custom animations and effects:
- Animation timing
- Color schemes
- Custom hover effects
- Responsive breakpoints

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile Features
- Collapsible navigation menu
- Touch-friendly buttons and links
- Optimized typography scaling
- Simplified animations for performance

## 🌐 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 🔧 Performance Optimizations

- **Lazy Loading**: Images and animations load as needed
- **Minimal Dependencies**: Only essential external libraries
- **Optimized CSS**: Efficient selectors and minimal redundancy
- **Smooth Scrolling**: Hardware-accelerated animations

## 📝 Customization Guide

### Adding New Sections
1. Create a new `<section>` element with a unique ID
2. Add corresponding navigation link
3. Style with Tailwind classes
4. Add animations in `styles.css` if needed

### Modifying Colors
Update the Tailwind config in `index.html`:
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#your-color',
                secondary: '#your-color',
                accent: '#your-color'
            }
        }
    }
}
```

### Adding Animations
Define new keyframes in `styles.css`:
```css
@keyframes yourAnimation {
    from { /* initial state */ }
    to { /* final state */ }
}
```

## 🤝 Contributing

1. Fork the project
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Tailwind CSS** for the utility-first CSS framework
- **Font Awesome** for the beautiful icons
- **Google Fonts** for the Inter font family
- **Unsplash** for placeholder images (if used)

## 📞 Contact

For questions or support, please reach out:
- **Email**: hello@aksel.dev
- **GitHub**: [Your GitHub Profile]
- **LinkedIn**: [Your LinkedIn Profile]

---

**Built with ❤️ using modern web technologies** 