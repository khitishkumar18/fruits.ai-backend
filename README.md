# Node.js & MongoDB Backend

## Overview

This backend service is built with Node.js and MongoDB. It provides a RESTful API for managing resources.

## Getting Started

Follow these steps to set up and run the backend service:

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)

### Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/yourusername/your-repo.git
    cd your-repo
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Create a `.env` File**

    Create a file named `.env` in the root directory and add the following:

    ```env
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/yourdbname
    ```

    Replace `yourdbname` with your MongoDB database name.

### Running the Application

1. **Start the Server**

    ```bash
    npm start
    ```

    The server will be running at `http://localhost:5000`.

2. **Development Mode**

    For development with auto-reloading:

    ```bash
    npm run dev
    ```

### API Endpoints

- **Authentication**
  - `POST /api/users/register` - Register a new user
  - `POST /api/users/login` - Authenticate a user and receive a token

- **FAQs**
  - `GET /api/faqs` - Get all FAQs
  - `POST /api/faqs` - Create a new FAQ
  - `PUT /api/faqs/:id` - Update an FAQ by ID
  - `DELETE /api/faqs/:id` - Delete an FAQ by ID

### Database Setup

1. **Install MongoDB**:
   Follow the [installation guide](https://docs.mongodb.com/manual/installation/).

2. **Start MongoDB**:

    ```bash
    mongod
    ```

3. **Verify Connection**:
   Ensure MongoDB is accessible with the URI specified in the `.env` file.

### Testing

Run tests using:

```bash
npm test
