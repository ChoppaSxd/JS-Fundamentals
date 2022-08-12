let a = Number(prompt("Введіть значення 1 сторони"));
let b = Number(prompt("Введіть значення 2 сторони"));
let c = Number(prompt("Введіть значення 3 сторони"));

if(a>0&&b>0&&c>0){
    let p = (a+b+c)/2;
    let triangleArea = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    console.log("Площа = "+ triangleArea.toFixed(3));
}
else{
    alert("Неправильно введені дані")
}


if((a*a+b*b===c*c)||(b*b+c*c===a*a)||(c*c+a*a===b*b)){
    console.log("Трикутник прямокутний");
}
else{
    console.log("Трикутник не прямокутний");
}