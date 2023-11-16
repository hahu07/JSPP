let num1 = 8
let num2 = 2

document.getElementById("num1").textContent = num1
document.getElementById("num2").textContent = num2

let cal = document.getElementById("sum-el")
function add() {
    cal.textContent = num1 + num2
}
function substrct() {
    cal.textContent = num1 - num2
}
function divide() {
    cal.textContent = num1 / num2
  
}
function multiply() {
    
    cal.textContent = num1 * num2
}