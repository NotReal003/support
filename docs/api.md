# Request Management Portal

## API and WebApp
- **[API Source Code](https://github.com/NotReal003/api)**
- **[Frontend WebApp Code](https://github.com/NotReal003/requests)**
- **[Demo Page](https://request.notreal003.xyz)**

## Overview
The Request Management Portal is a comprehensive system designed for users to submit various types of requests, such as Discord reports, support requests, and guild applications. The system includes a React-based frontend and a Node.js backend with MongoDB. Key features include JWT-based authentication, email notifications, request status updates, and an admin dashboard.

## Support Me
If you find this project helpful, consider supporting me through cryptocurrency:

### Bitcoin
```bash
bc1qrhdcy3vl2qkjjq3ufc0u70vtun4f7yfavcl6x9
```

### Litecoin
```bash
LaGrw1RgSWnhxKo1SiG9D9n4tVTVJyL2VC
```

For more information, visit [Support Page](https://pay.notreal003.org).

## Installation

### Prerequisites
- Node.js and npm installed
- MongoDB Atlas or local MongoDB setup
- (Optional) Cloudflare Workers account for backend hosting

### Frontend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/NotReal003/Requests.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add your API URL:
   ```bash
   REACT_APP_API=your_api_url
   CI=false
   ```
4. Start the React app:
   ```bash
   npm start
   ```
   or for production:
   ```bash
   npm run build
   ```

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/NotReal003/API.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   ```bash
   MONGODB_URI=mongodb+srv://username@cluster.mongodb.net/database
   JWT_SECRET=your_jwt_secret
   DISCORD_CLIENT_ID=your_discord_client_id
   DISCORD_CLIENT_SECRET=your_discord_client_secret
   NODE_ENV=production
   DISCORD_REDIRECT_URI=callback_url
   DISCORD_WEBHOOK_URL=first_request_route_webhookurl
   DISCORD_WEBHOOK_URL1=second_request_route_webhookurl
   EMAIL=email
   EPASS=email_password
   SESSION_SECRET=...
   WEB_TOKEN=an_webhook_url(please test it)
   USER_AUTH_WEBTOKEN=user_auth_logger_webhookurl
   ADMIN_ID=theAdminId(user_id)
   G_ID=github_client_id
   G_SECRET=github_client_secret
   ```
4. Start the backend server:
   ```bash
   node index.js
   ```

## Features

### Frontend
- **Request Form Pages**: Submit various types of requests, including Discord reports, support requests, and guild applications.
- **Authentication**: JWT-based login/logout with dynamic status display in the navbar.
- **Admin Panel**: View, approve, reject, or cancel requests and leave review messages.
- **User Dashboard**: View request history and status updates.
- **Crypto Support**: Integrated cryptocurrency payment system.
- **Responsive Design**: Optimized for various devices using modern design practices.

### Backend
- **Request Routes**: Handles support, Discord report, and guild application requests.
- **JWT Authentication**: Secure token-based access control.
- **Request Status**: Tracks requests with status updates and review messages.
- **Admin Routes**: Manage requests and users.
- **Email Notifications**: Automatic notifications for request status updates.
- **IP Tracking**: Captures user IP addresses for security.

## Tech Stack

### Frontend
- **React**: For building the user interface.
- **React Router**: For navigation.
- **DaisyUI/TailwindCSS**: For UI components and styling.
- **Axios**: For API requests.
- **React-Icons**: For scalable icons.
- **React Toastify**: For notifications.

### Backend
- **Node.js**: Server-side runtime.
- **Express.js**: Web framework.
- **MongoDB**: NoSQL database.
- **JWT**: For authentication.
- **Nodemailer**: For sending emails.
- **Cloudflare Workers**: For hosting the backend API (optional).

## Usage

### User Actions
1. **Login**: Authenticate via Discord OAuth.
2. **Submit Request**: Fill out and submit request forms.
3. **View Requests**: Check request history and status updates.
4. **Email Notifications**: Receive email updates on request status.
5. **Support via Crypto**: Use the cryptocurrency payment system to support the project.

### Admin Actions
1. **Manage Requests**: Approve, reject, or cancel requests and leave review messages.
2. **Review Messages**: Include custom messages in notifications.
3. **User Management**: Block or unblock users.
4. **Request Status**: Update request statuses directly from the dashboard.

## Security
- **JWT Authentication**: Secures routes and user access.
- **Sanitization**: Prevents malicious input.
- **IP Logging**: Tracks user IP addresses for security.

## Conclusion
The Request Management Portal provides a comprehensive solution for handling user-submitted requests with robust administrative control and security features. It also incorporates a cryptocurrency payment system for user support. For further details, customization, or support, please [Contact me on Discord](https://discord.gg/sqVBrMVQmp).

---
