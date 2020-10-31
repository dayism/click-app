const express = require("express");
const path = require("path");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const methodOverride= require('method-override');

// Initializations
const app = express();


// settings
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));
app.engine('.hbs',exphbs({defaultLayout: false,  extname: '.hbs'}));


app.set('view engine', 'hbs');

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use( methodOverride('method'));


// routes

app.use(require('./routes/paginasWeb.routes'));
//app.use(require('./routes/index.routes'));


module.exports = app;
