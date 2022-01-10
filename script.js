//FizzBuzz example
function FizzBuzz(){
    let num = prompt("Please input a number: ");

    if(num % 3 === 0
        && num % 5 === 0){
        console.log("FizzBuzz");

    }else if(num % 3 === 0 ){
        console.log("Fizz");

    }else if(num % 5 === 0){
        console.log("Buzz");

    }else{
        console.log(num);
    }
}

function CheckPassword(){
    let password = prompt("Please enter a password");

    if( password.length >= 5 &&
        password.length <= 10 &&
        PasswordHasLower(password) &&
        PasswordHasVowels(password) &&
        PasswordHasNum(password)){
        console.log("True");
    }else{
        console.log("False");
    }
}

function PasswordHasLower(password){
   for( i = 0; i < password.length; i++){
        if(password[i] === password[i].toLowerCase()){
            return true;
        }
    };

    return false;
}

function PasswordHasVowels(password){
    let vowels = ['a','e','i','o','u'];

    for( i = 0; i < password.length; i++){
        if( vowels.includes( password[i] ) ){
            return true;
        }
    };

    return false;
}

function PasswordHasNum(password){
    let digit = ['0','1','2','3','4','5','6','7','8','9','0'];

    for( i = 0; i < password.length; i++){
        if( digit.includes( password[i] ) ){
            return true;
        }
    };

    return false;
}