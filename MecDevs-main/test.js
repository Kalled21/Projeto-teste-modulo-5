const Sequelize = require('sequelize')
const sequelize = new Sequelize('siteshark', 'root', '1555',{
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log("conectado com sucesso2")
}).catch(function(erro){
            console.log("falha ao se conectar"+erro)
        })