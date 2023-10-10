import express from "express";
import ViteExpress from 'vite-express';
import session from "express-session";

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

// Routes Go Here


// Authentication endpoints Go Here


ViteExpress.listen(app, PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
