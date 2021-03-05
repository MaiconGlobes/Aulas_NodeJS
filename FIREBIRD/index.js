const express = require('express');
const app = express();

var Firebird = require('node-firebird');

/*DECLARACAO VARIAVEIS/CONST*/
const home = require('./routes/home')

/*CONFIG. GRUPO ROTAS*/
app.use('/', home);

/**/
var options = {};

options.host = 'localhost';
options.port = 3050;
options.database = 'C:/NodeJS/Aulas/Firebird/DB/DADOS.FDB';
options.user = 'SYSDBA';
options.password = 'masterkey';
options.lowercase_keys = false; // set to true to lowercase keys
options.role = null;            // default
options.pageSize = 4096;        // default when creating database

Firebird.attach(options, (err, db) => {
   if (err)
      throw err;

   // db = DATABASE
   db.transaction(Firebird.ISOLATION_READ_COMMITED, (err, transaction) => {
      transaction.query('INSERT INTO CLIENTE (NOME) VALUES(?)', ['Maicon'], (err, result) => {
         db.query('SELECT * FROM CLIENTE WHERE NOME =?', ['Maicon'], (err, result) => {
            db.detach();
         });

         if (err) {
            transaction.rollback();
            return;
         }

         transaction.commit((err)=> {
            if (err)
               transaction.rollback();
            else
               db.detach();
         });

      });
   });
});

app.listen(3000);