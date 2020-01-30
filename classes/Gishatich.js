class Gishatich extends Living {
    constructor(x, y) {
        super(x, y);
        this.energy = 10;
        this.directions = [];
        this.index = 3;
    }

    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    sharjvel() {
        this.stanalNorKordinatner();
        var datark = this.yntrelVandak(0);
        var norVandak = random(datark);
        if (norVandak) {

            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1]
            matrix[this.y][this.x] = 3;
            this.energy--;
            this.mahanal();
        }


    }

    utel1() {
        this.stanalNorKordinatner();
        var xotaker = this.yntrelVandak(1);
        var miHatXotaker = random(xotaker);
        if (miHatXotaker) {
            matrix[this.y][this.x] = 1;
            this.x = miHatXotaker[0];
            this.y = miHatXotaker[1]
            matrix[miHatXotaker[1]][miHatXotaker[0]] = 3;
            this.energy++;
            for (var i in xotakerArr) {
                if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1);
                }
            }
        } else {
            this.sharjvel();
        }
    }

    utel() {
        this.stanalNorKordinatner();
        var xotaker = this.yntrelVandak(2);
        var miHatXotaker = random(xotaker);
        if (miHatXotaker) {
            matrix[this.y][this.x] = 0;
            this.x = miHatXotaker[0];
            this.y = miHatXotaker[1]
            matrix[miHatXotaker[1]][miHatXotaker[0]] = 3;
            this.energy++;
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
        if (this.energy == 10) {
            var norGishatich = new Gishatich(this.x, this.y);
            GishatichArr.push(norGishatich)
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