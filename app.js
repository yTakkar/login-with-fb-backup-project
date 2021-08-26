const express = require('express')
const app = express()
const { join } = require('path')
const PORT = 5100
const hbs = require('express-handlebars')

app.engine('hbs', hbs({
    extname: 'hbs'
}))
app.set('view engine', 'hbs')

app.use(express.static(
    join(__dirname, '/public')
))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/loggedin', (req, res) => {
    res.render('loggedin')
})

app.listen(PORT, () => 
    console.log('App running..')
)