import express from 'express';
import data from './data.js';

const app = express();

app.get("/api/products/:id", (req, res) => {
  const product = data.products.find(item => item._id === req.params.id)

  if (!product) {
    res.status(404).send({ message: "Product not found!" })
  } else {
    res.json(product)
  }
})

app.get('/api/products', (req, res) => {
  res.json(data.products);
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server running on port ${port}`)
})
