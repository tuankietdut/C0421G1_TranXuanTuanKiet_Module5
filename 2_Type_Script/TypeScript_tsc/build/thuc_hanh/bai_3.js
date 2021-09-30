"use strict";
var arr = [16, 2, 3, 4, 2, 17, 8, 7, 5, 10];
var sum_3 = 0;
for (var i = 0; i < arr.length; i++) {
    var check = true;
    for (var j = 2; j <= Math.sqrt(arr[i]); j++) {
        if (arr[i] % j == 0) {
            check = false;
            break;
        }
    }
    if (check) {
        sum_3 += arr[i];
    }
}
console.log("Tong so nguyen to trong mang la " + sum_3);
