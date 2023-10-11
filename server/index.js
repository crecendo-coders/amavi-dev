import express from "express";
import ViteExpress from 'vite-express';
import session from "express-session";

import get from './getController.js'
import del from './deleteController.js'
import post from './postController.js'
import put from './putController.js'
import auth from './authController.js'

// const __filename = fileURLToPath(import.meta.url); // Get the current file's path
// const __dirname = path.dirname(__filename); // Get the current directory's path

const app = express();
const PORT = 4001;

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
app.get('/api/conductor/', get.conductor)
app.get('/api/chorale/', get.chorale)
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




// Authentication endpoints Go Here
app.delete('/api/logout', auth.logout)
app.post('/api/register', auth.register)
app.post('/api/login', auth.login)
app.get('/api/user', auth.checkUser)

ViteExpress.listen(app, PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
