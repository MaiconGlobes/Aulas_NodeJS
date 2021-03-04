const express  = require('express');
const router   = express();
const LogDados = require('../models/cadastro');
var fs         = require('fs');


/*ADICIONAR DADOS NO BANCO*/
router.post('/post', (req, res) => {
   
   var binaryData    = fs.readFileSync(__filename);
   var base64String  = new Buffer(binaryData).toString('base64');

   console.log('teste')
   LogDados.create({
      NOME        : req.body.nome,
      SOBRENOME   : req.body.sobrenome,
      EMAIL       : req.body.email,
      //NASCIMENTO  : req.body.nascimento,
      NASCIMENTO  : '2021-01-01',
      DEVIDO      : 10,
      IMAGEM      : req.body.img64 
   }).then(() => {
      req.flash('msgSuccess', 'Seu cadastro foi registrado com sucesso.')
      res.redirect('/')
   }).catch((error) => {
      req.flash('msgError', 'Infelizmente obtivemos um erro no seu cadastro.')
      console.log(error)
      res.redirect('/')
      
   })
});

module.exports = router;