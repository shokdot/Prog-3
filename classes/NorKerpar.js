// class NorKerpar {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.directions = [];
//         this.index = 6;
//     }

//     stanalNorKordinatner() {
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//     }

//     yntrelVandak(ch) {
//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 if (matrix[y][x] == ch) {
//                     found.push(this.directions[i]);
//                 }
//             }
//         }
//         return found;
//     }

//     sharjvel() {
//         this.stanalNorKordinatner();
//         var datark = this.yntrelVandak(0);
//         var norVandak = random(datark);
//         if (norVandak) {
//             matrix[this.y][this.x] = 0;
//             this.x = norVandak[0];
//             this.y = norVandak[1];
//             matrix[this.y][this.x] = 6;
//         }
//     }
//     generate() {
//         this.stanalNorKordinatner();
//         var norVandak = random(this.yntrelVandak(4).concat(this.yntrelVandak(2).concat(this.yntrelVandak(3))));
//         console.log(norVandak);

//         if (norVandak) {
//             if (matrix[norVandak[1]][norVandak[0]] == 2) {

//                 var xoter = new Xotaker(norVandak[0],norVandak[1]);
//                 NorkerparArr.push(xoter);
//                 matrix[norVandak[1]][norVandak[0]] = 2
//             }
//             else if(matrix[norVandak[1]][norVandak[0]] == 3){
//                 var xoter1 = new Gishatich(norVandak[0],norVandak[1])
//                 NorkerparArr.push(xoter1);
//                 matrix[norVandak[1]][norVandak[0]] = 3
//             }
//             else if(matrix[norVandak[1]][norVandak[0]] == 4){
//                 var xoter2 = new Amenaker(norVandak[0],norVandak[1])
//                 NorkerparArr.push(xoter2);
//                 matrix[norVandak[1]][norVandak[0]] = 4
//             }
//             matrix[this.y][this.x] = 0;
//             this.x = norVandak[0];
//             this.y = norVandak[1];

//         }
//         else{
//             this.sharjvel()
//         }
//     }


// }
