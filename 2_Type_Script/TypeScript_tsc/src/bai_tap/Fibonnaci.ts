
function fibonacci(value1: number, value2: number, starPoint: number , endPoint: number, sum: number) {
    if (starPoint > endPoint){
        console.log("Time out sum: " + sum)
        return;
    }
    starPoint++;
    let value3: number = value1 + value2;
    console.log(value3);
    sum += value3;
    fibonacci(value2, value3,starPoint , endPoint, sum);
}
console.log(0);
console.log(1);
fibonacci(0, 1, 1,8, 0);
