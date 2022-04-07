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

var size = 16;

function increaseBy2() {
    size += 2;
    console.log(size);
    output.style.fontSize = `${size}px`;
}

function decreaseBy2() {
    size -= 2;
    console.log(size);
    output.style.fontSize = `${size}px`;
}

incBtn.addEventListener("click", increaseBy2);
decBtn.addEventListener("click", decreaseBy2);
submitbtn.addEventListener("click", setOutput);