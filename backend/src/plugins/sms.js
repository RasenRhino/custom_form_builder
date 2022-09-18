const accountSid = "ACa251721b857d5761d7b47e522e1d639c";
const authToken = "837ae98ce79389348802dd943b186a85";
const client = require('twilio')(accountSid, authToken);

function sendsms(a){
client.messages
  .create({
     body: a["sms"],
     from: '+16184378408',
     to: '+919990927931'
   })
  .then(message => console.log(message.sid));
}

module.exports = sendsms