# Morelly Welding

Morelly Welding is my final project for the TripleTen Software Engineering program.

I built this project around something I already know and work with in real life: welding and fabrication. The goal was to create a website where users can learn a little about different welding processes, view some of my projects, create an account, and submit a welding or fabrication request.

## What the site can do

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

### Frontend

- React
- React Router
- JavaScript
- HTML
- CSS
- Vite

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- JWT authentication
- bcrypt
- Resend

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
