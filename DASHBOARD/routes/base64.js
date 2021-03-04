const express  = require('express');
const router   = express();
const LogDados = require('../models/cadastro');
const fs       = require('fs');


var fileName = __dirname + '/1.jpg';
var binaryData = fs.readFileSync(fileName);

var base64String = new Buffer(binaryData).toString('base64');


/*ADICIONAR DADOS NO BANCO*/
router.post('/base64', (req, res) => {
   LogDados.create({
      IMAGEM   : base64String
   }).then(() => {
      req.flash('msgSuccess', 'Seu cadastro foi registrado com sucesso.')
      res.redirect('/')
   }).catch((error) => {
      req.flash('msgError', 'Infelizmente obtivemos um erro no seu cadastro.')
      res.redirect('/')
   })
});

module.exports = router;