import express from "express";
import ViteExpress from 'vite-express';
import session from "express-session";
import eventCtrl from "./controllers/eventCtrl.js"

const { postEvent, getEvents } = eventCtrl; 


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

app.get('/api/events', getEvents);

// Authentication endpoints Go Here

ViteExpress.listen(app, PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
