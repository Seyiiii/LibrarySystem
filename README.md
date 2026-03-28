# School Library Management API

A RESTful API built with **Node.js**, **Express**, and **MongoDB** to manage a school library system. This API handles the core operations for Authors, Books, Students, and Library Attendants, including complex business logic for borrowing and returning books.
---

## Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB
* **ODM:** Mongoose
* **Environment Management:** dotenv
---

## Architecture (MVC Pattern)

This project is strictly structured using the **Model-View-Controller (MVC)** design pattern to separate concerns and keep the codebase scalable:

* **Models (`/models`):** Define the MongoDB database schemas and data relationships (e.g., Book belongs to Author, borrowed by Student).
* **Controllers (`/controllers`):** Contain the core business logic. They process incoming requests, interact with the Models, handle errors, and format JSON responses.
* **Routes (`/routes`):** Act as the "traffic cops," mapping HTTP endpoints (like `GET /books`) to specific Controller functions.

---

## 🛠️ Installation & Setup

### 1. Clone the repository
```bash
git clone <your-github-repo-url>
cd librarysystem
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables

Create a .env file in the root directory and add the following:

```env
PORT=3009
MONGO_URI=mongodb://127.0.0.1:27017/school_library
```

**Note:** Ensure MongoDB is running locally, or replace the URI with your own MongoDB Atlas connection string.


### 4. Start the server

```bash
# For development with auto-restart:
npm run dev

# For production:
npm start
```

## Bonus Features Included

* **Search Functionality:** The GET /books endpoint supports query parameers for title searches (e.g. /books?title=keyword) using case-insensitive Regex matching.
* **Graceful Error Handling:** Custom error catching for MongoDB Duplicate Key errors (Code 11000) to prevent 500 crashes when registering duplicate ISBNs, returning a clean 400 Bad Request instead.

## 📚 API Documentation

[🔗 Click here to view the complete Postman API Documentation](hhttps://documenter.getpostman.com/view/50108928/2sBXinFVKN)

### Core Endpoints

#### Books

* **POST** /books - Create a new book
* **GET** /books - Get all books (Supports search: ?title=keyword)
* **GET** /books/:id - Get a single book (Populates Author, Student, and Attendant details)
* **PUT** /books/:id - Update a book
* **DELETE** /books/:id - Delete a book

#### Borrowing Logic

* **POST** /books/:id/borrow - Borrow a book (Requires studentId, attendantId, returnDate)
* **POST** /books/:id/return - Return a book (Resets status to "IN" and clears borrow data)

#### Authors

* **POST** /authors - Create an author
* **GET** /authors - Get all authors
* **GET** /authors/:id - Get a single author
* **PUT** /authors/:id - Update an author
* **DELETE** /authors/:id - Delete an author

#### Students & Attendants

* **POST** /students - Create a student
* **GET** /students - Get all students
* **POST** /attendants - Create a library attendant
* **GET** /attendants - Get all library attendants


