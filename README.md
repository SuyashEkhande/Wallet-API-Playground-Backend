# Wallet API Playground Backend

 This backend is a simple wallet application designed as a learning tool to understand **Authentication**, **Middlewares**, **APIs**, **MongoDB Transactions**, and other backend concepts. The project is built using **Node.js** with **Express** and **MongoDB** as the database. 
## Learning Objectives

This project provides hands-on practice with:

-   Implementing JWT-based authentication
-   Building RESTful APIs with protected routes
-   Using MongoDB transactions for data consistency
-   Validating API request data with Zod schemas
-   Structuring a Node.js Express project with MVC patterns
## Features 
**User Authentication**: Secure user login and token-based authentication using JWT. 
- **User Account Management**: Manages user details, including signup, login, and updating profiles. 
- **Balance Checking & Transfer**: Allows users to check their account balance and securely transfer funds to another user’s account, utilizing MongoDB transactions for atomicity. 
- **Filtered User Search**: Enables bulk retrieval of user data with optional filters on first or last names. 
## Tech Stack 
- **Node.js** with **Express** for server framework 
- **MongoDB** for the database to store user and account data 
-  **Mongoose** for object modeling and transaction management 
-  **JWT** for secure authentication 
- **Zod** for schema validation of API request bodies

## API Endpoints

### Authentication

-   **POST api/v1/user/signup** - Register a new user
    -   **Request Body**: `{ username: email, password: string, firstName: string, lastName: string }`
    -   **Response**: Returns a JWT token if successful.
-   **POST api/v1/user/signin** - Log in and receive a JWT token
    -   **Request Body**: `{ username: email, password: string }`
    -   **Response**: Returns a JWT token if credentials are valid.

### Account Management

-   **GET api/v1/account/balance** - View account balance (Protected by authMiddleware)
    -   **Response**: `{ balance: number }`
-   **PUT api/v1/user/** - Update account information (Protected by authMiddleware)
    -   **Request Body**: `{ password: string (optional), firstName: string (optional), lastName: string (optional) }`
    -   **Response**: `{ message: "Updated successfully" }`

### Balance Transfer

-   **POST api/v1/account/transfer** - Transfer funds to another user’s account (Protected by authMiddleware)
    -   **Request Body**: `{ amount: number, to: userId }`
    -   **Response**: `{ message: "Transfer successful" }`

### Bulk User Retrieval

-   **GET api/v1/account/transfer** - Retrieve user details with optional filtering by name
    -   **Query Parameters**: `filter` (optional) - filters by first or last name using regex.
    -   **Response**: Array of users with `_id`, `username`, `firstName`, and `lastName`.

## Middleware

-   **authMiddleware**: Verifies JWT tokens to protect routes requiring authentication.

## MongoDB Transactions

The `/account/transfer` route demonstrates the use of MongoDB transactions:

-   Transfers funds between users in an atomic operation, ensuring data consistency.
-   If any part of the transfer fails (e.g., insufficient funds, invalid recipient), the transaction is aborted to keep data accurate.

## Contact

For any inquiries, reach out to me at  [suyashekhande@gmail.com](mailto:suyashekhande@gmail.com).
