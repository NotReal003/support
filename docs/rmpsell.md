# Request Management Portal - Sell

::: tip STATUS
Production-Ready | Full Ownership & Code Transfer Available
:::

## Overview

The **Request Management Portal** is a full-stack web application designed to manage user requests efficiently — ideal for support desks, internal ticketing, or client workflows.

It features:
- A clean, responsive **React frontend**
- A secure, extensible **Node.js + Express backend**
- **Role-based access**, OAuth login, and request tracking
- Discord webhook and email integration (optional)

---

## Key Features

### User Side
- Submit various request types
- Live request status tracking (Pending, Approved, Denied, Cancelled)
- Login via **Google OAuth** or **Discord OAuth**
- Secure JWT-based sessions

### Admin Dashboard
- Approve, deny, or cancel incoming requests
- Leave review messages for users
- Promote or demote users (admin, mod, user roles)
- Access secured admin panel at `/admins`

### Security & Logs
- IP and device auth event logging to Discord
- API error logs via webhook
- JWT-secured tokens
- `.env` based secret and credential system

### Optional Features
- Email verification with 6-digit code (via Gmail App Password)
- GitHub OAuth integration (present in code but currently disabled)

---

## Tech Stack

| Layer       | Stack                                       |
|-------------|----------------------------------------------|
| **Frontend**| React SPA with responsive design             |
| **Backend** | Node.js + Express REST API                   |
| **Database**| MongoDB with Mongoose                        |
| **Auth**    | Google/Discord OAuth + JWT sessions          |
| **Logging** | Discord Webhooks (for errors and auth events)|

---

## Setup Instructions

### Prerequisites

- Node.js v14+
- MongoDB Atlas or local instance
- Google & Discord OAuth credentials
- Gmail App Password (optional for email auth)

### Environment Variables (`.env`)

```
SESSION_SECRET=your_secret
PORT=3001
MONGODB_URI=your_mongo_uri
GOOGLE_CLIENT_ID=xxx
GOOGLE_CLIENT_SECRET=xxx
DISCORD_CLIENT_ID=xxx
DISCORD_CLIENT_SECRET=xxx
DISCORD_REDIRECT_URI=https://your-domain.com/callback
EMAIL=your@gmail.com
EPASS=your_gmail_app_password
JWT_SECRET=strong_random_value
ADMIN_ID=admin_mongo_id
ERROR_WEBHOOK=https://discord.com/api/webhooks/...
USER_AUTH_WEBTOKEN=https://discord.com/api/webhooks/...
```

::: warning
The API will throw a fatal error if `MONGODB_URI` is missing.
:::

### Running the App

```
git clone https://github.com/your-repo-link
cd API
npm install
cp .env.example .env
# Edit your env vars
npm start
```

---

## API Highlights

| Method | Route                                          | Description             |
|--------|------------------------------------------------|-------------------------|
| GET    | `/auth/internal/google`                        | Log in via Google OAuth |
| GET    | `/auth/internal/discord`                       | Log in via Discord OAuth|
| POST   | `/requests`                                    | Create new request      |
| GET    | `/requests`                                    | View user's requests    |
| PUT    | `/requests/:id/status`                         | Update request status   |
| PATCH  | `/admins/internal/staff/manage/{userId}/role`  | Change user role        |

::: tip
GitHub and email-based auth are included in the codebase and can be enabled if needed.
:::

---

## What's Included

- Full backend: Express API with auth, roles, request logic
- Full frontend: React-based UI with admin dashboard
- `.env.example` template
- Discord webhook logging
- Setup documentation
- Code OWNERSHIP — not just a license
- Optional support/setup help

---

## Suggested Use Cases

- Internal team request/issue tracker
- Client-facing support portal
- Customizable base for SaaS tools
- Dev teams building full MERN-stack apps

---

## Legal & License

::: danger
This project is **NO LONGER open source** as of July 13, 2025.
:::

- IP and full code ownership transfers to the buyer.
- Buyer may modify and use for any commercial project.
- Future public distribution (including FOSS) is restricted unless re-licensed.

---

## Pricing Info

- **Price Range:** $20,000 – $40,000 USD  
- **Includes:** Full source code (frontend/backend), documentation, optional setup help  
- **Delivery:** GitHub transfer or secure archive (.zip/.tar)

For negotiation or enterprise licensing, contact directly.

---

## Contact

For inquiries, live previews or offers:

- **Email:** `your-email@example.com`
- **Discord/Telegram/LinkedIn:** Contact link or username

---

## Demo or Screenshots

*(Add screenshots or a link to a live hosted demo here)*

---

## Thank You

You're viewing the documentation for the **Request Management Portal** – a modern, secure, and scalable web application for teams, admins, and developers alike.

Need help deploying it? Reach out — we’re here to assist.
