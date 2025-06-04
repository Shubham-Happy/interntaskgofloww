# Backend Developer Intern Task

A simple backend API for daily updates with user and admin roles, built with Node.js, Express, MongoDB, and JWT authentication.

---

## 🚀 Features

- User and admin authentication (JWT-based)

- 5 seeded user accounts + 1 admin account

- Users can:
  - Sign up, log in
  - Create daily updates
  - View their own updates (datewise)

- Admin can:
  - View all users' updates (datewise)
  - Edit or delete any update
- All endpoints are testable via Postman (no frontend)

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT (JSON Web Tokens)
- bcryptjs
- dotenv

---

## 📦 Project Structure

<pre> backend-intern-task/ ├── config/ │ └── db.js # MongoDB connection setup ├── controllers/ │ ├── adminController.js # Admin actions (view/edit/delete updates) │ ├── authController.js # Login & signup logic │ └── updateController.js # User update CRUD logic ├── middlewares/ │ ├── authMiddleware.js # JWT authentication middleware │ └── roleMiddleware.js # Role-based access control ├── models/ │ ├── Update.js # Update schema │ └── User.js # User schema ├── routes/ │ ├── adminRoutes.js # Admin endpoints │ ├── authRoutes.js # Login/signup endpoints │ └── updateRoutes.js # User update endpoints ├── seed/ │ └── seedUsers.js # Script to seed test users ├── .env # Environment variables (not committed) ├── .gitignore # Git ignore file ├── app.js # Main application entry point ├── package.json # Project metadata and scripts └── README.md # Project documentation </pre>

---

### Seed the Database

This creates 5 users and 1 admin.

Server runs at [http://localhost:5000](http://localhost:5000)

---

## 👤 Test Accounts

| Username | Password   | Role  |
|----------|------------|-------|
| user1    | password1  | user  |
| user2    | password2  | user  |
| user3    | password3  | user  |
| user4    | password4  | user  |
| user5    | password5  | user  |
| admin    | adminpass  | admin |

---

## 🔑 API Endpoints

### Auth

- **POST** `/api/signup`  
  Create a new user account.  
  **Body:** `{ "username": "newuser", "password": "newpassword" }`

- **POST** `/api/login`  
  Log in and receive a JWT token.  
  **Body:** `{ "username": "user1", "password": "password1" }`

---

### User

- **POST** `/api/updates`  
  Create a daily update.  
  **Headers:** `Authorization: Bearer <token>`  
  **Body:** `{ "content": "Today's update" }`

- **GET** `/api/updates`  
  Get your updates (datewise).  
  **Headers:** `Authorization: Bearer <token>`

---

### Admin

- **GET** `/api/admin/updates`  
  View all users' updates.  
  **Headers:** `Authorization: Bearer <admin_token>`

- **PUT** `/api/admin/updates/:id`  
  Edit any update.  
  **Headers:** `Authorization: Bearer <admin_token>`  
  **Body:** `{ "content": "Edited content" }`

- **DELETE** `/api/admin/updates/:id`  
  Delete any update.  
  **Headers:** `Authorization: Bearer <admin_token>`

---

## 🧪 Testing with Postman

1. **Login** to get your JWT token.
2. For protected routes, set header:  
   `Authorization: Bearer <your_token>`
3. Use the endpoints above to create, view, edit, and delete updates.

---

## 📝 Notes

- All passwords are hashed using bcryptjs.
- JWT tokens expire in 1 day.
- Admin can view, edit, or delete any user's updates.
- Users can only access their own updates.

---

## Task done for GoFloww backend developer intern. 



