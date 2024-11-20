This project is a Full Stack Todo Application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). It allows users to create, manage, and organize their tasks efficiently, with additional features for user authentication and authorization using JSON Web Tokens (JWT). This application is designed to be both user-friendly and secure, providing a robust solution for task management.

🚀 Key Features

1.  User Registration & Login:
    Secure user authentication with encrypted passwords using bcrypt.
2.  User Authorization:
    Access control for specific resources (each user can only manage their own tasks).
3.  CRUD Operations for Todos:
    Create, Read, Update, and Delete tasks with a clean and intuitive user interface.
    Mark tasks as complete/incomplete.
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
   Bootstrap for modern and responsive UI
2. Backend:
   Node.js and Express.js for building RESTful APIs
   MongoDB for database management
   Mongoose for object data modeling (ODM)
   bcrypt for password hashing

How to Run Locally

1.  Clone the Repository:
    git clone https://github.com/your-username/todo-mern-app.git
    cd todo-mern

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

4.  Run the Application:
    Start the backend server:
    cd server
    npm run dev

    Start the frontend server:
    cd client
    npm run dev

5.  Access the Application:
    Open your browser and navigate to http://localhost:5173.

🛡️ Security & Best Practices
Passwords are hashed using bcrypt before storing in the database.

📝 Future Enhancements
Add Forgot Password and Password Reset functionalities.
Implement Pagination for managing large sets of todos.
Add support for Push Notifications to remind users of pending tasks.
Dark Mode support for improved user experience.
