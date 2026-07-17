# 🛒 Flipkart Clone (MERN Stack)

A full-stack Flipkart Clone built using the MERN Stack. Users can browse products, search products, filter by category, manage cart, and admins can manage products and categories.

---

# Technologies Used

## Frontend

- React.js
- React Router DOM
- Bootstrap 5
- Axios
- React Icons

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

---

# Project Structure

```
Flipkart-Clone
│
├── client
│   ├── src
│   │   ├── api
│   │   ├── assets
│   │   ├── components
│   │   ├── context
│   │   ├── pages
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── index.js
│   └── package.json
```

---

# Features

### User

- User Registration
- User Login
- Browse Products
- Search Products
- Filter Products by Category
- Product Details
- Add to Cart
- Remove from Cart

### Admin

- Add Product
- Edit Product
- Delete Product
- Manage Categories
- View Products

---

# Categories

- Electronics
- Fashion
- Home & Kitchen
- Beauty
- Appliances
- Gaming
- Travel & Luggage

---

---

# Project Screenshots

## Home Page

![Home Page](screenshots/home.png)

---

## Login Page

![Login Page](screenshots/login.png)

---

## Register Page

![Register Page](screenshots/register.png)

---

## Cart Page

![Cart Page](screenshots/cart.png)

---

## Add Product

![Add Product](screenshots/add-product.png)

---

## Edit Product

![Edit Product](screenshots/edit-product.png)

---

## View Products

![View Products](screenshots/view-products.png)

---

## Add Category

![Add Category](screenshots/add-category.png)

---

## View Categories

![View Categories](screenshots/view-categories.png)

---

## Search Products

![Search Filter](screenshots/search-products.png)

---

## Admin Dashboard

![Admin Dashboard](screenshots/admin-dashboard.png)

---

# Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/flipkart-clone.git
```

## Install Backend

```bash
cd server
npm install
npm start
```

or (if using nodemon)

```bash
npm run dev
```

## Install Frontend

```bash
cd client
npm install
npm run dev
```

---

# API Endpoints

## Authentication

- POST /api/auth/register
- POST /api/auth/login

## Category

- GET /api/category
- POST /api/category
- PUT /api/category/:id
- DELETE /api/category/:id

## Product

- GET /api/product
- GET /api/product/:id
- POST /api/product
- PUT /api/product/:id
- DELETE /api/product/:id

---
---

# Project Explanation Video

A complete project explanation video is included with this project.

**Video Link:** *(Paste your Google Drive, YouTube, or GitHub video link here)*

Example:

https://drive.google.com/your-video-link

---

# Conclusion

The Flipkart Clone project demonstrates the implementation of a complete MERN Stack E-commerce application. It includes user authentication, category management, product management, search functionality, filtering, shopping cart, and responsive user interface.

This project helped in understanding the integration of React.js, Node.js, Express.js, MongoDB, REST APIs, JWT Authentication, Context API, and CRUD operations. It also provided practical experience in building a real-world full-stack web application following modular architecture and clean coding practices.

The project can be further enhanced by adding features such as online payment integration, wishlist, order management, product reviews, image uploads using Cloudinary, and user profile management.