# Test App Frontend

React frontend application with GraphQL client (Apollo Client).

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Features

- React 19 with TypeScript
- Vite for fast development
- Apollo Client for GraphQL queries and mutations
- Connected to backend GraphQL API at `http://localhost:4000/graphql`

## GraphQL Operations

The app includes:
- Query to fetch all users
- Mutation to create new users
- Real-time UI updates after mutations

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Backend Connection

Make sure the backend server is running on `http://localhost:4000` before starting the frontend.
