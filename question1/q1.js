//Create a web app which would take two inputs. It would also have 4 buttons: +, -, x /. Based on the button clicked perform the operation on the two inputs. You can do this in React or vanillaJS based on your choice.
var input1 = document.querySelector("#input1");
var input2 = document.querySelector("#input2");
var addBtn = document.querySelector("#add");
var subBtn = document.querySelector("#sub");
var mulBtn = document.querySelector("#mul");
var divBtn = document.querySelector("#div");
var submitBtn = document.querySelector("#submit");
var output = document.querySelector("#output");

function setOutput() {
    console.log(input1.value);
    console.log(input2.value);
}

function add() {
    output.innerText = Number(input1.value) + Number(input2.value);
}

function sub() {
    output.innerText = Number(input1.value) - Number(input2.value);
}

function mul() {
    output.innerText = Number(input1.value) * Number(input2.value);
}

function div() {
    output.innerText = Number(input1.value) / Number(input2.value);
}

addBtn.addEventListener("click", add);
subBtn.addEventListener("click", sub);
mulBtn.addEventListener("click", mul);
divBtn.addEventListener("click", div);
submitBtn.addEventListener("click", setOutput);