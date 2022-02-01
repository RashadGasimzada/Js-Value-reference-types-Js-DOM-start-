let firstDigit = document.getElementById("first-digit");
let secondDigit = document.getElementById("second-digit");
let toplamaBtn = document.querySelector(".btn-primary");
let cixmaBtn = document.querySelector(".btn-danger");
let vurmaBtn = document.querySelector(".btn-success");
let bolmeBtn = document.querySelector(".btn-warning");
let resultInput = document.getElementById("result-input");
let icon = document.querySelector(".my-icon");

toplamaBtn.onclick = function () {
   
    let result = parseFloat(firstDigit.value) + parseFloat(secondDigit.value);
    resultInput.value = result;
}

cixmaBtn.onclick = function () {
    
    let result = parseFloat(firstDigit.value) - parseFloat(secondDigit.value);
    resultInput.value = result;
}

vurmaBtn.onclick = function () {
  
    let result = parseFloat(firstDigit.value) * parseFloat(secondDigit.value);
    resultInput.value = result;
}

bolmeBtn.onclick = function () {

    let result = parseFloat(firstDigit.value) / parseFloat(secondDigit.value);
    resultInput.value = result;

}

icon.onclick = function() {
    resultInput.value = "";
}
