# Dentiste (dentist_1)

A Next.js 16 app for a dental clinic admin dashboard showcasing role-based dashboards (doctor, patient, secretary), appointment and consultation pages, and an authentication flow using HttpOnly cookies.

## Quick start (development)

Prerequisites:
- Node.js 18+ / 20 recommended
- npm (comes with Node)

Steps:

1. Install dependencies

```powershell
npm install
```

2. Start the dev server

```powershell
npm run dev
```

3. Open http://localhost:3000


## Build (production)

```powershell
npm run build
npm start
```

## Important notes

- Authentication uses an HttpOnly cookie (`auth-token`) set by the server-side API routes under `app/api/auth/*`. Server-side checks are enforced in role layouts (doctor/patient/secretary).
- Many UI components live under `components/ui` and are reusable across pages.

## Contributing

If you'd like me to set up CI or add tests, I can scaffold a GitHub Actions workflow to run `npm ci` + `npm run build` on PRs.

---

Repository: https://github.com/midobatlmios/dentist_1

If you'd like more details in the README (API endpoints, env-vars, run tests), tell me what you'd like added and I’ll update it.