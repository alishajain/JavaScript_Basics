//Create a web app where I can input a text. Now create two buttons + and -. On clicking + increase the fontSize by 2px and vice versa.
var input = document.querySelector("#input");
var incBtn = document.querySelector("#increase");
var decBtn = document.querySelector("#decrease");
var submitbtn = document.querySelector("#submit");
var output = document.querySelector("#output");

function setOutput(){
    console.log(input.value);
    output.innerText = input.value;
}

function increaseBy2() {
    output.style.fontSize =  "18px";
}

function decreaseBy2() {
    output.style.fontSize = "14px";
}

incBtn.addEventListener("click", increaseBy2);
decBtn.addEventListener("click", decreaseBy2);
submitbtn.addEventListener("click", setOutput);