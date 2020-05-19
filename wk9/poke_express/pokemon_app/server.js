const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//import data
const pokemon = require('./models/pokemon.js');

// middleware
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//index route
app.get('/pokemon', (req, res) => {
    res.render('Index.jsx');
})

app.listen(port,() => {
    console.log('Welcome to the Pokemon App!');
});