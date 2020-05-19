// dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/products.js');

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// mongoose connection
mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log("Connected to Mongo");
})

// ROUTES
// Index
app.get('/products', (req, res) => {
    Product.find({}, (error, allProducts) => {
        res.render('Index', {
            products: allProducts
        })
    });
});

// New


// Show
app.get('/products/:id', (req, res) => {
    Product.findById(req.params.id, (error, foundProduct) => {
        res.render('Show', {
            product: foundProduct
        })
    });
});


// Edit


// Delete


// listen
app.listen(3000, () => {
    console.log('listening on: ' + 3000);
});

