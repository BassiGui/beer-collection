# Beer Collection 🍺

A web application for managing a beer collection, developed with React, TypeScript, and Vite.

## Technologies Used

- React
- TypeScript
- Vite
- React Router DOM
- ESLint
- Vitest (for testing)

## Prerequisites

- Node.js v20.19.1
- npm v10.8.2 (comes with Node.js)

## Installation

1. Clone the repository:

```bash
git clone [REPOSITORY_URL]
cd beer-collection
```

2. Install dependencies:

```bash
npm install
```

## Available Scripts

- `npm run dev`: Starts the development server
- `npm run build`: Generates the production build
- `npm run lint`: Runs ESLint to check the code
- `npm test`: Runs tests with Vitest
- `npm run preview`: Preview the production build locally

## Project Structure

```
beer-collection/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/         # Application pages
│   ├── routes/        # Route configuration
│   └── test/          # Test configuration
├── public/            # Public files
└── .eslintrc.json    # ESLint configuration
```

## Routes

- `/`: Home page
- `/beers`: Beer list

## ESLint Configuration

The project uses a basic ESLint configuration with support for:

- React
- TypeScript
- Essential rules for maintaining code quality

## Testing

Tests are written using Vitest and React Testing Library. Each component has its own tests in the same folder as the component.
