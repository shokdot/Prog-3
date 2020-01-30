class Xotaker extends Living {
    constructor(x, y) {
        super(x, y)
        this.energy = 5;
        this.directions = [];
        this.index = 2;
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


    bazmanal() {
        if (this.energy == 10) {
            var norXotaker = new Xotaker(this.x, this.y);
            xotakerArr.push(norXotaker)
            this.energy = 5;
        }
    }
    utel() {
        this.stanalNorKordinatner();
        var xot = this.yntrelVandak(1);
        var miHatXot = random(xot);
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
        var norVandak = random(datark);
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