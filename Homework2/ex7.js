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







var today = new Date();
  var timeNow = today.getHours()
  var greeting = $("#greeting");

switch (true) { 
    case timeNow > 17 : greeting = "Доброго вечора ";
    break;
    case timeNow > 12 : greeting = "Доброго дня";
    break;
    case timeNow > 6 : greeting = "Доброго ранку";
    break;
    default: greeting = "Доброї ночі";
  }

  $('#greeting').html('<h1>' + greeting + '<h1>');

