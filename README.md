# Movie Adda

Welcome to Movie Adda - your go-to platform for exploring and managing your favorite movies! This MERN (MongoDB, Express.js, React.js, Node.js) stack project allows users to log in, view movie details fetched from an external API, and manage their list of favorite movies.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

1. **User Authentication:**
   - Secure user authentication using bcryptjs for password hashing.
   - Users can sign up, log in, and log out.

2. **Movie Details:**
   - Fetches movie details from an external API for an extensive collection.
   - Users can view details like title, release date, genre, etc.

3. **Favorite Movies:**
   - Logged-in users can add movies to their list of favorites.
   - Option to remove movies from the favorites list.

4. **Responsive Design:**
   - User-friendly interface accessible on various devices.

## Tech Stack

- **Frontend:**
  - React.js

- **Backend:**
  - Node.js
  - Express.js

- **Database:**
  - MongoDB (You may include the version if necessary)

- **Authentication:**
  - Bcryptjs

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/raghav1482/MvADDA.git]
   cd mvadda
## Install server dependencies
- cd backend
- npm install

## Install client dependencies
- cd frontend
- npm install

## Run the server
- cd backend
- node index

## Run the client (in a new terminal window)
- cd frontend
- npm start

## Environment Variables

Create a `.env` file in the `server` directory and add the following environment variables:

```plaintext
# Database
DATABASE=your_database_connection_string

```

## Contributing to Movie Adda

🎉 We welcome your contributions to make this project even better. 🎉
