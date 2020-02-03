var side = 25;


function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

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
            // else if (matrix[y][x] == 5) {
            //     var Norker = new NorKerpar(x, y);
            //     NorkerparArr.push(Norker);
            // }
            else if (matrix[y][x] == 8) {

            }
        }
    }


}


function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 3) {
                fill('red');
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 4) {
                fill('blue');
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 5) {
                fill('black');
                rect(x * side, y * side, side, side);
            }

            // else if (matrix[y][x] == 6) {
            //     fill('orange');
            //     rect(x * side, y * side, side, side);
            // }
        }

    }


    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }

    for (var i in xotakerArr) {
        xotakerArr[i].utel();

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

    // for (var i in AmenakerArr) {
    //     AmenakerArr[i].utel()
    // }

    // for (var i in NorkerparArr) {
    //     NorkerparArr[i].generate()
    // }
}

