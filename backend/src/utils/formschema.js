const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const formschema = new Schema({
    title: String,
    feilds: {type : Array , "default" : [{}]},
    plugin:{sms: Boolean, gensheet: Boolean},
});
// const formschema = new Schema({ any: {} });

module.exports = formschema;
