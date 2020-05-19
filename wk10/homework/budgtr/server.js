const express = require("express");
const app = express();

const budget = require('./models/budget.js');

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'))

// Index
app.get('/budgets', (req, res) => {
    res.send(budget);
});

// Create
app.post('/budgets', (req, res) => {
    budget.push(req.body);
    res.redirect('/budgets');
});

// New
app.get('/budgets/new', (req, res) => {
    res.render('New');
});

// Show
app.get('/budgets/:index', (req, res) => {
    res.send(budget[req.params.index]);
});


app.listen(3000, () => {
    console.log('running on port 3000');
});