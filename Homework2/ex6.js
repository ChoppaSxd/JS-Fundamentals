let x = prompt("Введіть довжину 1 сторони")
let y = prompt("Введіть довжину 2 сторони")
let z = prompt ("Введіть довжину 3 сторони")
let p = (x+y+z)/2

let s = Math.sqrt(p * (p - x) * (p - y) * (p - z));
console.log("Площа трикутника = "+s)

let r = Math.pow(x,2)+Math.pow(y,2)+Math.pow(z,2)
console.log(r)