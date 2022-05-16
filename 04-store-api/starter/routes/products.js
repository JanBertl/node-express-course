const express = require("express");
const Router = express.Router()
const {getAllProducts, createSingleProduct }  = require('../controllers/products')

Router.route('/').get(getAllProducts).post(createSingleProduct)

module.exports = Router
