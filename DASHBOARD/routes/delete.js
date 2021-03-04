const express  = require('express');
const router   = express.Router();
const LogDados = require('../models/cadastro');

router.post('/delete', (req, res) => {
   LogDados.destroy({
      where : {
         id : req.body.id
      }      
   }).then(() => {
      req.flash('successMessage', 'You are successfully using req-flash');
      res.redirect('/list')
   }).catch((err) => {
      res.render('alertErro')
   });
})

module.exports = router;

