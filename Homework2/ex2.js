const inputNumber = +prompt("Please enter a number");
        
if (inputNumber % 2 === 0 && inputNumber > 0 && inputNumber % 7 === 0){
    console.log("You entered the even positive number multiple of 7");
} else if (inputNumber % 2 === 0 && inputNumber > 0) {
    console.log("You entered even positive number");
} else if (inputNumber % 7 === 0){
    console.log("You entered the number multiple of 7");
} else {
    console.log("You entered the number which is not even positive number or multiple of 7");
}