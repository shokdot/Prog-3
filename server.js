//matrix

matrix = [];
var columns = 36
var rows = 36;
utel = 0


// Statistics
var stat = {
    "xotaker":utel
}


fs.appendFileSync("statistics.json", JSON.stringify(stat));

// Port
var port = process.env.PORT || 3000;

var Grass = require('./classes/Grass')
var Xotaker = require('./classes/Xotaker')
var Gishatich = require('./classes/Gishatich');
var GishatichEater = require('./classes/GishatichEater')
var Vorsord = require('./classes/Vorsord')

console.log(Xotaker)




grassArr = [];
xotakerArr = [];
GishatichArr = [];
GishatichEaterArr = [];
VorsordArr = [];

//server
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs')

app.use(express.static("."));

app.get('/', (req, res) => {
    res.redirect('index.html');
});


// Matrix gen

for (let y = 0; y < rows; y++) {
    matrix[y] = []; // Մատրիցի նոր տողի ստեղծում
    for (let x = 0; x < columns; x++) {
        let a = Math.floor(Math.random() * 161);
        if (a >= 0 && a < 5) {
            matrix[y][x] = 0; // Datark
        }
        if (a >= 5 && a < 60) {
            matrix[y][x] = 1;  // Grass - 1
        }
        else if (a >= 60 && a < 110) {
            matrix[y][x] = 2; // Xotaker - 2
        }
        else if (a >= 110 && a < 130) {
            matrix[y][x] = 3; // Gishatich - 3
        }
        else if (a >= 130 && a < 150) {
            matrix[y][x] = 4;  // GishatichEater - 4
        }
        else if (a >= 150 && a < 160) {
            matrix[y][x] = 5; // Vorsord
        }
    }
}


for (var y = 0; y < matrix.length; ++y) {
    for (var x = 0; x < matrix[y].length; ++x) {
        if (matrix[y][x] == 1) {
            var gr = new Grass(x, y);
            grassArr.push(gr);
        } else if (matrix[y][x] == 2) {
            var xotaker = (new Xotaker(x, y))
            xotakerArr.push(xotaker)
        } else if (matrix[y][x] == 3) {
            var gishatich = (new Gishatich(x, y))
            GishatichArr.push(gishatich);

        } else if (matrix[y][x] == 4) {
            var gishaticheat = (new GishatichEater(x, y))
            GishatichEaterArr.push(gishaticheat);

        } else if (matrix[y][x] == 5) {
            var vorsord = new Vorsord(x, y);
            VorsordArr.push(vorsord);

        }
    }
}
// Events
io.on('connection', function (socket) {
    socket.on("btn_1", function (data) {
        console.log('clicied' + data)
    });
    socket.on('btn_2',function (data){
        console.log('clicked 2' + data)
    })
    socket.on('weather',function (data){
        console.log('weather')
    })
 });
 





function game() {

    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }

    for (var i in xotakerArr) {
        xotakerArr[i].utel();
        utel++
    }
    for (var i in GishatichArr) {
        GishatichArr[i].utel();
    }

    for (var i in GishatichEaterArr) {
        GishatichEaterArr[i].utel();
    }

    for (var i in VorsordArr) {
        VorsordArr[i].utel();
    }

    
    io.sockets.emit('matrix', matrix)

}


setInterval(game, 500)

server.listen(port, () => {
    console.log(`Server started on ${port}`);
});