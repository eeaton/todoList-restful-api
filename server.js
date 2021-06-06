let express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'),
  bodyParser = require('body-parser');

//mongoose instance connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/Tododb',{
  useNewUrlParser:true,
  useUnifiedTopology:true
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
