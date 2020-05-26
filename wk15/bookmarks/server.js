// environment
const app = express();
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/bookmarks';
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json()); 
app.use(express.static('public')) 

// connect to mongo
mongoose.connect(mongoURI, { useNewUrlParser: true }, () => {
    console.log("MongoDB connection made!", mongoURI)
});

// db messaging
mongoose.connection.on('error', err => console.log(err.message));
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));

// Routers
const todosController = require('./controllers/bookmarks.js');
app.use('/bookmarks', todosController);

// app listening
app.listen(PORT, () => console.log('listening on port ', PORT));