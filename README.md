# Project Setup Guide

## Prerequisites

This project is structured as an NX Monorepo, which allows for better scalability and management of multiple applications within a single repository.

Before proceeding, ensure you have NX installed globally:

```
npm install -g nx@latest
```

## Backend Setup

1. Install Dependencies

Navigate to the backend directory and install dependencies:

```
cd apps/server
npm install
```

2. Environment Variables

Copy the example environment file to create a valid .env file:

```
cp .env.example .env
```

3. Install Prisma ORM

```
npm install prisma --save-dev
```

4. Run Database Migrations

Apply database migrations using Prisma:

```
npm run migrate
```

5.Seed the Database (Optional)

If the project requires seeding the database with initial data, run:

```
npm run seed
```

6. Start Backend Server

From the root of the repository, start the backend:

```
nx dev apps/server
```

## Frontend Setup

1. Install Dependencies

Navigate to the frontend directory and install dependencies:

```
cd client
npm install
```

2. Start Frontend Application

From the root of the repository, start the frontend:

```
nx dev client
```

## Notes

1. The backend must be running before starting the frontend.

2. Ensure your database is properly set up before running migrations.

3. Use .env to configure necessary environment variables for both backend and frontend as required.

Now your application should be up and running!
