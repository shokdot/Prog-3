// class Amenaker {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.directions = [];
//         this.index = 5;
//         this.energy = 100;
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

//     utel() {
//         this.stanalNorKordinatner();
//         var ameninch = this.yntrelVandak(1).concat(this.yntrelVandak(2)).concat(this.yntrelVandak(3)).concat(this.yntrelVandak(4)) // do with concat()
//         var miHatXot = random(ameninch);
//         console.log(miHatXot)
//         // matrix[this.y][this.x] = 0;
//         // this.x = miHatXot[0]
//         // this.y = miHatXot[1]
//         // matrix[this.y][this.x] = 5;
//         if (miHatXot) {
//             matrix[this.y][this.x] = 0;
//             this.x = miHatXot[0];
//             this.y = miHatXot[1];
//             matrix[miHatXot[1]][miHatXot[0]] = 5;

//             if (matrix[miHatXot[1][miHatXot[0]]] == 1) {
//                 for (var i in grassArr) {
//                     if (miHatXot[1] == grassArr[i].x && miHatXot[0] == grassArr[i].y) {

//                         grassArr.splice(i, 1);
//                     }
//                 }
//             } else if (matrix[miHatXot[1][miHatXot[0]]] == 2) {
//                 for (var i in xotakerArr) {
//                     console.log(AmenakerArr)
//                     if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
//                         xotakerArr.splice(i, 1);
//                     }
//                 }
//             } else if (matrix[miHatXot[1][miHatXot[0]]] == 3) {
//                 for (var i in GishatichArr) {
//                     if (this.x == GishatichArr[i].x && this.y == GishatichArr[i].y) {
//                         GishatichArr.splice(i, 1);
//                     }
//                 }
//             } else if (matrix[miHatXot[1][miHatXot[0]]] == 4) {
//                 for (var i in AmenakerArr) {
//                     if (this.x == AmenakerArr[i].x && this.y == AmenakerArr[i].y) {
//                         AmenakerArr.splice(i, 1);
//                     }
//                 }
//             }


//             // matrix[miHatXot[1]][miHatXot[0]] = 5;
//             //this.energy--;
//             //this.mahanal()
//         }
//     }
//     mahanal() {
//         if (this.energy == 0) {
//             for (var i in AmenakerArr) {
//                 if (this.x == AmenakerArr[i].x && this.y == AmenakerArr[i].y) {
//                     AmenakerArr.splice(i, 1);
//                     matrix[this.y][this.x] = 0;

//                 }

//             }
//         }
//     }
// }