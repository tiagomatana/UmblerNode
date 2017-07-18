const mongoose = require('mongoose')
//module.exports = mongoose.connect('mongodb://localhost/db_finance')
module.exports = mongoose.connect('mongodb://mongodb-stitch-matana-geewr:secreta8@cluster0-shard-00-00-w7ke8.mongodb.net:27017,cluster0-shard-00-01-w7ke8.mongodb.net:27017,cluster0-shard-00-02-w7ke8.mongodb.net:27017/db_finance?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin')
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'."
