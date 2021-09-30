function buyCar (money: number) {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            if (money > 10){
                resolve("Ok")
            }else {
                reject("Can not buy")}},2000)})
        .then(data => console.log(data))
        .catch(data => console.error(data))
}

buyCar(5);