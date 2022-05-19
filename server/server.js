import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', (req, res) => {
  res.json(data.products);
})

app.get('/', (req, res) => {
  res.send('Hello!')
})

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`server running on port ${port}`)
})
