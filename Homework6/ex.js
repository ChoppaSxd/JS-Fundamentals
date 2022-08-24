/////ex1
let test = document.querySelector("#test");
test.innerHTML = "<b>Last</b>";

/////ex2
document.querySelector(".image").setAttribute("src", "./images/cat.jpg");


/////ex3
let text = document.querySelectorAll("#text > p");
for (const key in text) {

    text[key].textContent = `Selector text ${key}: ` + text[key].textContent;
}



/////ex4
let list = document.querySelectorAll("#list li");
let order = [1, 5, 2, 4, 3];
let listOutput = "";
for (let index = 0; index < order.length; index++) {
    const element = order[index] - 1;
    listOutput += list[element].textContent;
    if (index != order.length - 1) {
        listOutput += ",";
    }
}
alert(listOutput);
