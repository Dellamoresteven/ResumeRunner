const express = require('express');
const http = require('http');
var path = require('path');

const port = (process.env.PORT || 8080);
const app = express();
const server = http.createServer(app);
//
// app.use("/", function(req, res) {
//   res.sendFile(path.join(__dirname + '/index.html'));
// })
app.use(express.static(__dirname));

// app.use("/main.js", express.static(__dirname + "/main.js"));
//
// app.use("/Stylesheet.css", express.static(__dirname + "/"));

server.listen(port, () => console.log(`I'm listeni ${port}`))