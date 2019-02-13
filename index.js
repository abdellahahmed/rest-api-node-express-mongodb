const express = require('express');
const routes = require('./routes/api')

// set up express app
const app = express();

// initialize routes
app.use('/api',routes);


// listen for request
app.listen(process.env.port || 4000, function() {
    console.log('listening for requests');
});