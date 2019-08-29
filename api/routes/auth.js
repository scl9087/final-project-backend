const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/user')
const { decodeToken, generateToken } = require('../lib/token')

router.get('/profile', async (req, res, next) => {
  try {
    const payload = decodeToken(req.token)
    const user = await User.findOne({ _id: payload.id }).select('-__v -password')

    const status = 200
    res.json({ status, user })
  } catch (e) {
    console.error(e)
    const error = new Error('You are not authorized to access this route.')
    error.status = 401
    next(error)
  }
})

router.post('/login', async (req, res, next) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user) {
    const valid = await bcrypt.compare(password, user.password)
    if (valid) {
      const status = 200
      const response = 'You have successful logged in.'
      const token = generateToken(user._id)
      return res.status(status).json({ status, response, token })
    }
  }
  
  const message = `User email or password incorrect. Please check credentials and try again.`
  const error = Error(message)
  error.status = 401
  next(error)
})

// router.post('/login', async (req, res, next) => {
//   const status = 201
//   try {
//     const { email, password } = req.body
//     const user = await User.findOne({ email })
//     if (user) {
//       const valid = await bcrypt.compare(password, user.password)
//       if (valid) {
//         const status = 200
//         const response = 'You have successful logged in.'
//         const token = generateToken(user._id)
//         return res.status(status).json({ status, response, token })
//       }
//     }
//   } catch (e) {
//     console.error(e)
//     const message = `User email or password incorrect. Please check credentials and try again.`
//     const error = Error(message)
//     error.status = 401
//     next(error)
//   }
// })

router.post('/signup', async (req, res, next) => {
  const { email, password, first_name, last_name } = req.body
  const rounds = 10
  const hashed = await bcrypt.hash(password, rounds)

  const alreadyExists = await User.findOne({ email })
  if (alreadyExists) {
    const error = new Error(`There is already an account for this '${email}'.`)
    error.status = 400

    return next(error)
  }

  const status = 201
  try {
    const user = await User.create({ email, password: hashed, first_name, last_name })
    const token = generateToken(user._id)
    res.status(status).json({ status, token })
  } catch (e) {
    console.error(e)
    const error = new Error('Please enter required information.')
    error.status = 400
    next(error)
  }
  
})

module.exports = router
