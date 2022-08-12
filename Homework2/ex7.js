/* let hour = prompt("Введіть годину");
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
} */







let date = new Date();
let currentHour= date.getHours();
switch(true){
    case (currentHour>=23 || currentHour<=5):
        alert("Good night");
        break;
    case (currentHour>=5 && currentHour<=11):
        alert("Good morning");
        break;
    case (currentHour>=11 && currentHour<= 17):
        alert("Good day");
        break;
    case (currentHour>=17 && currentHour<23):
        alert("Good evening");
        break;
}
