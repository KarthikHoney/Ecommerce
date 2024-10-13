const mongoose =  require('mongoose')

const orders = new mongoose.Schema({
    cartItems:Array,
    amount:String,
    createdAt:Date,
    status:String
})

module.exports = mongoose.model('order',orders)