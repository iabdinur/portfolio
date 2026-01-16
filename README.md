# Portfolio

A modern portfolio website showcasing my projects, built with React, TypeScript, Vite, and Chakra UI.

## Tech Stack

- **Frontend Framework**: React 18.3.1 with TypeScript 5.8.3
- **Build Tool**: Vite 7.0.4
- **UI Library**: Chakra UI 2.10.9
- **Animations**: Framer Motion 10.18.0
- **State Management**: Zustand 5.0.6
- **Data Fetching**: TanStack React Query 5.83.0
- **Icons**: React Icons 5.5.0 & Chakra UI Icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

To start the development server:

```bash
npm run dev
```

The app will be available at `http://blog.localhost:5173` (you may need to add `blog.localhost` to your `/etc/hosts` file).

### Build

To build for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/     # React components
│   ├── lib/            # Utilities and data
│   ├── store/          # Zustand stores
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── theme.ts        # Chakra UI theme config
├── public/             # Static assets
└── dist/               # Production build output
```

## Projects Showcased

- Blog App
- Car Booking System
- Little Lemon
- Weather App
- Hantiile App
- Banking Design Project

## Customization

Edit `src/lib/projects.ts` to update project information, add new projects, or modify existing ones.

## License

MIT
