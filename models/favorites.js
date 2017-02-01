// const { MongoClient } = require('mongodb');
// const { ObjectID } = require('mongodb');

// // const fetch = require('node-fetch');

// // const API_URL = 'https://itunes.apple.com/CRUD'

// function favorites(req,res,next){
//   MongoClient.connect(dbConnection, (err, db) => {
//     if (err) return next(err);
//     db.collection('favorites')
//     .find()
//     .toArray((arrayError, data) => {
//       if(arrayError) return next(arrayError);

//       res.favorites = data;
//       db.close();
//       return next();
//     });
//   });
// }

// module.exports = { favorites };
