const { mysqlQuery } = require("./mysql");

function getReceita( params ){
    let where = "";
    if( params.receitaId){
        where = " WHERE receitaId = '" + params.receitaId + "'"
        return mysqlQuery( "SELECT * FROM receita " + where)
    }
    return null;
}

function listReceitas( params ){
    let where = "";
    if( params.titulo){
        where = " WHERE titulo like '%" + params.titulo.replace(/[&\/\\#,+()$~.'":*?<>{}]/g, '') + "%'"
    }
    return mysqlQuery( "SELECT * FROM receita " + where)
}

module.exports = {
    getReceita,
    listReceitas
}