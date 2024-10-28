import express from 'express';
import authRoutes from './routes/authRoutes.js'; // Adjust the path as necessary
import cors from 'cors';
import db from './config/db.js'; // Ensure this is correct

const app = express();

app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // To parse JSON request bodies

app.use('/auth', authRoutes); // Prefix for authentication routes

const PORT = 5000; // Ensure this matches the port your client is trying to access
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
