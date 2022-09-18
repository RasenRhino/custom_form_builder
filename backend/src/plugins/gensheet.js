
const { google } = require("googleapis");
const auth = new google.auth.GoogleAuth({
    keyFile: "/mnt/r/atlan/final/backend/src/key/creds.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

const gensh=async()=>{
    const gg=await auth.getClient()
    return gg;
}
let client=null;
let googleSheets = null;
const spreadsheetId="1_OHtipQbRBHZwklXOhvsKGw4e5_x27_EYF10cgLfzt0"
function gengen(a){
    gensh().then((res)=>{
        client=res;
        googleSheets = google.sheets({ version: "v4", auth: client });
        
    }).then(()=>{
        clearsheet().then(()=>{
            addtosheet(a).then(
                ()=>{console.log("done")});
    })
    });
}
const addtosheet=async(a)=>{await googleSheets.spreadsheets.values.append({
    
    auth,
    spreadsheetId,
    range: "Sheet1",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: a,
    },
  });
}
const clearsheet=async()=>{
    await googleSheets.spreadsheets.values.clear({
        auth,
        spreadsheetId,
        range: "Sheet1!A1:Z",
      }).catch((err)=>{
        console.log(err);
      });
}
module.exports=gengen;



