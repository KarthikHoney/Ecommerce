
const mongoose  =  require('mongoose')


const products = new mongoose.Schema({
    name:String,
    rating:String,
    prize:String,
    description:String,
    image:String
})

module.exports = mongoose.model('product',products)