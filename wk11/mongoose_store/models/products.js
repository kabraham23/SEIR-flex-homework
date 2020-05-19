const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const productSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    img: {type: String, required: true},
    price: {type: Number, required: true}, // add requirement to be over 0
    qty: {type: Number, required: true}
}, {timestamps: true});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;