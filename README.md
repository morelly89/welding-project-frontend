# Morelly Welding

Morelly Welding is my final project for the TripleTen Software Engineering program.

I built this project around something I already know and work with in real life: welding and fabrication. The goal was to create a website where users can learn about different welding processes, view some of my projects, create an account, and submit a welding or fabrication request.

## Live Website

[Visit Morelly Welding](https://www.morellywelding.com)

## Repositories

Frontend repository:  
[GitHub Frontend Repository](https://github.com/morelly89/welding-project-frontend.git)

Backend repository:  
[GitHub Backend Repository](https://github.com/morelly89/welding-project-backend.git)

## What the Site Can Do

Users can:

- Create an account and log in
- Update their name and profile picture
- View welding topics and featured projects
- Submit a welding or fabrication project request
- View their previous project requests
- Cancel a project request
- Use a unit converter for common measurements used in fabrication

## Unit Converter

I added a unit converter because measurements are an important part of fabrication.

The converter uses a third-party API and can convert between units such as:

- Inches
- Centimeters
- Millimeters
- Feet
- Meters

The API request is handled with JavaScript `fetch()` inside the `utils` folder.

## Technologies

### Frontend Technologies

- React
- React Router
- JavaScript
- HTML
- CSS
- Vite

### Backend Technologies

- Node.js
- Express
- MongoDB
- Mongoose
- JWT authentication
- bcrypt
- Resend

### Deployment Technologies

- Google Cloud
- Nginx
- PM2
- MongoDB Atlas
- Cloudflare DNS
- Certbot
- Let's Encrypt
- HTTPS

## Main Components

Some of the main components in the project are:

- Header
- Navigation
- Hero
- Main
- Welding Topics
- Featured Projects
- Project Request
- Unit Converter
- My Requests
- Login Modal
- Signup Modal
- Footer

## Running the Project Locally

### Frontend Setup

Clone the frontend repository:

```bash
git clone https://github.com/morelly89/welding-project-frontend.git
```

Move into the frontend directory:

```bash
cd welding-project-frontend
```

Install the dependencies:

```bash
npm install
```

Start the frontend development server:

```bash
npm run dev
```

### Backend Setup

Clone the backend repository:

```bash
git clone https://github.com/morelly89/welding-project-backend.git
```

Move into the backend directory:

```bash
cd welding-project-backend
```

Install the dependencies:

```bash
npm install
```

## Environment Variables

The backend requires environment variables in order to connect to the database, handle authentication, use the email service, and run the server.

Create a `.env` file in the root directory of the backend project.

The required environment variables are:

```env
MONGODB_URI=
JWT_SECRET=
RESEND_API_KEY=
PORT=3001
```

The actual values for `MONGODB_URI`, `JWT_SECRET`, and `RESEND_API_KEY` are private and are not included in this repository.

A `.env.example` file is included in the backend repository as a template for the required environment variables.

- `MONGODB_URI` — MongoDB connection string used by the backend
- `JWT_SECRET` — private secret used to create and verify authentication tokens
- `RESEND_API_KEY` — API key used for email functionality
- `PORT` — port used by the backend server

After configuring the `.env` file, start the backend server:

```bash
npm start
```

## Deployment

The application is deployed on Google Cloud.

The production setup uses:

- Nginx to serve the React frontend
- Nginx as a reverse proxy for `/api` requests
- PM2 to keep the Node.js backend running
- MongoDB Atlas for the production database
- Cloudflare for DNS management
- Let's Encrypt and Certbot for HTTPS

## Video Walkthrough

Video walkthrough coming soon.
