const mongoose = require('mongoose')

const citySchema = new mongoose.Schema({
   
   name: String,
   url: String,
   description: String,
   complete: Boolean
})

const Cities = mongoose.model('City', citySchema)

module.exports = Cities