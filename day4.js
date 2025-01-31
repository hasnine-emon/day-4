//task1
let age=prompt("Enetr the age: ");
if(age>=18){
    console.log("You are an adult");
}else{
    console.log("You are a minor ");
}
//task2
let num=prompt("Enetr the number:");
if (num > 0) {
    console.log("The number is positive");
} else if (num < 0) {
    console.log("The number is negative");
} else {
    console.log("The number is zero");
}
//task3
let userName = prompt("Enter your name:"); 
{
    console.log("Hello, "+userName+"! Welcome to JavaScript Learning.");
}
//task4
let num1 = Number(prompt("Enter the first number for multy:")); 
let num2 = Number(prompt("Enter the second number for multy:"));
console.log("Multiply Number is ",num1*num2);
//task5
let num3= Number(prompt("Enter a number for even and odd:")); 
 if (num3 % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}
//task6
let num4 = Number(prompt("Enter the first number for max:"));  
let num5 = Number(prompt("Enter the second number for max:"));  
let num6 = Number(prompt("Enter the third number for max:"));  
    let max;
    if (num4>=num5 && num4>=num6) {
        max = num4;
    } else if (num5>=num4 && num5>=num6) {
        max = num5;
    } else {
        max = num6;
    }
    console.log("The largest number is: ",max);

