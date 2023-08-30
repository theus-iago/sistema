const mongoose = require('mongoose')

const User = mongoose.model('users', {
    fullname: String,
    name: String,
    age: Number,
    UF: String,
    acoes: String,
    senha: String
})

module.exports = User