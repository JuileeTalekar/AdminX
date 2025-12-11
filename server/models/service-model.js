const {Schema, model, Mongoose} = require('mongoose');

const serviceSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
});

const Service = model('Service', serviceSchema);

module.exports = Service;