# AssignmentHelper Website

A modern, responsive React web application for "AssignmentHelper" - an academic assistance platform targeting international students primarily in Australia, with potential expansion to UK and other countries.

## Features

- Modern UI with linear gradients and animations
- Responsive design for all device sizes
- Interactive components with smooth animations
- Progress indicators for assignment statistics
- Testimonial carousel with interactive elements
- Contact forms with validation
- Quote request system with instant price estimation

## Technology Stack

- **Framework**: React with JavaScript (ES6+)
- **Styling**: Tailwind CSS with custom gradients and animations
- **Routing**: React Router DOM
- **Forms**: React Hook Form with validation
- **Icons**: Lucide React
- **Email Service**: EmailJS for contact forms
- **Animations**: Framer Motion for smooth animations
- **Progress Indicators**: React Circular Progressbar
- **Build Tool**: Vite

## Pages

- Home Page (/)
- Services Page (/services)
- PTE Tutoring Page (/pte-tutoring)
- Colleges & Universities Page (/institutions)
- About Us Page (/about)
- Contact Page (/contact)
- Get Quote Page (/get-quote)

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/assignment-helper.git
cd assignment-helper
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## Project Structure

```
assignment-helper/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   ├── home/
│   │   └── layout/
│   ├── pages/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── README.md
```

## Customization

- Colors and gradients can be modified in `tailwind.config.js`
- Global styles are defined in `src/index.css`
- Page content can be updated in the respective page components

## Deployment

The project is configured for easy deployment to Netlify or Vercel.

## License

This project is licensed under the MIT License.
