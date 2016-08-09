require('dotenv').config();

const express     = require('express');
const ENV         = process.env.ENV || 'development';
const PORT        = process.env.PORT || 8080;
const app         = express();
const server      = require('http').Server(app);
const io          = require('socket.io')(server);
const util        = require('util');
const bodyParser  = require('body-parser');
const sass        = require('node-sass-middleware');

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

function inspect(o, d) {
  console.log(util.inspect(o, { colors: true, depth: d || 1}));
}

server.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");

  // Mount all resource routes
app.use("/api/users", usersRoutes(knex));
app.use(express.static('public'));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));



// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

// app.get("/ping", (req, res) => {
//   io.emit("news", "Cool beans");
//   res.end('OK');
// });

// app.get("/list", (req, res) => {
//   res.end(JSON.stringify(Object.keys(io.sockets.sockets)));
// });



// io.on('connection', (client) => {

//   console.log(`Client ${client.id} has connected`);
//   client.emit('news', "Hello")
//   // client.on('media-capabilities', (data) => {

//   // })

//   // client.on('video-start', (cb) => ...)
// });