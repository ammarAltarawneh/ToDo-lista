'use strict';
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