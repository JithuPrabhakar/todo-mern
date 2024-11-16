This project is a Full Stack Todo Application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). It allows users to create, manage, and organize their tasks efficiently, with additional features for user authentication and authorization using JSON Web Tokens (JWT). This application is designed to be both user-friendly and secure, providing a robust solution for task management.

🚀 Key Features

1.  User Registration & Login:
    Secure user authentication with encrypted passwords using bcrypt.
    JWT-based authentication for user sessions, ensuring secure and stateless login.
2.  User Authorization:
    Role-based access control to protect API routes.
    Access control for specific resources (each user can only manage their own tasks).
3.  CRUD Operations for Todos:
    Create, Read, Update, and Delete tasks with a clean and intuitive user interface.
    Mark tasks as complete/incomplete.
    l tasks or filter based on completion status.
4.  Responsive UI:
    Fully responsive design using React for a seamless experience across devices.
    Dynamic and interactive front-end built with React Hooks and Context API.
5.  Persistent Data Storage:
    MongoDB Atlas for a cloud-based NoSQL database.
    Data persistence ensures that tasks and user sessions are stored securely.

🛠️ Technologies Used

1. Frontend:
   React.js
   React Router for client-side routing
   Axios for making API requests
   Tailwind CSS for modern and responsive UI
2. Backend:
   Node.js and Express.js for building RESTful APIs
   MongoDB for database management
   Mongoose for object data modeling (ODM)
   JSON Web Tokens (JWT) for authentication
   bcrypt for password hashing
3. Deployment:
   Frontend and Backend deployed on Vercel and Render (or similar hosting services)
   Environment variables managed securely for deployment

📦 todo-app
├── 📁 client # React Frontend
│ ├── 📁 src
│ ├── 📁 components # Reusable React components
│ ├── 📁 pages # React Router pages
│ ├── 📁 context # Context API for state management
│ ├── 📁 hooks # Custom hooks for authentication and API requests
│ └── 📄 App.js
├── 📁 server # Express Backend
│ ├── 📁 controllers # API endpoint controllers
│ ├── 📁 models # Mongoose data models
│ ├── 📁 routes # API routes
│ ├── 📁 middleware # Authentication middleware
│ └── 📄 server.js
├── .env # Environment variables
├── README.md
└── package.json

How to Run Locally

1.  Clone the Repository:
    git clone https://github.com/your-username/todo-mern-app.git
    cd todo-mern-app

2.  Install dependencies:
    Frontend:
    cd client
    npm install

    Backend:
    cd server
    npm install

3.  Setup Environment Variables:
    Create a .env file in the root of the server folder with the following
    PORT=1000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key

4.  Run the Application:
    Start the backend server:
    cd server
    npm run dev

    Start the frontend server:
    cd client
    npm start

5.  Access the Application:
    Open your browser and navigate to http://localhost:1000.

🛡️ Security & Best Practices
Passwords are hashed using bcrypt before storing in the database.
JWT tokens are used for secure and stateless authentication.
Role-based access control (RBAC) to protect sensitive routes.

📝 Future Enhancements
Add Forgot Password and Password Reset functionalities.
Implement Pagination for managing large sets of todos.
Add support for Push Notifications to remind users of pending tasks.
Dark Mode support for improved user experience.
