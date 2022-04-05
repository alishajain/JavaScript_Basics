//Create a web app which would take two inputs. It would also have 4 buttons: +, -, x /. Based on the button clicked perform the operation on the two inputs. You can do this in React or vanillaJS based on your choice.
var input1 = document.querySelector("#input1");
var input2 = document.querySelector("#input2");
var addBtn = document.querySelector("#add");
var subBtn = document.querySelector("#sub");
var mulBtn = document.querySelector("#mul");
var divBtn = document.querySelector("#div");
var submitBtn = document.querySelector("#submit");
var output = document.querySelector("#output");

function setOutput(y) {
    console.log(input1.value);
    console.log(input2.value);
    output.innerText = y(input1, input2); 
}

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

addBtn.addEventListener("click", setOutput(add));
subBtn.addEventListener("click", setOutput(sub));
mulBtn.addEventListener("click", setOutput(mul));
divBtn.addEventListener("click", setOutput(div));
submitBtn.addEventListener("click", setOutput);