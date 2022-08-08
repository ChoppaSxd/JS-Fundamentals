for (let i = 0; i <= 15; i++) {
    if (i % 2 === 1) {
        console.log(`${i} is odd`);
    } else {
        console.log(`${i} is even`);
    }
}

function randArray(number) {
    const array = []
    for (let i = 0; i < number; i++) {
        array.push(Math.random().toFixed(2) * 500)
    }
    return array
}

console.log(randArray(5));

function raiseToDegree(a, b) {
    return a ** b
}

console.log(raiseToDegree(3, 4));

function findMin(...rest) {
    return Math.min(...rest)
}

console.log(findMin(12, 14, 12, -4, 0.2));

function findUnique(params = []) {
    return new Set(params).size === params.length ? true : false
}

console.log(findUnique([1, 1, 2, 3, 4, 5, 11]));

function lastElem(params = [], number = 1) {
    const lngthArr = params.length
    for (let i = 0; i < lngthArr; i++) {
        console.log(params.slice(lngthArr - number, number + (lngthArr - number)));
    }
}

console.log(lastElem([3, 4, 10, -5], 1));   // -5   
console.log(lastElem([3, 4, 10, -5], 2));   // [10, -5]
console.log(lastElem([3, 4, 10, -5], 8));   // [3, 4, 10, -5]

function firstLetterToUp(string = "") {
    let ssss = ``
    let newStr = ""
    for (const ch in string.split(" ")) {
        newStr = string.split(" ")[ch].charAt(0).toUpperCase()
        ssss += string.split(" ")[ch].replace(string.split(" ")[ch].charAt(0), newStr) + " "
    }
    return ssss
}

console.log(firstLetterToUp("i love js!"));

