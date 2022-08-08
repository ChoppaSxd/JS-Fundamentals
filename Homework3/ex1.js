const numbers = [2, 3, 4, 5];
let suma = 0;
for (const number of numbers) {
    suma += number
}
console.log(suma);

let i = 0;
suma = 0;
while (numbers.length !== i) {
    suma += numbers[i]
    ++i
}
console.log(suma);
