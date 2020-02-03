class GishatichEater {
    constructor(x, y) {
        super(x, y);
        this.directions = [];
        this.index = 4;
        this.energy = 10;
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var datark = this.yntrelVandak(0);
        var norVandak = random(datark);
        if (norVandak) {

            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1]
            matrix[this.y][this.x] = 4;
            this.energy--;
            this.mahanal();
        }


    }

    utel() {
        this.stanalNorKordinatner();
        var xotaker = this.yntrelVandak(3);
        var miHatXotaker = random(xotaker);
        if (miHatXotaker) {
            matrix[this.y][this.x] = 0;
            this.x = miHatXotaker[0];
            this.y = miHatXotaker[1];
            matrix[miHatXotaker[1]][miHatXotaker[0]] = 4;
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
        this.stanalNorKordinatner();
        var norVandak = random(this.yntrelVandak(0));
        if (this.energy == 10 && norVandak) {
            var norGishatichEater = new GishatichEater(norVandak[0], norVandak[1]); // chischt dzev senc
            GishatichEaterArr.push(norGishatichEater)
            matrix[norVandak[1]][norVandak[0]] = 4; // matrixi mej grelu dzev senc
            this.energy = 5;
        }
    }


    // bazmanal() {
    //     if (this.energy == 10) {
    //         var norGishatich = new Gishatich(this.x, this.y);   bazmanulu dzev@ ??? vorna chisht
    //         GishatichArr.push(norGishatich)
    //         this.energy = 5;
    //     }

    //}

    mahanal() {
        if (this.energy == 0) {
            for (var i in GishatichEaterArr) {
                if (this.x == GishatichEaterArr[i].x && this.y == GishatichEaterArr[i].y) {
                    GishatichEaterArr.splice(i, 1);
                    matrix[this.y][this.x] = 0;

                }

            }
        }

    }


}