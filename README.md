# Timesheet SaaS App (Assessment)
## Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

First, run the development server:

## Setup Instructions
- Clone the repo: `git clone <repo-url>`
- Install dependencies: `npm install`
- Add env variables:
```bash
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret (sample ENV file mentions how to create it)
```
- Run dev server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Credentials
    - Email: test@test.com
    - Password: 12345678

---
## Frameworks / Libraries Used
- Next.js (App Router)
- TypeScript
- NextAuth (Credentials Auth)
- React Hook Form + Zod
- TanStack React Query
- Tailwind CSS
- Radix UI
- Lucide Icons

---

## Assumptions / Notes
- Mock data used for timesheets/tasks (no DB)
- Auth handled via **NextAuth** credentials flow
- React Query used for client-side caching + mutations
- Optimistic updates implemented for task Delete
- App Router with **Server + Client component** separation
- **Middleware** used for route protection
- A bit of responsiveness left on Modal
- TanStack Table could be used instead of custom DataTable
- Other folder structure based on **features** could be used as well to ensure separation of concerns

## Time Spent
- Work was done in multiple sessions (2-3), no idea about exact time
- Overall estimate: ~8–10 hours total development time
