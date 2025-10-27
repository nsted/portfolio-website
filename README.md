# Nicholas Stedman - Portfolio

A minimal, responsive portfolio website showcasing robotics projects, commercial work, and prototypes.

## Features

- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern Typography**: Helvetica Neue Light throughout
- **Interactive Carousels**: Image and video galleries for project showcases
- **Custom Video Controls**: Specialized video looping for project demonstrations
- **Clean Navigation**: Fixed header and menu with smooth transitions
- **Professional Layout**: Minimalist design with glassmorphism effects

## Projects Featured

### Robots

- **PET**: Tactile robotic companion in development
- **Blanket Project**: Soft robotics and interactive art exploration
- **ADB**: Historical robot project (2007-2011)

### Commercial

- **Devicist**: Commercial work and technological solutions

### Prototypes

- **Moti**: Smart servo motor with integrated electronics
- **Glow Clock**: Dynamic color-changing clock with RGB LEDs
- **Smart Servo Add-On Board**: Wireless servo control system

## Technology Stack

- **React 18**: Modern React with hooks
- **Webpack 5**: Module bundling and asset processing
- **CSS3**: Custom styling with responsive design
- **HTML5**: Semantic markup and video support

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/minimal-portfolio.git
cd minimal-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3001`

### Building for Production

```bash
npm run build
```

This will create a `dist` folder with the production build.

## Project Structure

```
src/
├── components/          # React components
│   ├── Landing.js      # Homepage
│   ├── Robots.js       # Robotics projects
│   ├── Commercial.js   # Commercial work
│   ├── Prototypes.js   # Prototype projects
│   └── Footer.js       # Site footer
├── assets/
│   └── images/         # Project images and videos
├── App.js              # Main application component
├── App.css             # Global styles
└── index.js            # Application entry point
```

## Customization

### Adding New Projects

1. Create a new component in `src/components/`
2. Add navigation link in `src/App.js`
3. Update the routing logic in the `renderContent` function

### Styling

- Global styles: `src/App.css`
- Component-specific styles use CSS classes
- Responsive breakpoints at 768px

### Media Assets

- Images: `src/assets/images/`
- Videos: Supported formats (mp4, webm, ogg)
- Webpack handles asset processing automatically

## Deployment

The project can be deployed to any static hosting service:

- **Netlify**: Connect your GitHub repository
- **Vercel**: Import project and deploy
- **GitHub Pages**: Use the `dist` folder contents

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Website**: [devicist.com](https://www.devicist.com)
- **Email**: hello@example.com
- **GitHub**: [@yourusername](https://github.com/yourusername)
