let gradeOne = +prompt("Enter Client-side Scripting 1 Grade:");
let gradeTwo = +prompt("Enter Structured Programming 1 Grade:");
let gradeThree = +prompt("Enter Structured Programming 2 Grade:");
let gradeFour = +prompt("Enter Client-side Scripting 2 Grade:");
let gradeFive = +prompt("Enter Project A Grade:");

let finalGrade = (gradeOne + gradeTwo + gradeThree + gradeFour + gradeFive) / 5;
alert("Your CS10 Grade is: " + finalGrade + "%");

function calc() {
  // Input
  let g1 = +document.getElementById("input1").value;
  let g2 = +document.getElementById("input2").value;
  let g3 = +document.getElementById("input3").value;
  let g4 = +document.getElementById("input4").value;
  let g5 = +document.getElementById("input5").value;

  // Process
  let output = (g1 + g2 + g3 + g4 + g5) / 5;

  // Output
  document.getElementById("output").innerHTML = output;
  console.log("CALCULATED FINAL GRADE OF " + output + "%");
}

document.getElementById("calcButton").addEventListener("click", calc);
