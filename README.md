# E-commerce Website

## Task Objectives
A fully functional e-commerce platform built for Task 4, featuring product browsing, cart management, user authentication, checkout, and admin product management. Designed to run on any device with Node.js, MongoDB, and a modern browser.

### Key Features
- **Product Listing**: Browse products with category filters.
- **Shopping Cart**: Add/remove items, stored in local storage.
- **Authentication**: Register and login with JWT and bcrypt-secured passwords.
- **Checkout Process**: Simulated checkout clearing the cart.
- **Admin Dashboard**: Add new products (admin-only).

## Tech Stack
- **Frontend**: React.js, React Router
- **Backend**: Node.js, Express.js, MongoDB (Mongoose)
- **Security**: JWT, bcrypt

## Setup Instructions
### Prerequisites
- **Node.js**: v16+ (install from [nodejs.org](https://nodejs.org/))
- **MongoDB**: Local instance or MongoDB Atlas (install locally or sign up at [mongodb.com](https://www.mongodb.com/))
- **Git**: For cloning the repository

### Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/[your-username]/ecommerce-website.git
   cd ecommerce-website
   Backend Setup:Navigate to the backend directory:
   cd backend
   Install dependencies:
   npm install
   Configure environment variables:
   cp .env.example .env
   Edit .env with:
   MONGO_URI (e.g., mongodb://localhost:27017/ecommerce or your Atlas URI)
   JWT_SECRET (e.g., mysecretkey123)
   Start the backend server:
   npm start
   Runs on http://localhost:5000.
   Frontend Setup:
   Open a new terminal, navigate to the frontend directory:
   cd frontend
   Install dependencies:
   npm install
   Start the frontend development server:
   npm start
   Runs on http://localhost:3000 and opens in your default browser.
   Usage
   Open http://localhost:3000 in any modern browser (Chrome, Firefox, Edge, Safari).
   Register a user, log in, browse products, add to cart, and checkout.
   For admin access:
   Register a user, then set isAdmin: true in MongoDB (e.g., via MongoDB Compass or shell).
   Log in and visit /admin to add products.
   Notes
   Initial products must be added via the admin dashboard or manually in MongoDB (e.g., { name: "Laptop", price: 999, category: "electronics" }).
   Styling is basic (inline CSS) for cross-device compatibility; enhance with CSS if needed.
   Tested on Windows, macOS, and Linux.
   Troubleshooting
   MongoDB Error: Ensure MongoDB is running (mongod in terminal) and MONGO_URI is correct.
   Port Conflict: If 5000 or 3000 are in use, change PORT in .env or stop other services.
   CORS: Backend allows localhost:3000; adjust if running on a different domain.
   Dependencies: Run npm install if errors occur about missing modules.
