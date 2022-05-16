const express = require("express")
const Product = require("../models/product")

const getAllProducts =async (req,res,next) => {
    const products = await Product.find({})
    res.status(201).json(products)
}

const createSingleProduct =async (req,res,next) => {
    const newProduct = await Product.create(req.body)
    res.status(200).json(newProduct)
}

module.exports = {getAllProducts, createSingleProduct}