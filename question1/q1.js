//Create a web app which would take two inputs. It would also have 4 buttons: +, -, x /. Based on the button clicked perform the operation on the two inputs. You can do this in React or vanillaJS based on your choice.
var input1 = document.querySelector("#input1");
var input2 = document.querySelector("#input2");
var addBtn = document.querySelector("#add");
var subBtn = document.querySelector("#sub");
var mulBtn = document.querySelector("#mul");
var divBtn = document.querySelector("#div");
var submitBtn = document.querySelector("#submit");
var output = document.querySelector("#output");

var a = input1.value;
var b = input2.value;

function setOutput() {
    console.log(input1.value);
    console.log(input2.value);
}

function add() {
    output.innerText = a+b;
}

function sub() {
    output.innerText = a-b;
}

function mul() {
    output.innerText = a*b;
}

function div() {
    output.innerText = a/b;
}

addBtn.addEventListener("click", add);
subBtn.addEventListener("click", sub);
mulBtn.addEventListener("click", mul);
divBtn.addEventListener("click", div);
submitBtn.addEventListener("click", setOutput);