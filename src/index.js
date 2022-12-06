const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const app = express();
const port = 3000;
// var morgan = require('morgan');

//Http logger
// app.use(morgan('combined'));
// app.use(express.static(path.join(__dirname, 'public')));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(methodOverride('_method'));

//Template engine
app.engine('hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//route init
const route = require('./routes/index');
route(app);

//connect to db
const db = require('./config/db');
db.connect();

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})