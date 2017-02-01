const { MongoClient } = require('mongodb');
const { ObjectID } = require('mongodb');

const fetch = require('node-fetch');

const API_URL = 'https://itunes.apple.com/search?'

function searchMusic(req,res,next){
  // const filterObj = {};
  // const qs = req.query;
  // if ('artistName' in qs) filterObj.artistName = new RegExp(`\\b${qs.artistName}`, 'i');
  fetch(`${API_URL}term=${req.body.artistName}&entity=album&medium=music`)
  .then(r => r.json())
  .then((apiResponse) => {
    res.music = apiResponse.results;

    next();
  })
  .catch((err) => {
    res.err = err;
    next();
  })
}

module.exports = { searchMusic };
