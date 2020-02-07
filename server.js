//matrix

matrix = [
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 0, 2],
    [0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
    [1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 2, 0, 1, 0, 0],
    [1, 0, 0, 1, 1, 0, 5, 0, 0, 0, 1, 1, 1, 0, 0, 0, 4, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 0, 0],
    [1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 1, 1, 0, 5, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 4, 0, 1, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 3, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
    [1, 0, 1, 1, 0, 2, 3, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [1, 1, 1, 0, 4, 0, 3, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 3, 0, 0, 1, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    [1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 2, 1, 0, 1, 0, 0, 1, 0, 0],
    [1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 3, 0, 0, 1, 0, 0],
    [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 2, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 2, 1, 0, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 0, 0, 3, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 0, 0, 3, 0, 0, 1, 0, 1, 2, 0, 0, 2, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0],
    [1, 0, 1, 1, 0, 0, 1, 0, 1, 2, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 3, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
    [1, 1, 1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 3, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 3, 0, 0, 1, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [1, 1, 0, 1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 2, 0, 0, 1, 0, 0, 1, 0, 0],
    [1, 0, 0, 1, 1, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 3, 0, 0, 1, 0, 0],
    [1, 1, 1, 0, 1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 1, 1, 1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
    [1, 0, 1, 1, 0, 0, 3, 1, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0],
    [1, 1, 1, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [1, 1, 0, 1, 2, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0]

];


utel = 0;

// Statistics
var stat = {
  xotaker: utel
};

// Port
var port = process.env.PORT || 3000;

var Grass = require("./classes/Grass");
var Xotaker = require("./classes/Xotaker");
var Gishatich = require("./classes/Gishatich");
var GishatichEater = require("./classes/GishatichEater");
var Vorsord = require("./classes/Vorsord");

grassArr = [];
xotakerArr = [];
GishatichArr = [];
GishatichEaterArr = [];
VorsordArr = [];

//server
var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);
var fs = require("fs");

app.use(express.static("."));

app.get("/", (req, res) => {
  res.redirect("index.html");
});

fs.appendFileSync("statistics.json", JSON.stringify(stat));

// Matrix gen


for (var y = 0; y < matrix.length; ++y) {
  for (var x = 0; x < matrix[y].length; ++x) {
    if (matrix[y][x] == 1) {
      var gr = new Grass(x, y);
      grassArr.push(gr);
    } else if (matrix[y][x] == 2) {
      var xotaker = new Xotaker(x, y);
      xotakerArr.push(xotaker);
    } else if (matrix[y][x] == 3) {
      var gishatich = new Gishatich(x, y);
      GishatichArr.push(gishatich);
    } else if (matrix[y][x] == 4) {
      var gishaticheat = new GishatichEater(x, y);
      GishatichEaterArr.push(gishaticheat);
    } else if (matrix[y][x] == 5) {
      var vorsord = new Vorsord(x, y);
      VorsordArr.push(vorsord);
    }
  }
}
// Events
io.on("connection", function(socket) {
  socket.on("btn_1", function() {
    var x = Math.floor(Math.random() * 36);
    var y = Math.floor(Math.random() * 36);
    var directions = [
      [x, y],
      [x - 1, y - 1],
      [x, y - 1],
      [x + 1, y - 1],
      [x - 1, y],
      [x + 1, y],
      [x - 1, y + 1],
      [x, y + 1],
      [x + 1, y + 1]
    ];
    for (var i in directions) {
      var x = directions[i][1];
      var y = directions[i][0];
      if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
        if ((matrix[y][x] = 1)) {
          for (let j in grassArr) {
            if (x == grassArr[j].x && y == grassArr[j].y) {
              grassArr.splice(j, 1);
            }
          }
        } else if ((matrix[y][x] = 2)) {
          for (let j in xotakerArr) {
            if (x == xotakerArr[j].x && y == xotakerArr[j].y) {
              xotakerArr.splice(j, 1);
            }
          }
        } else if ((matrix[y][x] = 3)) {
          for (let j in GishatichArr) {
            if (x == GishatichArr[j].x && y == GishatichArr[j].y) {
              GishatichArr.splice(j, 1);
            }
          }
        } else if ((matrix[y][x] = 4)) {
          for (let j in GishatichEaterArr) {
            if (x == GishatichEaterArr[j].x && y == GishatichEaterArr[j].y) {
              GishatichEaterArr.splice(j, 1);
            }
          }
        } else if ((matrix[y][x] = 5)) {
          for (let j in VorsordArr) {
            if (x == VorsordArr[j].x && y == VorsordArr[j].y) {
              VorsordArr.splice(j, 1);
            }
          }
        } else {
          matrix[y][x] = 0;
        }
        matrix[y][x] = 0;
      }
    }
  });
  socket.on("btn_2", function(data) {});
  socket.on("weather", function(data) {
    console.log("weather");
  });
});

function game() {
  for (var i in grassArr) {
    grassArr[i].bazmanal();
  }

  for (var i in xotakerArr) {
    xotakerArr[i].utel();
    utel++;
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

  io.sockets.emit("matrix", matrix);
}

setInterval(game, 500);

server.listen(port, () => {
  console.log(`Server started on ${port}`);
});
