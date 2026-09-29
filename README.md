# Portfolio Website

A modern, responsive portfolio website built with React, featuring smooth animations and stunning transitions.

## 🚀 Features

- **Modern Design**: Clean and professional UI with glassmorphism effects
- **Smooth Animations**: Powered by Framer Motion for delightful user interactions
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Page Transitions**: Seamless navigation between pages
- **Interactive Elements**: Hover effects, scroll animations, and micro-interactions
- **Performance Optimized**: Fast loading and smooth scrolling

## 📄 Pages

1. **Home**: Hero section with animated introduction and call-to-action buttons
2. **About**: Personal information, skills, education, and experience timeline
3. **Projects**: Showcase of 3 completed projects with detailed information
4. **Upcoming Projects**: Display of 2 projects currently in development
5. **Contact**: Contact form and social media links

## 🛠️ Technologies Used

- **React**: Frontend framework
- **React Router**: Navigation and routing
- **Framer Motion**: Animation library
- **CSS3**: Styling with modern CSS features
- **HTML5**: Semantic markup

## 📦 Installation & Getting Started

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm test`

Launches the test runner in the interactive watch mode.

## 🎨 Customization Guide

### Update Personal Information

1. **Home Page** (`src/pages/Home.js`):
   - Update your name in the name section
   - Modify the description text
   - Add your profile image in the placeholder

2. **About Page** (`src/pages/About.js`):
   - Update education details
   - Modify skills and their proficiency levels
   - Update experience timeline
   - Change the fun facts section

3. **Projects Page** (`src/pages/Projects.js`):
   - Replace project details with your actual projects
   - Update technologies, features, and descriptions
   - Add GitHub and live demo links

4. **Upcoming Projects** (`src/pages/UpcomingProjects.js`):
   - Add your upcoming projects
   - Update progress percentages and expected dates

5. **Contact Page** (`src/pages/Contact.js`):
   - Update email, phone, and location
   - Add your social media links
   - Configure form submission

### Add Your Images

Replace the placeholder images:
- Add your profile photo in `src/pages/Home.js`
- Add your photo in `src/pages/About.js`
- Add project screenshots in `src/pages/Projects.js`

### Color Scheme

Edit CSS variables in `src/App.css`:
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #06b6d4;
  --accent-color: #f59e0b;
}
```

## 📱 Responsive Breakpoints

- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Popular Platforms
- **Vercel**: `npm i -g vercel` then `vercel`
- **Netlify**: Drag and drop the `build` folder
- **GitHub Pages**: Use `gh-pages` package

## 💡 Customization Tips

1. **Update Meta Tags**: Edit `public/index.html` for SEO
2. **Add Favicon**: Replace `public/favicon.ico` with your own
3. **Analytics**: Add Google Analytics or similar tracking
4. **Form Backend**: Connect contact form to a backend service (EmailJS, Formspree, etc.)

## 🎨 Design Features

- Glassmorphism effects
- Gradient animations
- Smooth page transitions
- Interactive hover states
- Scroll-based animations
- Modern color palette

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

---

**Built with ❤️ using React and Framer Motion**


### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
