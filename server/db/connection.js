const mongoose = require('mongoose')

const connection = async (req, res) => {
  try {
    await mongoose.connect('').then(() => {
      console.log('Mongo connected')
    })
  } catch (error) {
    res.status(400).json({ message: 'Not connected' })
  }
}

connection()
