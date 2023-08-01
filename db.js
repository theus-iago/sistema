const mongoose = require('mongoose')

const DB_USER =  'Ana'
const DB_PASSWORD= encodeURIComponent('123')
mongoose.connect('mongodb://127.0.0.1:27017/EEQSBD')
 .then(() =>{
    console.log("Banco de Dados MongoDB conectado com sucesso");
 })
 .catch(err => console.log(err))