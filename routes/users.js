var express = require('express');
var router = express.Router();
const User = require('../models/Users');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/novouser',function(req,res){
  res.render("novoCadastro",{})
});
router.post('/newuser',async (req,res)=>{
 const {name,age,UF,acoes,senha} = req.body
 const user = {
  name,age, UF,acoes,senha
 }
 try {
  await User.create(user)
  res.status(201).json({message:'Usuario criado com sucesso!'})
 } catch (error) {
  res.status(500).json({error:error})
 }
})
module.exports = router;
