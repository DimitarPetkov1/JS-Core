function oddEven(num) {
    let result = "";
    if (num % 2 === 0){
        result = "even"
    }
    else if (num % 2 !== 0){
        result = "odd"
    }
    else {
        result = "invalid"
    }
    return result;
}

console.log(oddEven(1.5))