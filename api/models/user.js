const mongoose = require('mongoose')
const Assignment = require('./assignment')

const schema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean,
    default: false,
    required: true
  },
  grade: Number,
  assignments: [Assignment]
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

module.exports = mongoose.model('User', schema)
