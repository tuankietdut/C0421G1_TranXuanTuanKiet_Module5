"use strict";
var sum = 0;
var count = 0;
for (var i = 2; count < 30; i++) {
    var check = 0;
    for (var j = 1; j <= Math.sqrt(i); j++) {
        if (check > 1) {
            break;
        }
        if (i % j == 0) {
            check++;
        }
    }
    if (check == 1) {
        count++;
        sum += i;
    }
}
console.log("Tong 30 so nguyen to " + sum);
