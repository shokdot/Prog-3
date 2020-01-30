class Amenaker extends Living {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directions = [];
        this.index = 4;
    }

    yntrelVandak() {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                found.push(this.directions[i]);

            }
        }
        return found;
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

    utel() {
        this.stanalNorKordinatner();
        var ameninch = this.yntrelVandak();
        var miHatXot = random(ameninch);
        if (ameninch) {
            if (matrix[ameninch[1][ameninch[0]]] == 1) {
                for (var i in grassArr) {
                    grassArr.splice(i, 1);
                }
            } else if (matrix[ameninch[1][ameninch[0]]] == 2) {
                for (var i in xotakerArr) {
                    xotakerArr.splice(i, 1);
                }
            } else if (matrix[ameninch[1][ameninch[0]]] == 3) {
                for (var i in GishatichArr) {
                    GishatichArr.splice(i, 1);
                }
            } else if (matrix[ameninch[1][ameninch[0]]] == 4) {
                for (var i in AmenakerArr) {
                    AmenakerArr.splice(i, 1);
                }
            }
            matrix[this.y][this.x] = 0;
            this.x = miHatXot[0];
            this.y = miHatXot[1];
            matrix[miHatXot[1]][miHatXot[0]] = 4;
            this.energy++;
        }
    }

}