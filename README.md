# AVERA Website

A modern Next.js 14 website for AVERA cryptocurrency mining application.

## Features

- Built with Next.js 14 and TypeScript
- Emerald green color scheme (#10b981, #059669)
- Fully responsive design
- App download section for iOS/Android
- Infinite scrolling marquee banner
- Token information and roadmap
- FAQ section

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3006](http://localhost:3006) to view it in the browser.

### Build

```bash
npm run build
npm start
```

## Deployment

The application runs on port 3006 by default.

### Docker Deployment

```bash
docker build -t avera-website .
docker run -p 3006:3006 avera-website
```

### Coolify Deployment

Use the provided Dockerfile for automatic deployment. See deployment instructions below.

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- React

## License

Copyright & design by @ThemeAdapt - 2025
