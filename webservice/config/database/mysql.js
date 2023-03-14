"use strict";

var mysql=require ("mysql");


const connection = mysql.createConnection({
host:'localhost', // O host do banco. 
user:'Edu4', //usuário do banco.
password: 'le231299',// A senha do usuário
database:'eas', // A base de dados a qual a aplicação irá se conectar
port: 3306,
timezone: 'America/Recife'

});


module.exports = connection;