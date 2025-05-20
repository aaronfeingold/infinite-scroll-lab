# Infinite Scroll Lab

A React TypeScript project demonstrating infinite scroll implementation using the Intersection Observer API. This project serves as a practical example of implementing infinite scroll with dynamic data loading and responsive design using Tailwind CSS.

## Features

- Infinite scroll implementation using Intersection Observer API
- Responsive design with Tailwind CSS
- TypeScript for type safety
- Mock data fetching with simulated latency
- Dynamic content loading
- Clean and modern UI

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Intersection Observer API

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── hooks/
│   └── useInfiniteScroll.ts    # Custom hook for infinite scroll
├── utils/
│   └── fetchMockData.ts        # Mock data fetching utility
├── App.tsx                     # Main application component
└── index.css                   # Global styles and Tailwind imports
```

## Implementation Details

### Infinite Scroll
The project uses the Intersection Observer API to detect when the user scrolls near the bottom of the content. This triggers the loading of new data without the need for pagination controls.

### Responsive Design
The UI is built with Tailwind CSS, featuring:
- Responsive container widths
- Dynamic spacing
- Mobile-first approach
- Flexible grid layouts

### Mock Data
The project includes a mock data utility that:
- Simulates API calls with configurable latency
- Provides paginated data
- Includes TypeScript interfaces for type safety

## Development

The project uses Vite for fast development and building. Key development features:
- Hot Module Replacement (HMR)
- TypeScript compilation
- Tailwind CSS processing
- Optimized production builds

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
