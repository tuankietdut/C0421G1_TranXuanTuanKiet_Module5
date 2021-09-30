"use strict";
function buyCar(money) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (money > 10) {
                resolve("Ok");
            }
            else {
                reject("Can not buy");
            }
        }, 2000);
    })
        .then(function (data) { return console.log(data); })
        .catch(function (data) { return console.error(data); });
}
buyCar(5);
