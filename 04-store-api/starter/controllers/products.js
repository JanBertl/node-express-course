const express = require("express")
const Product = require("../models/product")

const getAllProducts = async (req,res,next) => {
    const { price, company } = req.query
    requestObject = {}
    if(price != null) {
        requestObject.price = price;
    }
    if(company){
        requestObject.company = company
    }
    console.log(requestObject)
    const products = await Product.find(requestObject);
    res.status(201).json({products, nbhits : products.length})
}

const createSingleProduct = async (req,res,next) => {
    const newProduct = await Product.create(req.body)
    res.status(200).json(newProduct)
}

module.exports = {getAllProducts, createSingleProduct}

//Aufgehört bei 4:18:34

//req.body
//req.query

//res.send
//res.json

//next(args) -> pass arg to next middleware