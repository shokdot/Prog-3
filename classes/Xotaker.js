var Living = require('./Living')
module.exports = class Xotaker extends Living {
    constructor(x, y) {
        super(x, y)
        this.energy = 5;
        this.directions = [];
        this.index = 2;
        this.multiply = 0; //with multiply
    }

    bazmanal() {
        this.multiply++
        this.stanalNorKordinatner();
        var datark = this.yntrelVandak(0)
        var dat = Math.floor(Math.random() * datark.length)
        var norVandak = datark[dat]
        
        if (this.energy == 10 && norVandak && this.multiply >= 5) {
            var norXotaker = new Xotaker(norVandak[0], norVandak[1]); // chischt dzev senc
            xotakerArr.push(norXotaker)
            matrix[norVandak[1]][norVandak[0]] = 2; // matrixi mej grelu dzev senc
            this.energy = 5;
            this.multiply = 0;
        }
    }

    utel() {
        this.stanalNorKordinatner();
        var xot = this.yntrelVandak(1);
        var dat = Math.floor(Math.random() * xot.length)
        var miHatXot = xot[dat]
        if (miHatXot) {
            matrix[this.y][this.x] = 0;
            this.x = miHatXot[0];
            this.y = miHatXot[1]
            matrix[miHatXot[1]][miHatXot[0]] = 2;
            this.energy++;

            this.bazmanal();
            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                }
            }
        } else {
            this.sharjvel();
        }
    }

    mahanal() {
        if (this.energy == 0) {
            for (var i in xotakerArr) {
                if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1);
                    matrix[this.y][this.x] = 0;

                }

            }
        }
    }
    
    sharjvel() {
        this.stanalNorKordinatner();
        var datark = this.yntrelVandak(0);
        var dat = Math.floor(Math.random() * datark.length);
        var norVandak = datark[dat]
        if (norVandak) {

            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1]
            matrix[this.y][this.x] = 2;
            this.energy--;
            this.mahanal()
        }


    }
}