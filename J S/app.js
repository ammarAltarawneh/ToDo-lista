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
function askJordanian() {
    let answer = prompt("Are you Jordanian?");
    if (answer == "" || (answer != "yes" && answer != "no")) {
      return "invalid";
    } else {
      return answer;
    }
  }
 
  function askWorks() {
    let answer = prompt("Do you work?");
    if (answer == "" || (answer != "yes" && answer != "no")) {
      return "invalid";
    } else {
      return answer;
    }
  }
  
  function askMarried() {
    let answer = prompt("Are you married?");
    if (answer == "" || (answer != "yes" && answer != "no")) {
      return "invalid";
    } else {
      return answer;
    }
  }

  let answers = [askJordanian(), askWorks(), askMarried()];
  console.log(answers);