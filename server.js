//matrix
var matrix = require('./matrix')

//Port
var port = process.env.PORT || 3000;

var Grass = require('./classes/Grass')
var Xotaker = require('./classes/Xotaker')
var Gishatich = require('./classes/Gishatich');
var GishatichEater = require('./classes/GishatichEater')
var Vorsord = require('./classes/Vorsord')

var grassArr = [];
var xotakerArr = [];
var GishatichArr = [];
var GishatichEaterArr = []
var VorsordArr = [];
// var AmenakerArr = [];
// var NorkerparArr = [];

//server
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));

app.get('/', (req,res) => {
    res.redirect('index.html');
});



server.listen(port, () =>{
    console.log(`Server started on ${port}`);
    
});