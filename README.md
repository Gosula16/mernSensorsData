# Sensor Management System

A MERN (MongoDB, Express, React, Node.js) based application to manage sensor data (e.g., air quality, light intensity, sound levels) with add, update, and delete functionalities.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14+ recommended)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)

### Setup and Run

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Gosula16/mernSensorsData.git
   cd mernSensorsData
Backend Setup:

Navigate to backend: cd back
Install dependencies: npm install
Start server: npm start (Runs on http://localhost:5000)
Frontend Setup:

Navigate to frontend: cd ../front
Install dependencies: npm install
Start frontend: npm start (Runs on http://localhost:3000)
Run the App:

Ensure both servers are running: backend on 5000 and frontend on 3000.
Access at http://localhost:3000.
Scripts
Backend: npm start (prod), npm run dev (dev)
Frontend: npm start (dev), npm run build (prod)


# Sensor Management System

This project is a **Sensor Management System** built with the MERN stack (MongoDB, Express, React, Node.js) that enables users to manage sensor data efficiently. The application is designed for monitoring and updating sensor data such as air quality, light intensity, and sound levels, with capabilities to add, update, and delete sensors as needed.

## Features

- **Add, update, and delete** sensor entries, including information like node ID, air quality, light intensity, and sound levels.
- **Responsive and interactive UI** built with React for easy navigation and user experience.
- **RESTful API** backend powered by Express and Node.js, ensuring secure and efficient data transactions.
- **MongoDB** as the database for fast and flexible data storage, capable of handling large datasets.
  
## Project Structure

```plaintext
.
├── back/                # Backend folder
├── front/               # Frontend folder
├── README.md            # Project documentation
└── package.json         # Project metadata and dependencies
