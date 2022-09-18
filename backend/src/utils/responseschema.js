const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const respschema = new Schema({
    title: String,
    formid: String,
    data: {type : Array , "default" : [{}]},});
module.exports = respschema;