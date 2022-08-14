////////task1///////
let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development"
};


let propsCount = function (currentObject) {
    return Object.keys(currentObject).length;
}

// console.log(`К-сть властивостей: ${propsCount(mentor)}`);
// propsCount();





////////task2///////
let user = {
    name: "Roman",
    surname: "Chaika",
    phone: "=380683553893",
    city: "Lviv",
    country: "Ukraine"
}

function showProps(obj) {
    return Object.keys(obj)
}


console.log(showProps(user));



/////////task3/////////////
class Person{
    constructor(name,surname){
        this.name = name;
        this.surname = surname;
    }
    showFullName(){
        return this.name;
    }
}


class Student extends Person{
    constructor(name,surname,date){
        super(name,surname)
        this.date = date;
    }
    showFullName(middleName){ 
        return this.surname +" "+ this.name+" "+middleName
    }
    showCourse(){
        return new Date().getFullYear()-this.date;
    }
    
}

const stud1 = new Student("Vova","petrenko",2015)
console.log(stud1.showFullName("Petrenko"));
console.log(stud1.showCourse());




/////////////task4////////////

class Worker{
    constructor(fullName, dayRate, workingDays){
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
    #experience = 1;
   
    showSalary(){
        return this.dayRate * this.workingDays;
    }

    showSalaryWithExperience(){
        return this.showSalary() * this.getExp;
    }

    set setExp(val) {
        this.#experience = val
    }

    get getExp() {
        return this.#experience
    }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 
console.log(worker1.showSalary());
console.log("New experience: " + worker1.getExp);
worker1.showSalaryWithExperience();
worker1.setExp=(1.5);
console.log("New experience: " + worker1.getExp);
console.log(worker1.showSalaryWithExperience());



/////////task5/////////
class GeometricFigure{
    constructor() {

    }
    getArea(){
        return 0
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
   }
}
class Triangle extends GeometricFigure { 
    constructor(s1, s2, s3){
        super()
        this.s1 = s1
        this.s2 = s2
        this.s3 = s3
    }
    getArea(){
        return Math.sqrt(Math.PI * (Math.PI - this.s1) * (Math.PI - this.s2) * (Math.PI - this.s3)).toFixed(4)
    }
}
class Square extends GeometricFigure{
    constructor(storona){
        super()
        this.storona = storona
    }
    getArea(){
        return this.storona ** 2
    }

}
class Circle extends GeometricFigure {
    constructor(r){
        super()
        this.r = r; 
    }
    getArea(){
        return (Math.PI * this.r ** 2).toFixed(4)
    }

}
function handleFigures(figures = []){
    let str = ""
    figures.forEach(key => {
        str += "Geometric figure: " + key.toString() + " " +  key.getArea() + " \n"
    })
    return str
}

console.log(handleFigures([new Triangle(4, 5, 1), new Square(7), new Circle(5)]));