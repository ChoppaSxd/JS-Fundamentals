/////////////////Task1/////////////////////
let calcRectangleArea = function (width, height) {
    if (isNaN(width) || !Number(height)) {
        throw new Error("Введіть число!!!");
    } else {
        return width * height;
    }
}
try {
    console.log(calcRectangleArea(5, 3));
} 
catch (error) {
    console.log(error);
}




/////////////////Task2/////////////////////
let checkAge = function() {
    let age = prompt("Скільки вам років ? ");
    let error;
    try {
        if (age == "") {
            throw new Error("The field is empty! Please enter your age");
        } else if (isNaN(age)) {
            throw new Error("Введено не числові значення");
        } else if (age < 14){
            throw new Error("Вам ще немає 14 років :(");
        } else {
            return "Ви отримали доступ для перегляду фільму";
        }
    } catch (error) {
        return error;
    }
}

alert(checkAge());








/////////////////Task3/////////////////////
class MonthException {
    constructor(message) {
        this.name = "MonthException";
        this.message = message;
    }
}

let showMonthName = function(monthNumber) {
    
    try {
        if (monthNumber > 0 && monthNumber < 13) {
            let date = new Date(0, monthNumber-1);
            let monthName = date.toLocaleString('default', { month: 'long' });
            alert(monthName);
        } else {
            throw new MonthException("Неправильний номер місяця");
            
        }
    } catch (error) {
        console.log(error);
        alert(error.message);
    }
}

let inputMonthNumber = +prompt("Введіть номер місяця: ");
showMonthName(inputMonthNumber);






/////////////////Task4/////////////////////
let showUser = function(id) {
    try {
        if (id >= 0) {
            return {
                id: id
            };
        } else {
            throw new Error(`Id must not be negative: ${id}`);
        }
    } catch (exception) {
        console.log(exception);
    }
}

let showUsers = function(ids) {
    let newArr = [];
    ids.forEach(element => {
        if ((showUser(element)) !== undefined) {
            newArr.push(showUser(element));
        }
    });
    return newArr;

}

console.log(showUsers([7, -12, 44, 22]));