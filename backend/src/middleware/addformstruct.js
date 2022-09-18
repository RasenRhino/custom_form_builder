const mongoose = require('mongoose');
const formschema=require('../utils/formschema');

const respschema = require('../utils/responseschema');

const form=mongoose.model('formbuild', formschema,"formstruct" );
const formresp=mongoose.model('formresp',respschema,"formval");
const slangschema=require('../utils/slangschema');
const slangval=mongoose.model('slangs',slangschema,"slangs");
const plugloader=require('./loadplugins');
const testFolder = '../plugins/';
const fs = require('fs');
let rawdata = fs.readFileSync(require.resolve(testFolder+'pluginp.json'));
let inpstat = JSON.parse(rawdata);
const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");
const addForm = async (req, res) => {
    const transaction=Sentry.startTransaction({
      op:"form struct add",
      description:"add form struct to db",
    });
    let a=req.body;
    let newForm = new form(a);
    const formspan=transaction.startChild({
      op:"add form",
      description:"adding form to db"
    });
    await newForm.save((err, newForm) => {
      if (err) {
        Sentry.captureException(err);
        res.send(err);
      } else {
        res.json(newForm);
      }
    });
    formspan.finish();
    transaction.finish();
  };
const formlist = async (req, res) => {
    try{
    const forms = await form.find({});
    res.json(forms);
    }
    catch(err){
        res.send(err.message);
        console.log(err.message);
    }
  };
const formstruct = async (req, res) => {
    try{
        const forms = await form.where("title").equals(req.params.id);
        res.json(forms);
    }
    catch(err){
        res.send(err.message);
        console.log(err.message);
    }
}
const formplugs= async (id) => {
  const gg = await form.findById(id);
  return gg.plugin;
  // function (err, docs) {
  //   if (err){
  //       console.log(err);
  //   }
  //   else{
  //       return docs.plugin;
  
  //   }
  
}
const runplugs=async (pluglist,inp,src,parent)=>{
  const span=parent.startChild({
    op:"plug loader runplugs",
    name:src+" runplug",
  })
  const span2=span.startChild({
    op:"loading plugins from json",
    name:"time for plug load"
  })
  let moddict= await plugloader.plugloader();
  span2.finish()
  Object.keys(pluglist).forEach(function(k){
    let res = null;
    if(pluglist[k]==true && src==k){
    if(inpstat[k]==true){
      res = moddict[k](inp);
    }
    else{
      res = moddict[k]();
    }
  }
  });
  span.finish();
}
const addFormData=async (req,res)=>{
  const transaction=Sentry.startTransaction({
    op:"adding form data",
    description:"adding form data to db"
  })
  let a=req.body;
  let formrespdb= new formresp(a);
  let formid=a.formid;
  const span=transaction.startChild({
    op:"plug load",
    name: "return plugs in function call"
  })
  let plugs =await formplugs(formid).catch((e)=> {throw new Error("cant get plugin data")});
  span.finish();
  const inp={
    "sms" : "success"
  }
  const span2=transaction.startChild({
    op:"form entry",
    name:"enter data in form"
  });
  formrespdb.save((err, formrespdb) => {
    span2.finish();
    if (err) {
      Sentry.captureException(err);
      res.send(err);
      inp["sms"]="failure";
    } else {
      res.json("success");
      inp["sms"]="success"
    }
    runplugs(plugs,inp,"sms",transaction);
    transaction.finish();
  });
    
}
const generatesheet=async(req,res)=>{
  const transaction=Sentry.startTransaction({
    op:"generate sheet",
    description:"generate sheet endpoint"
  })
  let a=req.body;

  try{
    const forms = await form.where("title").equals(a["title"]);
    res.send(forms);
    console.log(forms);
    let temp=[];
    temp.push([]);
    forms[0]["feilds"].forEach(element => {
      temp[0].push(element["name"]);
    });
    let formid=forms[0]["_id"];
    let plugs =await formplugs(formid).catch((e)=> {throw new Error("cant get plugin data")});
    const formrespdb = await formresp.where("formid").equals(formid);
    formrespdb.forEach(element => {
      let temp1=[];
      element["data"].forEach(element1 => {
        temp1.push(element1["value"]);
      });
      temp.push(temp1);
  });
  console.log(temp);
  runplugs(plugs,temp,"gensheet",transaction);
  transaction.finish();
}
  catch(err){
    // res.send(err.message);
    console.log(err.message);
  }
}
const slanglist=async(req,res)=>{
  try{
    const slangs =await slangval.find({});
    res.json(slangs);
    
  }
  catch(err){
    res.send(err.message);
    console.log(err.message);
  }
}
 

module.exports={
  addForm,
  formlist,
  formstruct,
  addFormData,
  generatesheet,
  slanglist
}