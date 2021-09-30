let sum: number =0;
let count: number =0;
for (let i=2; count <30; i++){
    let check: number =0;
    for (let j =1; j<= Math.sqrt(i); j++){
        if (check >1){
            break
        }
        if (i % j ==0){
            check++;
        }
    }
    if (check ==1){
        count++;
        sum += i;
    }
}
console.log("Tong 30 so nguyen to " + sum);
