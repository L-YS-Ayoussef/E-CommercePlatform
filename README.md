# ToyStore - MVC-Based E-commerce Web Application

## 🛍️ Overview
**ToyStore** is an E-commerce web application built using the **MVC (Model-View-Controller) architecture**, designed for selling toy products. The platform allows users to browse, add items to their cart, and place orders. Meanwhile, admins can manage the product inventory by adding, editing, or deleting products.

This project is developed as a learning exercise and focuses on implementing core functionalities of an E-commerce system using **Node.js, Express, Mongoose, and EJS** for the views.

---

## 🚀 Features
### 🛒 User Features:
- Browse available toy products.
- Add products to the shopping cart.
- Place an order.
- User authentication & session handling.
- Reset password via token and email.
- Secure payment processing.

### 🔧 Admin Features:
- Browse Products
- Add, edit, and delete products.
- Manage product inventory.
  
---

## 🛠 Technologies Used
The application is developed using:
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **View Engine**: EJS (Embedded JavaScript Templates)
- **Styling**: CSS
  
---

## 💡 Skills Used
### 1️⃣ **MVC Structure** *(Main Skill)*
- The app follows the **Model-View-Controller (MVC)** architecture to ensure clean code separation and maintainability.
- **Model**: Mongoose schemas for defining product, user, and order models.
- **View**: EJS templates to dynamically render HTML.
- **Controller**: Handles business logic and routes requests appropriately.

### 2️⃣ **Authentication & User Sessions**
- Implemented user authentication with **bcrypt** for password hashing.
- Used **express-session** for managing user login sessions securely.

### 3️⃣ **Password Reset via Token & Email**
- Users can request a password reset link.
- Token-based authentication for resetting the password.
- Emails sent using **Nodemailer**.

### 4️⃣ **CSRF Protection**
- Implemented **CSRF protection** using `csurf` middleware.
- Every form contains a **CSRF token** to ensure that form submissions originate from the actual application.
- Protects against **Cross-Site Request Forgery (CSRF) attacks** by ensuring that unauthorized requests are not executed.

### 5️⃣ **Image Upload Using Multer**
- **Multer package** is used to handle image uploads for products.
- Allows admin to upload images when adding/editing products.

### 6️⃣ **Generating Invoice PDF & Downloading**
- Users can download a PDF invoice for their orders.
- Used `pdfkit` to dynamically generate invoices.
- Ensures professional order documentation.

### 7️⃣ **Pagination for Products**
- Implemented pagination to improve performance and usability.
- Allows users to browse products efficiently across multiple pages.

### 8️⃣ **Responsive Design**
- Used **CSS Media Queries** to ensure mobile-friendly design.
- The UI adapts well to different screen sizes.

### 9️⃣ **Input Validation Using express-validator**
- Server-side validation to ensure data integrity.
- Prevents SQL injection and malformed data entries.

### 🔟 **Handling Errors & Not Found Routes**
- Implemented middleware for handling errors gracefully.
- Displays a **404 error page** for invalid routes.

### 1️⃣1️⃣ **Environment Variables for Security**
- Used `dotenv` to manage sensitive data such as:
  - Database credentials
  - Email service configurations
  - Secret keys for authentication

---

## 🖼️ App Screenshots
### Home Page
![Home Page](https://github.com/L-YS-Ayoussef/E-CommercePlatform/blob/master/screenshots/Screenshot1.png)

### Signup Page
![Signup Page](https://github.com/L-YS-Ayoussef/E-CommercePlatform/blob/master/screenshots/Screenshot2.png)

### Login Page
![Login Page](https://github.com/L-YS-Ayoussef/E-CommercePlatform/blob/master/screenshots/Screenshot3.png)

### Add Product Page
![Add Product](https://github.com/L-YS-Ayoussef/E-CommercePlatform/blob/master/screenshots/Screenshot4.png)

### Products Page
![Products Page](https://github.com/L-YS-Ayoussef/E-CommercePlatform/blob/master/screenshots/Screenshot5.png)

### Edit Product Page
![Edit Product](https://github.com/L-YS-Ayoussef/E-CommercePlatform/blob/master/screenshots/Screenshot6.png)

### Cart Page
![Cart Page](https://github.com/L-YS-Ayoussef/E-CommercePlatform/blob/master/screenshots/Screenshot7.png)

### Orders Page
![Orders Page](https://github.com/L-YS-Ayoussef/E-CommercePlatform/blob/master/screenshots/Screenshot8.png)

---

## 📜 License
This application is built for **practice and learning new skills** and is **not a commercial product**. It is a **closed-source** project, and **cloning or forking requires explicit permission**. <br>

Developed with ❤️ by Chameleon Tech 🦎🚀<br>
📌 **Copyright © 2025 Chameleon Tech**



