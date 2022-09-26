const accountSid = "";
const authToken = "";
const client = require('twilio')(accountSid, authToken);
const fetch = require("node-fetch");

async function webhook(a){
  const res = await fetch(a["url"], {
    headers: {
      'Content-Type' : "application/json",
      'Accept' : 'application/json'
    },
    body: a["formdata"]
  })
  return await res.body();
}

module.exports = webhook
