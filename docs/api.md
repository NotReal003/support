# Request Management Portal-API — Professional Setup & Usage Guide

This document provides a comprehensive, step-by-step guide to deploying, configuring, and leveraging the Request Management Portal-API (NotReal003/API). It covers prerequisites, environment setup, authentication workflows, error handling, admin operations, and best practices.

---

## 1. Overview

**Request Management Portal-API** is a Node.js/Express backend for managing user requests, authentication, and administration through multiple OAuth providers (Google, Discord, and GitHub), as well as (optionally) email-based flows. It supports role-based access control and integrates with Discord webhooks for audit logging and error reporting.

---

## 2. Prerequisites

- **Node.js** (v14+ recommended)
- **npm** (v6+)
- **MongoDB** instance (local or cloud, e.g., MongoDB Atlas)
- OAuth credentials for:
  - Google Cloud (OAuth 2.0 Client ID/Secret)
  - Discord Developer Portal (Client ID/Secret, Redirect URI)
  - GitHub Developer Settings (Client ID/Secret) *(currently disabled in code)*
- Gmail account with App Password (for email verification, if enabled)
- Discord webhook URLs (for error and auth event logging)

---

## 3. Environment Configuration

Create a `.env` file in the project root. The following variables are required:

| Variable                   | Description                                  | Example/Notes                |
|----------------------------|----------------------------------------------|------------------------------|
| `SESSION_SECRET`           | Cookie/session secret                        | Strong random string         |
| `PORT`                     | API server port                              | 3001                         |
| `MONGODB_URI`              | MongoDB connection string                    | mongodb+srv://.../dbname     |
| `GOOGLE_CLIENT_ID`         | Google OAuth Client ID                       |                              |
| `GOOGLE_CLIENT_SECRET`     | Google OAuth Client Secret                   |                              |
| `DISCORD_CLIENT_ID`        | Discord OAuth Client ID                      |                              |
| `DISCORD_CLIENT_SECRET`    | Discord OAuth Client Secret                  |                              |
| `DISCORD_REDIRECT_URI`     | Discord OAuth Redirect URI                   | Must match Discord app       |
| `G_ID`                     | GitHub OAuth Client ID                       | *Currently unused*           |
| `G_SECRET`                 | GitHub OAuth Client Secret                   | *Currently unused*           |
| `EMAIL`                    | Gmail address (for sending codes)            | Enable App Password          |
| `EPASS`                    | Gmail App Password                           |                              |
| `ERROR_WEBHOOK`            | Discord webhook for API errors               |                              |
| `USER_AUTH_WEBTOKEN`       | Discord webhook for auth events              |                              |
| `JWT_SECRET`               | Secret for JWT signing                       | Strong random string         |
| `ADMIN_ID`                 | Special user ID for admin privilege          | User’s internal ID           |

---

## 4. Installation & Launch

```sh
git clone https://github.com/NotReal003/API.git
cd API
npm install
cp .env.example .env   # if present; otherwise create .env manually
# Edit .env and populate all variables
npm start
# or, for dev mode:
npx nodemon index.js
```

::: danger PLEASE NOTE
The API will throw an error and halt if `MONGODB_URI` is missing.
:::

## 5. Authentication Workflows

### 5.1 Google OAuth

- Endpoint: `/auth/internal/google`
- Uses Passport.js with Google OAuth 2.0.
- On login, creates or updates user profile in MongoDB.
- Access and refresh tokens are stored in the database.

### 5.2 Discord OAuth

- Endpoint: `/auth/internal/discord`
- Uses Discord’s OAuth 2.0.
- Requires a valid redirect URI configured in both your `.env` and Discord app settings.
- On login, creates or updates user profile in MongoDB.

### 5.3 GitHub OAuth

- Endpoint: `/auth/internal/github`
- **Currently disabled in production code** for security. All attempts are rejected with an informative message.
- GitHub integration is present in code if you wish to re-enable in a fork.

### 5.4 Email Sign-up/Sign-in (Optional, Disabled by Default)

- Endpoints: `/auth/internal/e-signup` and `/auth/internal/e-signin`
- Sends a 6-digit verification code to user’s email via Gmail.
- Both flows are currently disabled and return a message to use Google or Discord OAuth instead.
- **To re-enable:** Update the route logic to allow signup/signin.

### 5.5 JWT Token Use

- Used for secure routes and session management.
- Secret: `JWT_SECRET`
- Example in `/auth/internal/ip` route, where JWT is used to verify and log user device/IP.

---

## 6. API Structure & Key Endpoints

- Main router: `/`
- **User authentication:** `/auth/internal/[provider]`
- **Admin interface:** `/admins` (serves static assets, e.g., admin panel HTML)
- **Role management:** `/admins/internal/staff`
- **User management:** `/users`, `/requests`, etc. (see full code for details)
- **Error handling:** Centralized, via `middlewares/errorHandler.js`
- **Audit logging:** All errors and critical auth events are sent to Discord via webhooks.

---

## 7. Admin & Role Management

- **Admin privileges:** Users with `admin: true` or whose ID matches `ADMIN_ID`.
- **Promote/Demote users:**  
  - `PATCH /admins/internal/staff/manage/:promoUser/role`  
    Body: `{ "role": "admin" | "mod" | "user" }`
  - `PUT /admins/internal/staff/demote/:demoUser`  
    Demotes a staff user to normal user.
- **Owner permissions:** Only users with `owner: true` can assign admin roles.

---

## 8. Email Verification (When Enabled)

- Uses Gmail and nodemailer.
- Requires `EMAIL` and `EPASS` in `.env`.
- Sends verification code for new sign-ups or sign-ins.
- **Currently disabled**; see code if you wish to re-enable.

---

## 9. Logging, Error Handling & Security

- **Errors:** All uncaught exceptions are logged to the Discord webhook (`ERROR_WEBHOOK`).
- **User Auth Events:** Logins, including IP and device info, are sent to `USER_AUTH_WEBTOKEN` webhook.
- **Sensitive secrets:** Never commit `.env` to version control.
- **Session/JWT secrets:** Must be strong, unique, and kept confidential.
- **Production:** Use HTTPS and secure cookies for deployment.

---

## 10. Example Usage Flows

### Authenticate with Google

1. User visits `/auth/internal/google`.
2. User is redirected to Google’s OAuth consent screen.
3. On success, user is stored (or updated) in MongoDB and session is established.

### Promote a User (as Admin)

```http
PATCH /admins/internal/staff/manage/{userId}/role
Content-Type: application/json

{
  "role": "admin"
}
```
- Requires admin privileges (session or JWT cookie).

### View Admin Panel

- Visit `/admins` in the browser. 
- Static admin resources are served for authorized users.

---

## 11. Troubleshooting & Best Practices

- **Server fails to start:** Check for missing or invalid `.env` variables (esp. `MONGODB_URI`).
- **OAuth errors:** Ensure all redirect URIs and client secrets match your providers’ settings.
- **Email issues:** Gmail may block sign-in; use App Passwords and enable "less secure app access".
- **Permissions:** Only admins/owners may promote/demote users.
- **Security:** Always use strong secrets and never expose environment configs.

---

## 12. For Contributors

- **Code style:** Follows standard Express/Mongoose conventions.
- **Adding endpoints:** Use new routers under `routes/` and mount in `index.js`.
- **Testing:** Manual and automated tests are recommended before PRs.
- **Documentation:** Update this guide if you add new features.

---

## 13. References

- [Google OAuth2 for Web](https://developers.google.com/identity/protocols/oauth2)
- [Discord OAuth2](https://discord.com/developers/docs/topics/oauth2)
- [Nodemailer Docs](https://nodemailer.com/about/)
- [Mongoose Docs](https://mongoosejs.com/)
- [Express.js Docs](https://expressjs.com/)
- [GitHub Repository](https://github.com/NotReal003/API)

---

*For further questions or support, please review the repository’s README or open an issue on GitHub.*
