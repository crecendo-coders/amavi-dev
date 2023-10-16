import express from "express";
import ViteExpress from 'vite-express';
import session from "express-session";
import eventCtrl from "./controllers/eventCtrl.js"
import audition from "./controllers/audition.js"
import auth from "./controllers/authCtrl.js"
import Stripe from "stripe";

const app = express();
const PORT = 2319;
const stripe = require("stripe")('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
    saveUninitialized: true,
    resave: false,
    secret: 'secret',
    cookie: {
        maxAge: 1000 * 60 * 60 * 48 // 48 hour cookie
    }
}));
// Routes Go Here
app.get('/api/events', eventCtrl.getEvents)
app.post('/api/audition', audition.post)

// Authentication endpoints Go Here
app.delete('/api/logout', auth.logout)
app.post('/api/register', auth.register)
app.post('/api/login', auth.login)
app.get('/api/user', auth.checkUser)

ViteExpress.listen(app, PORT, () => console.log(`Server is running on http://localhost:${PORT}`));


//app.get('/api/conductor/', get.conductor)
//app.get('/api/chorale/', get.chorale)
// app.get('/api/guest-artists/', get.guestArtists)
// app.get('/api/guest-artists/:id', get.guestArtist)

// app.put('/api/conductor/', get.conductor)
// app.put('/api/chorale/', put.chorale)
// app.put('/api/guest-artists/', put.guestArtists)
// app.put('/api/guest-artist/:id', put.guestArtist)

// app.delete('/api/conductor/', del.conductor)
// app.delete('/api/chorale/', del.chorale)
// app.delete('/api/guest-artists/', del.guestArtists)
// app.delete('/api/guest-artist/:id', del.guestArtist)

// app.post('/api/conductor/', post.conductor)
// app.post('/api/chorale/', post.chorale)
// app.post('/api/guest-artists/', post.guestArtists)
// app.post('/api/guest-artist/:id', post.guestArtist)