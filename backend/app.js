const express  = require('express')
const productRoute = require('./Routes/productRoute')
const orderRoute =  require('./Routes/orderRoutes')
const dot  = require('dotenv')

const mongoose = require('mongoose')
const cors   = require('cors')
dot.config()
const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.DB,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log('mongoDB connected Successfully');
}).catch((error)=>{
    console.log('something error in Connection',error);
})

app.use('/items',productRoute)
app.use('/allItems',orderRoute)
const port  = process.env.PORT ||5000
app.listen(port,()=>{
    console.log('server connection at ',port);
})
