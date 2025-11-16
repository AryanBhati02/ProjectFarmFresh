// app.js
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const session = require('express-session');
const flash = require('connect-flash');

dotenv.config();
const app = express();

// BODY PARSER
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// STATIC
app.use(express.static(path.join(__dirname, 'public')));

// SESSION
app.use(
  session({
    secret: "FARM_FRESH_SECRET_123",
    resave: false,
    saveUninitialized: false,
  })
);

// FLASH
app.use(flash());

// GLOBAL VARIABLES
app.use((req, res, next) => {
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  res.locals.currentUser = req.session.user || null;
  next();
});

// EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// MONGO CONNECT
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✔ MongoDB Connected"))
  .catch(err => console.log(err));

// ROUTES
const authRoutes = require('./routes/authRoutes');
app.use('/', authRoutes);

const contactRoutes = require("./routes/contactRoutes");
app.use("/", contactRoutes);

// FRONTEND PAGES
app.get('/', (req, res) => res.render('index'));
app.get('/about', (req, res) => res.render('about'));
app.get('/explore', (req, res) => res.render('explore'));
app.get('/cart', (req, res) => res.render('cart'));
app.get('/checkout', (req, res) => res.render('checkout'));
app.get('/contact', (req, res) => res.render('contact'));

// 404
app.use((req, res) => res.status(404).send("Page Not Found"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("✔ Server running at http://localhost:" + PORT));

