var Living = require('./Living')

module.exports = class Grass extends Living {
    constructor(x, y) {
        super(x, y)
        this.multiply = 0;
        this.index = 1;

    }
    
    bazmanal() {
        this.multiply++;
        var dat = this.yntrelVandak(0)
        var dat1 = Math.floor(Math.random() * dat.length)
        var norVandak = dat[dat1]

        if (this.multiply >= 5 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 1;
        }
    }

}