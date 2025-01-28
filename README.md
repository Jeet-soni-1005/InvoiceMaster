Here’s a clean and simple README for your project:

---

# InvoiceMaster: An Invoice Management API 🧾

This is an Invoice Management API built with Node.js, Express, MongoDB, and JWT-based authentication. It allows users to register, log in, and manage invoices (CRUD operations).

---

## Features ✨

- **User Authentication**: Register and log in securely using email and password.
- **JWT Authentication**: Protect API routes to allow only logged-in users to access them.
- **Invoice Management**:
  - Create new invoices.
  - View all invoices.
  - Update invoice details.
  - Delete invoices.

---

## Getting Started 🚀

### 1. Clone the repository:
```bash
git clone https://github.com/Jeet-soni-1005/InvoiceMaster.git
cd InvoiceMaster
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Set up environment variables:
Create a `.env` file in the root folder and add the following:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

### 4. Start the server:
```bash
npm start
```

The server will run at: `http://localhost:5000`

---

## API Endpoints 📬

### **Base URL**:
If deployed, replace `http://localhost:5000` with your deployed URL (e.g., `https://invoicemaster-w9g0.onrender.com/`).

---

### **Authentication**

#### 1. **Register a User**
**POST** `/api/auth/register`

Example Request:
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```

Example Response:
```json
{
  "message": "User registered successfully"
}
```

---

#### 2. **Login a User**
**POST** `/api/auth/login`

Example Request:
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```

Example Response:
```json
{
  "token": "your_jwt_token"
}
```

Use the token for protected routes by adding it to the `Authorization` header:
```
Authorization: Bearer your_jwt_token
```

---

### **Invoices**

#### 1. **Create an Invoice**
**POST** `/api/invoices`

Example Request:
```json
{
        "customerName": "John Doe",
        "items": [
            {
                "productName": "Laptop",
                "quantity": 1,
                "price": 1000,
                "_id": "6798cea286bc4cc5a677678b"
            },
            {
                "productName": "Mouse",
                "quantity": 2,
                "price": 50,
                "_id": "6798cea286bc4cc5a677678c"
            }
        ],
        "totalAmount": 1100,
        "status": "Paid",
    },
```

Example Response:
```json
{
  "message": "Invoice created successfully",
}
```

---

#### 2. **Get All Invoices**
**GET** `/api/invoices`

Headers:
```
Authorization: Bearer your_jwt_token
```

Example Response:
```json
[
  {
        "_id": "6798cea286bc4cc5a677678a",
        "customerName": "John Doe",
        "items": [
            {
                "productName": "Laptop",
                "quantity": 1,
                "price": 1000,
                "_id": "6798cea286bc4cc5a677678b"
            },
            {
                "productName": "Mouse",
                "quantity": 2,
                "price": 50,
                "_id": "6798cea286bc4cc5a677678c"
            }
        ],
        "totalAmount": 1100,
        "status": "Paid",
        "createdAt": "2025-01-28T12:33:38.823Z",
        "__v": 0
    },
]
```

---

#### 3. **Update an Invoice**
**PUT** `/api/invoices/:id`

---

#### 4. **Delete an Invoice**
**DELETE** `/api/invoices/:id`

Example Response:
```json
{
  "message": "Invoice deleted successfully"
}
```

---

## Deployment 🌐

This project can be deployed easily on platforms like [Render](https://render.com), [Heroku](https://www.heroku.com), or any Node.js-supported platform. 

---

## Tools and Technologies 🛠️
- **Node.js**: Backend runtime.
- **Express**: Web framework for building APIs.
- **MongoDB**: Database for storing users and invoices.
- **JWT**: Token-based authentication.
- **Postman**: For API testing.

---

## How to Contribute 🤝

1. Fork the project.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.

---

Feel free to ask if you have any questions! 😊
