var Living = require('./Living')

module.exports = class Vorsord extends Living {
    constructor(x, y) {
        super(x, y);
        this.directions = [];
        this.index = 5;
        this.energy = 100;
    }

    sharjvel() {
        this.stanalNorKordinatner();
        var datark = this.yntrelVandak(0);
        var dat = Math.floor(Math.random() * datark.length)
        var norVandak = datark[dat]
        if (norVandak) {

            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1]
            matrix[this.y][this.x] = 5;
            this.energy -= 2;
            this.mahanal();

        }


    }

    utel() {
        this.stanalNorKordinatner();
        var xotaker = this.yntrelVandak(4);
        var dat = Math.floor(Math.random() * xotaker.length)
        var miHatXotaker = xotaker[dat];
        if (miHatXotaker) {
            matrix[this.y][this.x] = 0;
            this.x = miHatXotaker[0];
            this.y = miHatXotaker[1];
            matrix[miHatXotaker[1]][miHatXotaker[0]] = 5;
            for (var i in GishatichEaterArr) {
                if (this.x == GishatichEaterArr[i].x && this.y == GishatichEaterArr[i].y) {
                    GishatichEaterArr.splice(i, 1);
                }
            }
        } else {
            this.sharjvel();
        }
    }
    mahanal() {
        if (this.energy == 0) {
            for (var i in VorsordArr) {
                if (this.x == VorsordArr[i].x && this.y == VorsordArr[i].y) {
                    VorsordArr.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                    // var verj = new Grass(this.x,this.y)   //
                    // grassArr.push(verj)  // verj nor grass generator

                }

            }
        }

    }

}