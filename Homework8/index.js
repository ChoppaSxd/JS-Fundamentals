//////ex1//////
function upperCase(str){
    RegExp = /^[A-Z]/;
    if(RegExp.test(str)){
        console.log("String starts with uppercase");
    }
    else{
        console.log("String not starts with uppercase");
    }
}
upperCase('regexp');
upperCase('RegExp');



////////ex2/////////
function checkEmail(data){
    const regExp = /\S+@\S+\.\S+/;
    console.log(regExp.test(data));
}
checkEmail("Qmail2@gmail.com")


///////ex3//////////
const myRe = /d(b+)(d)/i;
const myArray = myRe.exec("cdbBdbsbz");
console.log(myArray);


///////ex4//////////
const re = /(\w+)\s(\w+)/;
const str = "Java Script";
const newstr= str.replace(re,"$2,$1");
console.log(newstr);




////////ex5//////////
function checkBankCard(str){
    const regExp= /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    const result = regExp.test(str);
    if(result){
        console.log("Validation Successful");
    }
    else{
        console.log("Incorrect data input");
    }
}

checkBankCard('2233-4432-5541-4413');
checkBankCard('2233-4432-5541-44131');





/////////ex6/////////////
function checkEmail(str){
    const mailPattern = /^[a-zA-Z0-9]+([-]?\w+)*@\w+([-]&\w+)*(\.\w{2,3})+$/;
    if (mailPattern.test(str)){
        console.log("Email is correct");
    }
    else{
        console.log("Email is not correct");
    }
}
checkEmail('my_ma-il@gma_il.c_m');






////////////ex7////////////
const checkLogin = function(string) {
     let regexp = /^[a-zA-Z]((\d*\.?\d*)?[a-zA-Z]*)*$/;

     let isCorrect = regexp.test(string);
     let numbers =  string.match(/\d+\.?\d*/g).toString().replace(/,/g, ", ");

     return `${isCorrect}\r\n${numbers}`;
 }

 console.log(checkLogin('ee1.1ret3'));
 console.log(checkLogin('ee1*1ret3'));