let input1Msg = prompt("Please enter a massage for unput1");
let input2Msg = prompt("Please enter a massage for unput2");

let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");

input1.value = input1Msg;
input2.value = input2Msg;

input2.after(input1);





////task 7
let main = document.createElement('main');
main.className = 'mainClass check item';

let div = document.createElement('div');
div.id = 'myDiv';

let p = document.createElement('p');
p.textContent = "First paragraph";

div.append(p);
main.append(div);
document.body.prepend(main);