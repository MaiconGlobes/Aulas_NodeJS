const express     = require('express');
const router      = express.Router();
const tabUsuarios = require('../models/cadastro');

/* ROTA PARA PAGINA SITE*/
router.get('/list', (req, res) => {
   tabUsuarios.findAll().then(
      (posts)=> {
         res.render('lista', {
            posts : posts
         })
         console.log(posts)
      }).catch(() => {
         res.render('alertPageNoFound')
      })
});

/* ROTA C/ RETORNO EM JSON*/
router.get('/list/json', (req, res) => {
   tabUsuarios.findAll().then(
      (posts)=> {
         res.json({
            status   : '200',
            usuarios : posts
         })
      }).catch((error) => {
         res.send({
            status : 'Error',
            msg    : error
         })
      })
});

module.exports = router;

