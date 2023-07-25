var express = require('express');
var router = express.Router();

const User = require('../models/Users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bem Vindo' });
});

router.post('/acesso', async(req,res)=>{

  let login = req.body.login
  let senha = req.body.senha

  .then(() =>{
    console.log("Banco de Dados MongoDB conectado com sucesso");
 })
 .catch(err => console.log(err))

  const users = await user.find()
  users.forEach((a)=> {
   if(a.name == login && a.senha == senha){
     res.render('paginainicial', {users});
   }

})
res.send(`Usuário não encontrado`)
});


module.exports = router;
