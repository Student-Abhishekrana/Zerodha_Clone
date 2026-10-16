# Zerodha Clone

## Local setup

Start each app from its own folder with `npm install` and `npm start`:

- `Backend/` — API on port 8080
- `frontend/` — public site on port 3000
- `dashboard/` — authenticated dashboard on port 3001

Create `Backend/.env` from [`Backend/.env.example`](./Backend/.env.example).
Replace the `TOKEN_KEY` placeholder with a unique generated key; the example
placeholder is intentionally rejected. Set `MONGODB_URL`, provide a unique
strong `TOKEN_KEY` (at least 32 characters),
and set `CLIENT_ORIGINS` to the comma-separated frontend origins used by your
deployment. Generate a key with `node -e "console.log(require('crypto').randomBytes(48).toString('base64url'))"`.
The API refuses to start if `TOKEN_KEY` is missing or too short. Rotate any
previous signing key; existing sessions signed with the old key will stop
working.

If your system DNS resolver refuses MongoDB Atlas SRV lookups, the backend
retries them using `MONGODB_DNS_SERVERS` (Google Public DNS by default). Set
that variable to your network's approved DNS resolvers if public DNS is blocked
or not permitted.

Portfolio records are scoped to the authenticated user's `userId`. Existing
orders, holdings, and positions without an owner are not returned to users.
Back up and explicitly assign ownership to any legacy records before migrating
them; the app does not guess who owns shared records.
