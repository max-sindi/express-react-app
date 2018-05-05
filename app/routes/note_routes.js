const fs = require('fs');

module.exports = function(app, db) {
  app.all('/translate', (req, res) => {
    // const html = fs.readFileSync('./static/index.html');
    // // // console.log(db);
    // res.set('Content-Type', 'text/html');
    // res.send(html);
    console.log('aqaaa');
    res.json({"done": "yes"});
  });
};
