Full Stack Internship Project
This repository contains a full-stack web application with a backend built using Node.js, Express, and MongoDB, and a frontend using React, Vite, and Tailwind CSS. The project is modular, scalable, and ready for further development.

## admin panel
`https://marketingcompany-eosin.vercel.app/admin`
 -visit this site and login with 
email - admin@example.com
pass -  Admin@123

Table of Contents
Project Structure
Backend
Tech Stack (Backend)
Features (Backend)
How to Run (Backend)
Frontend
Tech Stack (Frontend)
Features (Frontend)
How to Run (Frontend)
Future Work
License

Project Structure

.
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── public/
│   ├── routes/
│   ├── utils/
│   ├── .env
│   ├── app.js
│   ├── index.js
│   ├── package.json
│   └── vercel.json
├── frontend/
│   ├── public/
│   ├── src/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── eslint.config.js
│   └── README.md
└── README.md

Backend
Tech Stack (Backend)
Node.js & Express: Server and API framework
MongoDB & Mongoose: Database and ODM
JWT: Authentication (admin verification)
bcryptjs: Password hashing
Cloudinary: Image upload support
dotenv: Environment variable management
CORS & cookie-parser: Middleware for security and cookies
Features (Backend)
User Authentication: Register and login endpoints with JWT-based authentication and admin verification.
CRUD APIs: For Projects, Clients, Subscribers, and Contact Forms.
Admin Middleware: Protects sensitive routes for admin-only access.
Image Upload: Utility for uploading images to Cloudinary.
Environment Config: All secrets and DB URIs managed via .env.
Main Backend Files
app.js: Express app setup and middleware.
index.js: Database connection and server start.
controllers/: Logic for users, projects, clients, subscribers, and contact forms.
middleware/AdmiVerify.middileware.js: JWT admin verification.
models/: Mongoose schemas for all entities.
routes/: Express routers for all API endpoints.
utils/cloudinary.js: Cloudinary image upload utility.
Example: Adding a Project
POST /project/addproject (admin only)
GET /project/getallproject (public)
Example: User Authentication
POST /user/register
POST /user/login
How to Run (Backend)


1. Install dependencies:

cd backend
npm install

2 Configure environment:

Copy .env and fill in your MongoDB URI, JWT secrets, and Cloudinary credentials.

3. Start the server:
npm run dev


The backend runs on render.

Frontend
Tech Stack (Frontend)
React: UI library
Vite: Fast development server and build tool
Tailwind CSS: Utility-first CSS framework
React Router: Routing
React Hook Form: Form management
Axios: HTTP requests
React Spinners: Loading indicators
Features (Frontend)
Admin Login Page: Form with validation and loading state (src/components/Login.jsx).
Navbar: Responsive navigation bar (src/components/navbar.jsx).
Home Page: Placeholder for main content (src/Home.jsx).
API Integration: Connects to backend for authentication and data.
Tailwind CSS: For rapid UI development.
Main Frontend Files
src/App.jsx: Main app with routing.
src/components/Login.jsx: Admin login form.
src/components/navbar.jsx: Navigation bar.
src/Home.jsx: Home page.
vite.config.js: Vite and Tailwind setup.
How to Run (Frontend)
Install dependencies:

Start the development server:

The frontend runs on http://localhost:5173 by default.

Future Work
Complete the frontend with additional pages and features (dashboard, CRUD UI, etc.).
Add user roles and permissions.
Improve error handling and validation.
Write tests for backend and frontend.
Deploy to production (Vercel/Netlify for frontend, Vercel for backend).
License
This project is for educational and internship purposes.
