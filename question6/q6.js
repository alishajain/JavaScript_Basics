//Create two objects with name, age, and yuga as Ram, 25, Treta. Krishna, 31, Dwapar. Write a function which takes two objects and return the person with more age.

var name1 = document.querySelector("#name_1");
var age1 = document.querySelector("#age_1");
var name2 = document.querySelector("#name_2");
var age2 = document.querySelector("#age_2");
var submitBtn = document.querySelector("#submit");
var output = document.querySelector("#output");

function setOutput(){
    if(Number(age1.value) > Number(age2.value)){
        output.innerText = name1.value;
    } else {
        output.innerText = name2.value;
    }
}

submitBtn.addEventListener("click", setOutput);