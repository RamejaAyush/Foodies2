const express = require('express')
const app = express()

// ejs is the view engine now
app.set('view engine', 'ejs')

// middleware
app.use(express.static('public'))

// port
app.listen(3000)

// routes
app.get('/', (req, res) => {
  res.render('index', { title: 'home' })
})

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'contact' })
})

app.get('/cooking', (req, res) => {
  res.render('cooking', { title: 'cooking' })
})

app.get('/order', (req, res) => {
  res.render('order', { title: 'order' })
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'about' })
})

app.use((req, res, next) => {
  res.status(404).render('404', { title: '404' })
})
