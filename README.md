# Subscription Tracker API

A comprehensive RESTful API built with Node.js and Express for tracking subscriptions and handling automated reminders using detailed workflows.

## Features

- **User Authentication**: Secure sign-up, sign-in, and sign-out functionality using JWT and cookies.
- **Subscription Management**: Create, read, and manage user subscriptions.
- **Automated Workflows**: Uses **Upstash Workflow** to handle scheduled tasks and reminders.
- **Security & Protection**: Integrated with **Arcjet** for rate limiting and bot protection.
- **Database**: **MongoDB** with **Mongoose** for data modeling and interactions.
- **Robust Error Handling**: Centralized error handling and logging.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JSON Web Tokens (JWT), bcryptjs
- **Workflow & Queue**: Upstash (Workflow, QStash)
- **Security**: Arcjet
- **Utilities**: Dayjs (date handling), Dotenv, Morgan

## Getting Started

### Prerequisites

Ensure you have the following installed/set up:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/) (Atlas or Local)
- [Upstash Account](https://upstash.com/) (for QStash/Workflow)
- [Arcjet Account](https://arcjet.com/)

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd subscription-track-reminder
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Configuration

Create a `.env.development.local` (for development) or `.env.production.local` file in the root directory and add the following variables. You can reference `config/env.js` for how these are loaded.

```env
# Server
PORT=3000
NODE_ENV=development

# Database
DB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>

# Authentication
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRES_IN=1d

# Arcjet (Security)
ARCJET_ENV=development
ARCJET_KEY=aj_...

# Upstash (Workflow/QStash)
QSTASH_URL=http://127.0.0.1:8080 # or your production URL
QSTASH_TOKEN=...
```

### Running the Application

**Development Mode:**
Runs the server with `nodemon` for hot-reloading.
```bash
npm run dev
```

**Production Mode:**
Runs the server using standard `node`.
```bash
npm start
```

## API Structure

The API is organized into the following routes:

- **Auth**: `/api/v1/auth` - User registration and login.
- **Users**: `/api/v1/users` - User profile management.
- **Subscriptions**: `/api/v1/subscriptions` - Subscription CRUD operations.
- **Workflows**: `/api/v1/workflows` - Upstash workflow endpoints.

## License

This project is licensed under the ISC License.