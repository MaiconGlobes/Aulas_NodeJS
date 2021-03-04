
/* CONFIG BANCO DADOS MYSQL*/
const Sequelize   = require('sequelize');
const sequelize   = new Sequelize('dados', 'root', '18857',{
   host     : "localhost",
   dialect  : "mysql"
})

sequelize.authenticate().then(
   console.log('Conectado com banco')
).catch((erro)=>{
   console.log('Erro na conexão! "' + erro + '"')
});

module.exports = {
   Sequelize : Sequelize,
   sequelize : sequelize
}