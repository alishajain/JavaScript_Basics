//Create a web app where I can input a text. Now, create three buttons: red, green, blue. Clicking on the button should change the text color.
var input = document.querySelector("#input");
var redBtn = document.querySelector("#red");
var greenBtn = document.querySelector("#green");
var blueBtn = document.querySelector("#blue");
var submitBtn = document.querySelector("#submit");
var output = document.querySelector("#output");

function setOutput(){
    console.log(input.value);
    output.innerText = input.value;
}

function changeToRed() {
    output.style.color = "red";
}

function changeToGreen() {
    output.style.color = "green";
}

function changeToBlue() {
    output.style.color = "blue";
}

redBtn.addEventListener("click", changeToRed);
greenBtn.addEventListener("click", changeToGreen);
blueBtn.addEventListener("click", changeToBlue);

submitBtn.addEventListener("click", setOutput);