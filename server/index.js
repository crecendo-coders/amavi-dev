import express from "express";
import ViteExpress from "vite-express";
import session from "express-session";
import event from "./controllers/event.js";
import subscriber from "./controllers/subscriber.js";
import member from "./controllers/member.js";
import audition from "./controllers/audition.js";
import Stripe from "stripe";
import "dotenv/config";
import process from "process";

const app = express();
const PORT = 2319;
const stripe = new Stripe(process.env.STRIPE_SECRET);
const domain = process.env.DOMAIN;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({
    saveUninitialized: true,
    resave: false,
    secret: "secret",
    cookie: {
      maxAge: 1000 * 60 * 60 * 48, // 48 hour cookie
    },
  })
);
// Routes Go Here
app.get('/api/events', event.get)
app.get('/api/events/all', event.getAll)
app.put('/api/event/:id', event.put)
app.put('/api/event/archive/:id', event.archive)
app.delete('/api/event/:id', event.delete)
app.post('/api/event/', event.post)

app.get('/api/subscribers', subscriber.get)
app.get('/api/subscribers/all', subscriber.getAll)
app.put('/api/subscriber/:id', subscriber.put)
app.put('/api/subscriber/unsubscribe/:id', subscriber.unsubscribe)
app.delete('/api/subscriber/:id', subscriber.delete)
app.post('/api/subscriber/', subscriber.subscribe)

app.post("/api/audition", audition.request);

// Member endpoints
app.get('/api/activeMembers',member.get)
app.get('/api/members',member.getAllMembers)
app.get('/api/everyone',member.getAll)
app.put('/api/member/:id',member.put)

// Stripe endpoints
app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: "price_1O2HeTHC1pU4F4it9spgSk9A",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${domain}?success=true`,
    cancel_url: `${domain}?canceled=true`,
  });

  res.redirect(303, session.url);
});

ViteExpress.listen(app, PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
