const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    maxlength: [64, "Name can't be greater than 64 characters"],
    minlength: [4, "Name can't be less than 4 characters"],
    email: {
      type: String,
      required: [true, 'Email is required'],
      index: true
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [4, "Password can't be less than 4 characters"]
    },
    isActive: {
      type: Boolean,
      default: true
    },
    isDeleted: {
      type: Boolean,
      default: false
    }
    
}, {
    timestamps: true
})

const User = mongoose.model('users', userSchema)

module.exports = User