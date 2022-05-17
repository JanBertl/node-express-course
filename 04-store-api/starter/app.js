require('express-async-errors')
require('dotenv').config()
const express = require("express")
const app = express();
const products = require('./routes/products')
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler');
const connectDB = require("./db/connect");
const port = process.env.PORT || 4000;


app.use(express.json())
app.use('/api/v1/products', products)
app.use('/', (req,res,next)=>{
    res.send('<h1>Store-API</h1> <a href="api/v1/products">Back to Homepage</a>')
})


app.use(notFound)
app.use(errorHandler)

//problem: eigtl async wegen connection zum server
const start = () => {
    try {
        app.listen(port, ()=>{
        console.log(`Server is ready on port: ${port}`)
        })
        connectDB(process.env.MONGO_URI)
    } 
    catch (err) {
        console.log(err)
    }
}

start();


//Aufgehört bei 4:18:34

//req.body
//req.query

//res.send
//res.json

//next(args) -> pass arg to next middleware