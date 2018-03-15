var http = require('http');
var router = require('routers')();
var view = require('swig');
var url = require('url');
var server = http.createServer(function (req, res) {
    res.end("Hi, selamat datang di nodejs");
});

server.listen(8000);

console.log("server running on http://localhost:8000");