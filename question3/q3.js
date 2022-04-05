var input = document.querySelector("#input");
var h1Btn = document.querySelector("#h1");
var h2Btn = document.querySelector("#h2");
var h3Btn = document.querySelector("#h3");
var submitBtn = document.querySelector("#submit");
var output = document.querySelector("#output");

function setOutput() {
    console.log(input.value);
    output.innerText = input.value;
}

function changeToH1() {
    output.style.fontSize = "2em";
    output.style.fontWeight = "bolder";
}

function changeToH2() {
    output.style.fontSize = "1.5em";
    output.style.fontWeight = "bolder";
}

function changeToH3() {
    output.style.fontSize = "1.17em";
    output.style.fontWeight = "bolder";
}

h1Btn.addEventListener("click", changeToH1);
h2Btn.addEventListener("click", changeToH2);
h3Btn.addEventListener("click", changeToH3);
submitBtn.addEventListener("click", setOutput);