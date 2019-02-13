const express = require('express');
const router = express.Router();

// get a list of taxi from database
router.get('/taxi', function(req, res) {
    res.send({
        type: 'GET'
    });
});

// add a new taxi to database
router.post('/taxi', function(req, res) {
    console.log(req.body);
    
    res.send({
        type: 'POST',
        hero: req.body.hero,
        name: req.body.name
    });
});

// update a taxi in the database
router.put('/taxi/:id', function(req, res) {
    res.send({
        type: 'PUT'
    });
});


// delete a taxi from database
router.delete('/taxi/:id', function(req, res) {
    res.send({
        type: 'DELETE'
    });
});


// export to index.js
module.exports = router;