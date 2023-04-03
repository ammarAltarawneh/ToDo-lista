'use strict';
let inputName = prompt("Please, enter your name:");
let inputGender = prompt("Please, enter your gender:");
if (inputGender != "male" && "female"){
    inputGender = prompt("Please, enter your gender:");
}
let inputAge = prompt("Please, enter your age:");
if (inputAge <= 0){
    alert("the age is less than or equal to zero");
    prompt("Please, enter your age:");
}
let inputConfirm = confirm("Do you want to skip the welcoming message?!")
if (inputConfirm == false){
    inputGender == "male" ? alert("Helow,MR " + inputName) : inputGender == "female" ? alert("Helow,Ms " + inputName):alert("Helow");
}