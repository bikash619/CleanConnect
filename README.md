# CleanConnect

A modern web application for a cleaning service business. Features service listing, booking system, and client testimonials.

## Project Structure

This is a full-stack application with:
- React frontend (client)
- Express backend (server)
- Shared types and schemas

## Development Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file based on `.env.sample`
4. Run the development server:
   ```
   npm run dev
   ```

## Building for Production

### Full-Stack Deployment
For deploying both the client and server together:
```
npm run build
npm run start
```

### Client-Only Deployment (Vercel)
For deploying just the client to Vercel:
```
npm run build:client
```

The project includes a `vercel.json` configuration file that handles:
- Using the correct build command (`npm run build:client`)
- Setting the correct output directory
- Configuring routes for client-side navigation

When deploying to Vercel, the client will use static data for services, testimonials, and FAQs instead of fetching from the API.

## Technologies Used

- Frontend:
  - React
  - TypeScript
  - TanStack Query
  - TailwindCSS
  - Shadcn UI
  - Wouter (routing)
  - EmailJS

- Backend:
  - Express
  - TypeScript
  - Drizzle ORM

## Deployment Options

1. **Full-Stack Deployment**: Deploy to a service like Render, Railway, or a VPS where you can run both the client and server.

2. **Client-Only on Vercel**:
   - Uses static data instead of API requests
   - Ideal for showcasing the UI without backend functionality
   - Just connect your GitHub repository to Vercel and deploy

3. **Separate Deployments**:
   - Deploy the backend to a service like Render, Railway, or Heroku
   - Deploy the frontend to Vercel or Netlify
   - Update the API URLs in the frontend to point to your backend 