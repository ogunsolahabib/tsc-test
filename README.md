# 3 SIDED CUBE Web Dev

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Setting up the project locally

Install dependencies:

```bash
npm install
```
Setup Environment variable:

Create an `env.local` file and put:
```env
NEXT_PUBLIC_API_BASE_URL=https://cube-academy-api.cubeapis.com/api
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



## Challenges?
- Properly syncing local storage with the progress bar UI took a while

## Extra technologies?
- classNames.js: for generating dynamic classNames for components

## Extra features?
- Login, storing and retrieving the auth token (JWT) in cookies storage

## Things to implement in extra time?
- Image optimization (exported assets are a bit large)
- Radio Group component for mobile
- More animations
