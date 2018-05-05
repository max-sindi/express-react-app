// server.js
const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./config/db');
const app            = express();
const http = require('http');
// const { URL } = require('url');


const port = 1234;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err);

  require('./app/routes/')(app, database);

  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
})

// http.get('http://wooordhunt.ru/get_tips.php?abc=q', (res) => {
//   // console.log(res);
//   res.on('data', (data) => {
//     console.log(data.toString());
//   })
// })
