const accountSid = "ACa251721b857d5761d7b47e522e1d639c";
const authToken = "837ae98ce79389348802dd943b186a85";
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