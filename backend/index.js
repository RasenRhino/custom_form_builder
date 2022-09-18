const express = require("express");
const app = express();
const cors=require('cors');
const mongoose = require('mongoose');
const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");
Sentry.init({
  dsn: "https://f953fa98dfca444189ab4313ec56444b@o1408241.ingest.sentry.io/6743667",

  tracesSampleRate: 1.0,
});

const corsoptions={
  "origin": "*"
}
app.use(cors(corsoptions));
const transaction = Sentry.startTransaction({
  op: "backend",
  name: "startup",
});
const dbspan=transaction.startChild({
  op: "db",
  description: "db connection",
});
mongoose
  .connect(
    'mongodb+srv://rhino:ridham@cluster0.rv0s8cq.mongodb.net/atlan?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('mongodb server connected');
  })
  .catch((err) => {
    console.log(err);
    Sentry.captureException(err);

  }).finally(()=>{
    dbspan.finish();
  });


const port = 4444;
const routes= require("./src/routes/routes");
app.use(express.json());
app.use("",routes);
app.listen(port, err => {
  transaction.finish();
    if (err) {
      return console.log("ERROR", err);
    }
    console.log(`Listening on port ${port}`);
  });