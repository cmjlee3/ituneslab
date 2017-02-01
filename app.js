const express = require('express');
const logger = require('morgan');

const { searchMusic } = require('./services/itunes');
// const { favorites } = require('./models/favories');
// const dbService = require('./models/favorites');
const bodyParser = require('body-parser');

const methodOverride = require('method-override');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('_method'));

app.use(express.static('./public'));

app.set('view engine', 'ejs');
app.set('views', 'views');

// const home = require('./services/itunes');

// app.use('/', home);


app.get('/', searchMusic , (req, res) => {
  // res.json(res.music)
  res.render('index', {
    // favorites: res.favorites || [],
    music: res.music,
      });
});


app.listen(PORT, () => console.log('Server is up and running on PORT', PORT));






