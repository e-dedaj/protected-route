# Protected Route

A React app with login, protected routes and roles (user/admin).

## Features

- Login with a username (`admin` gets the admin role, anything else gets `user`)
- `/dashboard` requires login, otherwise redirects to `/login`
- `/admin` requires the admin role, otherwise shows "Access Denied"
- Shared layout with a sidebar (React Router `Layout` + `Outlet`)
- Logout clears the user and redirects to `/login`

## Tech

- React (Vite)
- React Router (`react-router-dom`)

## Getting Started

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).
<img width="925" height="906" alt="image" src="https://github.com/user-attachments/assets/8b629eee-ffb2-469e-a5ca-d2f2c7f8cca8" />
