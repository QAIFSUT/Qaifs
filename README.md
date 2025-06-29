# QAIFS Website

A modern, responsive website for QAIFS (Quantitative AI & Financial Systems) - a student-led organization at the University of Toronto Scarborough dedicated to exploring, promoting, and facilitating the applications of artificial intelligence in quantitative finance and development.

## About QAIFS

QAIFS exists to enhance U of T Scarborough's educational, social, and cultural environment by providing resources, hosting events, and building a community around AI & FinTech innovation—always operating as a non-profit within the university framework.

### Mission & Purpose
- Explore, promote, and facilitate AI applications in quantitative finance and development
- Provide educational resources and learning opportunities
- Build an inclusive community of students, faculty, and professionals
- Bridge academic learning with practical applications

### Core Values
- **Inclusivity & Openness**: Open to all UofT students, staff, faculty, and alumni
- **Respect & Equity**: Zero tolerance for discrimination
- **Privacy & Integrity**: Member data confidentiality
- **Non-Commercial Focus**: Educational and community-oriented activities

## Features

- 🎨 **Modern Design**: Clean, professional design with gradient backgrounds and smooth animations
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast Performance**: Optimized for speed and performance
- 🚀 **React Router**: Client-side routing for smooth navigation
- 🎯 **Interactive Elements**: Hover effects, animations, and interactive components
- 📝 **Contact Form**: Functional contact form with validation
- 🎪 **Multiple Pages**: Home, About, Activities, and Contact pages

## Pages

- **Home**: Hero section, features, and call-to-action for joining QAIFS
- **About**: Mission, values, leadership structure, governance, and membership information
- **Activities**: Educational workshops, events, resources, and projects
- **Contact**: Contact form and organization information

## Technologies Used

- React 18.2.0
- React Router DOM 6.8.0
- CSS3 with modern features
- HTML5 semantic markup

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Qaifs-Website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.js       # Navigation header
│   ├── Header.css      # Header styles
│   ├── Footer.js       # Footer component
│   └── Footer.css      # Footer styles
├── pages/              # Page components
│   ├── Home.js         # Home page
│   ├── Home.css        # Home page styles
│   ├── About.js        # About page
│   ├── About.css       # About page styles
│   ├── Services.js     # Activities page
│   ├── Services.css    # Activities page styles
│   ├── Contact.js      # Contact page
│   └── Contact.css     # Contact page styles
├── App.js              # Main app component
├── App.css             # Global app styles
├── index.js            # App entry point
└── index.css           # Global styles
```

## Leadership Structure

QAIFS is governed by seven elected student executives:

- **President/Founder** - Official spokesperson and strategic lead
- **VP Finance** - Budgeting, accounting & financial reporting
- **VP Technology** - Website, workshops & tech infrastructure
- **VP Events** - Programming and event execution
- **VP Marketing** - Promotion, social media & on-campus visibility
- **VP Communications** - Liaison with other clubs & internal communications
- **VP Membership** - Recruitment, retention & member engagement

## Membership

### Eligibility
- Open to all UofT students, staff, faculty, and alumni
- Free membership with full participation rights
- Annual term from September 1 through August 31

### Member Rights
- Vote in elections
- Propose and run events
- Access to resources and workshops
- Participate in all club activities

### Member Responsibilities
- Uphold QAIFS's purpose and values
- Participate in meetings and events
- Respect peers and maintain inclusive environment
- Adhere to both QAIFS constitution and U of T policies

## Customization

### Colors
The website uses a consistent color scheme defined in the CSS files:
- Primary: `#667eea` (Blue gradient)
- Secondary: `#764ba2` (Purple gradient)
- Text: `#2c3e50` (Dark blue)
- Background: `#f8f9fa` (Light gray)

### Content
Update the content in the respective component files:
- Organization information in `src/components/Header.js` and `src/components/Footer.js`
- Page content in `src/pages/` files
- Contact information in `src/pages/Contact.js`

### Styling
Modify the CSS files to change the appearance:
- Global styles in `src/App.css` and `src/index.css`
- Component-specific styles in their respective `.css` files

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy to Static Hosting

The build folder can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Firebase Hosting

## Governance

### Meetings
- **General Meetings**: Held at least monthly to review activities, finances, and solicit member feedback
- **Executive Meetings**: Biweekly during the academic year (Sept – Apr) for operational decisions

### Elections
- Annual elections before March 31
- Strict application and oversight process to ensure fairness
- Constitutional changes require 2/3 member approval

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or support, please contact us at qaifs.ut@gmail.com

**Location**: University of Toronto Scarborough, 1265 Military Trail, Scarborough, ON M1C 1A4 