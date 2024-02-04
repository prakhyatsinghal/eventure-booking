# Eventure Booking

Eventure Booking is a platform that connects talented individuals with unique spaces for organizing their events, meetings, and productions. This repository contains the codebase for both the frontend and backend components of the Eventure Booking application.

## Tech Stack

- Frontend: React
- Backend: Node.js
- Database: MongoDB

## Folder Structure

Eventure-booking/
├── eventure-backend/
│ ├── config/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── tests/
│ ├── utils/
│ ├── .env
│ ├── .gitignore
│ ├── app.js
│ ├── package.json
│ └── README.md
└── eventure-frontend/
├── public/
├── src/
│ ├── components/
│ ├── pages/
│ ├── services/
│ ├── styles/
│ ├── App.js
│ ├── index.js
│ └── README.md
├── .gitignore
├── package.json
├── README.md


## Assumptions

- The backend API assumes that MongoDB is running locally, and the connection details are configured in the `eventure-backend/config/db.js` file.
- The backend and frontend are intended to run on separate servers during development. Adjust the CORS configuration in the backend accordingly.

## Getting Started

### Backend Setup

1. Navigate to the `eventure-backend` directory.
2. Install dependencies: `npm install`.
3. Create a MongoDB database and update the connection details in `eventure-backend/config/db.js`.
4. Create a `.env` file in the `eventure-backend` directory with the necessary environment variables (e.g., `PORT`, `JWT_SECRET`).
5. Run the backend server: `npm start`.

### Frontend Setup

1. Navigate to the `eventure-frontend` directory.
2. Install dependencies: `npm install`.
3. Update the API endpoint in `eventure-frontend/src/services/api.js` if the backend is running on a different server.
4. Run the frontend development server: `npm start`.

Visit the respective README files in each directory for more detailed instructions.