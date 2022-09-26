const accountSid = "";
const authToken = "";
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
