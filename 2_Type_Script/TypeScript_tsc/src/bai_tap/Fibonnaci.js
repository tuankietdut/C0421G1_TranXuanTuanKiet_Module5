function fibonacci(value1, value2, starPoint, endPoint, sum) {
    if (starPoint > endPoint) {
        console.log("Time out sum: " + sum);
        return;
    }
    starPoint++;
    var value3 = value1 + value2;
    console.log(value3);
    sum += value3;
    fibonacci(value2, value3, starPoint, endPoint, sum);
}
console.log(0);
console.log(1);
console.log("Tong la" + fibonacci(0, 1, 1, 8, 0));
