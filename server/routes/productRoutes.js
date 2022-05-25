const express = require('express')
const expressAsyncHandler = require('express-async-handler')
const Product = require('../models/productModel.js')
const data = require('../data.js')

const productRouter = express.Router()

// Get all products
productRouter.get('/', expressAsyncHandler(async (req, res) => {
  const products = await Product.find()

  if (products.length === 0) {
    return res.send({ message: 'No products in the database!' })
  }
  res.status(200).json(products)
}))

// Seeder
productRouter.get('/seed', expressAsyncHandler(async (req, res) => {
  // await Product.deleteMany()
  const createdProducts = await Product.insertMany(data.products)
  res.json({ createdProducts })
}))

// Get product by ID
productRouter.get('/:id', expressAsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (!product) {
    return res.status(404).send({ message: "No product found with the specified id" })
  }

  res.json(product)
}))

module.exports = productRouter
