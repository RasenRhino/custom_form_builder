const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slangschema= new Schema({
    city: String,
    slangs: {type : Array , "default" : []},
});
// const formschema = new Schema({ any: {} });

module.exports = slangschema;
