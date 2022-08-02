let hour = prompt("Введіть годину");
if (hour >= 5 && hour<=11){
    console.log("Доброго ранку")
}
else if (hour>12 && hour<17){
    console.log("Доброго дня")
}
else if (hour>18 && hour<23){
    console.log("Доброго вечора")
}
else if (hour>1 && hour<4){
    console.log("Доброї ночі")
}