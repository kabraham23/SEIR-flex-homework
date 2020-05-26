const express = require('express');
const router = express.Router();

// CRUD
///////////////

const Bookmarks = require('../models/bookmarks.js');

router.get ('/', (req, res) => {
    Bookmarks.find({}, (err, foundBookmarks) => {
        res.json(foundBookmarks);
    })
});

// Post
router.post('/', (req, res) => {
    Bookmarks.create(req.body, (err, createdBookmark) => {
        res.json(createdBookmark);
    })
});

// Delete
router.delete('/:id', (req, res) => {
    Bookmarks.findByIdAndDelete(req.params.id, (err, data) => {
        res.json(data);
    })
});



module.exports = router;