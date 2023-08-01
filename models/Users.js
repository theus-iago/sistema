const mongoose = require('mongoose')

const User = mongoose.model('users', {
    name: String,
    age: Number,
    UF: String,
    acoes: String,
    senha: String
})

module.exports = User