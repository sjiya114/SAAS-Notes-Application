# SAAS Notes Application

A multi-tenant Software-as-a-Service (SAAS) Notes Application that allows users and administrators to manage notes efficiently. Built with a React frontend and Node.js/Express backend, the app supports user registration, authentication, note CRUD operations, and admin management features.

## Features

- **Multi-Tenant Architecture:** Supports multiple organizations (tenants) with isolated data.
- **User Authentication:** Register, login, and session management for users and admins.
- **Notes Management:** Create, read, update, and delete notes.
- **Admin Dashboard:** View all users and notes, manage users, and perform admin-specific actions.
- **Role-Based Access:** Separate interfaces and permissions for users and admins.
- **RESTful API:** Backend exposes secure endpoints for all operations.
- **Modern UI:** Responsive React frontend with clean navigation and user experience.

## Project Structure

```
backend/
  server.js           # Express server entry point
  package.json        # Backend dependencies
  config/             # DB and controller configs
  middleware/         # Auth middlewares
  model/              # Mongoose models
  routes/             # API route definitions
notes_app/
  src/                # React source code
    components/       # UI components (admin, user)
    context/          # React context providers
  public/             # Static assets
  package.json        # Frontend dependencies
  vite.config.js      # Vite config
```

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- MongoDB (local or cloud)

### Backend Setup
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure MongoDB connection in `config/db.js`.
4. Start the backend server:
   ```sh
   node server.js
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```sh
   cd notes_app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## Usage
- Register as a user or admin.
- Login to access your dashboard.
- Users can create, update, and delete their notes.
- Admins can view all users and notes, and manage users.

## Folder Details
- **backend/config/**: Database and controller configuration files.
- **backend/controller/**: Logic for admin, user, and notes operations.
- **backend/middleware/**: Authentication and authorization middlewares.
- **backend/model/**: Mongoose schemas for notes, users, tenants.
- **backend/routes/**: API endpoints for admin, user, and notes.
- **notes_app/src/components/**: React components for UI (admin/user views).
- **notes_app/src/context/**: React context for authentication and notes state.

## Deployment
- The project includes `vercel.json` for deployment on Vercel.
- Configure environment variables for production (MongoDB URI, JWT secret, etc.).

## License
MIT
