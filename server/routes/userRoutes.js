const express = require('express')
const expressAsyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const data = require('../data.js')
const generateToken = require('../utils/tokenGenerate')
const User = require('../models/userModel')

const userRouter = express.Router()

// Seeder
userRouter.get('/seed', expressAsyncHandler(async (req, res) => {
  await User.deleteMany({})
  const createdUsers = await User.insertMany(data.users)

  res.json(createdUsers)
}))

// Login route
userRouter.post('/signin', expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })
  if (!user) {
    return res.status(404).send({ message: "User with the email id does not exist!" })
  }

  const passwordMatch = bcrypt.compareSync(password, user.password)
  if (!passwordMatch) {
    return res.status(404).send({ message: "Password is incorrect!" })
  }

  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    token: generateToken(user)
  })
}))

module.exports = userRouter
