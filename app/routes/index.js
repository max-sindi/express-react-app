const noteRoutes = require('./note_routes');
const ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
  noteRoutes(app, db);
  // const details = {'_id': new ObjectID('5aed7304f36d2837eae62a87')};

  // db.collection('notes').findOne(details, (err, item) => {
  //   if(err) {
  //     console.log('Обшибка');
  //   } else {
  //     console.log(item.body);
  //   }
  // });
  // Тут, позже, будут и другие обработчики маршрутов 
};