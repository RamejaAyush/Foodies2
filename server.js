const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI =
 'mongodb+srv://ayush:test@cluster0.xfnhm.mongodb.net/node-auth?retryWrites=true&w=majority';
mongoose
 .connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
 })
 .then((result) => app.listen(3000))
 .catch((err) => console.log(err));

// routes
app.get('*', checkUser);

app.use(authRoutes);

app.get('/', (req, res) => res.render('index', { title: 'home' }));

app.get('/about', (req, res) => res.render('about', { title: 'about' }));

app.get('/contact', (req, res) => res.render('contact', { title: 'contact' }));

app.get('/add-own', requireAuth, (req, res) =>
 res.render('add-own', { title: 'add-own' })
);

app.get('/index-logged', requireAuth, (req, res) =>
 res.render('index-logged', { title: 'index' })
);

app.get('/cooking', requireAuth, (req, res) =>
 res.render('cooking', { title: 'cooking' })
);

app.get('/order', requireAuth, (req, res) =>
 res.render('order', { title: 'order' })
);

app.get('/meals', requireAuth, (req, res) =>
 res.render('meals', { title: 'Meals' })
);

app.get('/recipe', requireAuth, (req, res) =>
 res.render('recipe', { title: 'recipe' })
);

app.use((req, res, next) => {
 res.status(404).render('404', { title: '404' });
});
