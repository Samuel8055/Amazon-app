const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userRouter = require('./routes/userRoutes')
const productRouter = require('./routes/productRoutes')

dotenv.config();
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Database connection successful.'))
  .catch((err) => console.log(`Database connection error! ${err}`))

// Routes middleware
app.use('/api/users', userRouter)
app.use('/api/products', productRouter)

// All errors in the routes will be handled and thrown by this middleware when expressAsyncHandler is used.
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message })
})

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`)
})
