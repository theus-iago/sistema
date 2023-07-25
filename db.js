const mongoose = require('mongoose')

const DB_USER =  'jorgechrystiann'
const DB_PASSWORD= encodeURIComponent('jc1234')
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.qvtofbq.mongodb.net/?retryWrites=true&w=majority`)
 .then(() =>{
    console.log("Banco de Dados MongoDB conectado com sucesso");
 })
 .catch(err => console.log(err))