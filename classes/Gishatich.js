var Living = require('./Living')

module.exports = class Gishatich extends Living {
    constructor(x, y) {
        super(x, y);
        this.energy = 10;
        this.directions = [];
        this.index = 3;
        this.utelvar;
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
            matrix[this.y][this.x] = 3;
            this.energy--;
            this.mahanal();
        }


    }

    utel() {
        this.stanalNorKordinatner();
        var xotaker = this.yntrelVandak(2);
        var dat = Math.floor(Math.random() * xotaker.length)
        var miHatXotaker = xotaker[dat]
        if (miHatXotaker) {
            matrix[this.y][this.x] = 0;
            this.x = miHatXotaker[0];
            this.y = miHatXotaker[1];
            matrix[miHatXotaker[1]][miHatXotaker[0]] = 3;
            this.energy++;
            this.utelvar++
            this.bazmanal();
            for (var i in xotakerArr) {
                if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1);
                }
            }
        } else {
            this.sharjvel();
        }
    }

    bazmanal() {
        this.stanalNorKordinatner();
        var dat = this.yntrelVandak(0)
        var dat1 = Math.floor(Math.random() * dat.length)
        var norVandak = dat[dat1]
        if (this.energy == 10 && norVandak) {
            var norGishatich = new Gishatich(norVandak[0], norVandak[1]);
            GishatichArr.push(norGishatich)
            matrix[norVandak[1]][norVandak[0]] = 3;
            this.energy = 5;
        }
    }
    mahanal() {
        if (this.energy == 0) {
            for (var i in GishatichArr) {
                if (this.x == GishatichArr[i].x && this.y == GishatichArr[i].y) {
                    GishatichArr.splice(i, 1);
                    matrix[this.y][this.x] = 0;

                }

            }
        }

    }

}