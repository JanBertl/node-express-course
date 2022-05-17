require('express-async-errors')
require('dotenv').config();
const mongoose = require('mongoose')
const connectDB = require('./db/connect')
const Products = require('./models/product')
const res = require('express/lib/response')

const data = require('./products.json')

const loadData = async ()=>{
    await connectDB(process.env.MONGO_URI)
    await Products.deleteMany();
    await Products.create(data);
    process.exit(0)
}

loadData();

require('dotenv').config()

// absolute Kurzform
    // await mongoose.connect(process.env.MONGO_URI)
    // await mongoose.model('Products').deleteMany()
    // await mongoose.model('Products').create(data)
