const { mysqlQuery } = require("./mysql");

function getReceita( params ){
    console.log(params);
    let where = "";
    if( params.receitaId){
        where = " WHERE uid = '" + params.receitaId + "'"
        return mysqlQuery( "Select * from receita " + where)
    }
    return null;
}

function listReceitas( params ){
    let where = "";
    if( params.titulo){
        where = " WHERE titulo like '" + params.titulo.replace(/[&\/\\#,+()$~.'":*?<>{}]/g, '') + "'"
    }
    return mysqlQuery( "Select * from receita " + where)
}

module.exports = {
    getReceita,
    listReceitas
}