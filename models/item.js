const mongoose = require('mongoose');

// Schemas are the structure of our data, and the data types

const itemSchema = new mongoose.Schema({
    price: Number,
    inventory: Number,
    nextDelivery: Date,
    deliveryAmt: Number,
    name: String
})

const Item = mongoose.model('Item', itemSchema)


module.exports = Item;

