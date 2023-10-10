import express from "express";
import ViteExpress from 'vite-express';
import session from "express-session";
import { fileURLToPath } from 'url'; // Import the fileURLToPath function
import path from "path";

const __filename = fileURLToPath(import.meta.url); // Get the current file's path
const __dirname = path.dirname(__filename); // Get the current directory's path

const app = express();
const PORT = 2319;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
    saveUninitialized: true,
    resave: false,
    secret: 'secret',
    cookie: {
        maxAge: 1000 * 60 * 60 * 48
    }
}));

// Serve static files from a directory (e.g., public)
app.use(express.static(path.join(__dirname, '../index.html')));

// Routes Go Here

// Authentication endpoints Go Here

ViteExpress.listen(app, PORT, () => console.log(`Server is running on http://localhost:${PORT}`));