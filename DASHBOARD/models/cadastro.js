const db = require('./db');

const LogDados = db.sequelize.define('usuarios', {
   NOME     : {
      type: db.Sequelize.STRING(15)
   },
   SOBRENOME: {
      type: db.Sequelize.STRING(25)
   },
   EMAIL    : {
      type: db.Sequelize.STRING(120)
   },
   NASCIMENTO    : {
      type: db.Sequelize.DATEONLY
   },
   DEVIDO   : {
      type: db.Sequelize.DECIMAL(10,2) 
   },
   IMAGEM   : {
      type: db.Sequelize.TEXT('long') 
   }
});

/*COMENTAR APÓS CRIAR TABELA NO BANCO */
LogDados.sync({Force : true})


module.exports = LogDados