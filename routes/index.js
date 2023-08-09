var express = require('express');
var router = express.Router();

const User = require('../models/Users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bem Vindo', erroLogin:false });
});

router.post('/acesso', async(req,res)=>{

  let login = req.body.login
  let senha = req.body.senha

  const users = await User.find()
  console.log(login,senha)
  users.forEach((a)=> {
    console.log(a.name,a.senha)
   if(a.name == login && a.senha == senha){
     res.render('paginainicial', { a });
   }

})
res.render('index', {title: 'Bem vindo', erroLogin:true});
});


module.exports = router;
