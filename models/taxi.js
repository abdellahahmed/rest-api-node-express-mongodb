const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create taxi schema and model 
const TaxiSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    plate: {
        type: String, 
    },
    available: {
        type: Boolean,
        default: false
    }

    // add in geo location
});


const Taxi = mongoose.model('taxi',TaxiSchema);

module.exports = Taxi;