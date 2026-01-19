
# AdminX - MERN Stack Admin Dashboard

AdminX is a full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js). It features a complete Authentication system, a responsive modern UI, and a dedicated Admin Dashboard for managing users and contact queries.

## 🚀 Features

### Public Side
- **Authentication:** Secure Login and Registration system using JWT.
- **Responsive UI:** Built with modern CSS and React components.
- **Service Page:** Displays services dynamically fetched from the backend.
- **Contact Form:** Allows users to send queries/messages to the admin.

### Admin Panel (Protected)
- **User Management:** View list of all registered users, Edit user details, Delete users.
- **Contact Management:** View all user queries (messages), Edit/Update messages, Delete messages.
- **Protected Routes:** Only users with `isAdmin: true` can access the dashboard.
- **Dashboard Analytics:** (To be implemented) Overview of system stats.

---

## 🛠️ Tech Stack

**Frontend:**
- React.js (Vite)
- React Router DOM (v6)
- CSS3 (Custom responsive design)
- React Toastify (Notifications)

**Backend:**
- Node.js & Express.js
- MongoDB (Mongoose)
- JWT (JSON Web Tokens) for Auth
- Bcrypt.js for Password Hashing
- Cors & Dotenv

---

## 🔑 Admin Credentials

To access the Admin Dashboard features, use the following credentials:

| Type | Username | Email | Password |
| :--- | :--- | :--- | :--- |
| **Admin** | **Admin** | **admin@gmail.com** | *Admin123@* |

> **Note:** Ensure that in your MongoDB database, the `isAdmin` field for this user is set to `true`.

---

## ⚙️ How to Run Locally

### 1. Clone the Repository
```bash
git clone <repository-url>
cd AdminX
```

### 2. Backend Setup
Navigate to the server folder and install dependencies:
```bash
cd server
npm install
```
Create a `.env` file in the `server` root and add:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_secret_key
```
Start the server:
```bash
npm run server
# Server runs on http://localhost:5000
```

### 3. Frontend Setup
Navigate to the client folder and install dependencies:
```bash
cd ../client
npm install
```
Start the React app:
```bash
npm run dev
# App runs on http://localhost:5173
```

---

## 📂 Project Structure

```
AdminX/
├── client/          # React Frontend
│   ├── src/
│   │   ├── components/  # Reusable UI components & Layouts
│   │   ├── pages/       # Page views (Home, Login, Admin-Users, etc.)
│   │   ├── store/       # Context API (Auth Context)
│   │   └── ...
├── server/          # Node/Express Backend
│   ├── controllers/ # Logic for Auth, Admin, Service, Contact
│   ├── models/      # Mongoose Schemas
│   ├── router/      # API Routes
│   ├── middlewares/ # Auth & Admin checks
│   ├── utils/       # DB Connection
│   └── ...
```

## 📝 API Endpoints

- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - Login user
- **GET** `/api/auth/user` - Get current logged-in user data
- **GET** `/api/data/service` - Fetch services list
- **GET** `/api/admin/users` - Get all users (Admin Only)
- **DELETE** `/api/admin/users/delete/:id` - Delete user (Admin Only)
- **PATCH** `/api/admin/contacts/update/:id` - Update contact query (Admin Only)



