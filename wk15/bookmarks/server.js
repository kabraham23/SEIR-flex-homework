//=======================
// DEPENDENCIES
//=======================
const express = require('express');
const mongoose = require('mongoose');


//=======================
// VARIABLES
//=======================
const app = express();
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/oxygen';
const PORT = process.env.PORT || 3000;

//=======================
// MIDDLEWARE
//=======================
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

//=======================
// MONGODB CONNECTION
//=======================
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
mongoose.connection.on('error', (error) => console.log(error.message));
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));
mongoose.connection.on('open', ()=>{});

//=======================
// LISTENING
//=======================



app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})