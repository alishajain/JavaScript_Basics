//Create an app which takes name, unit test marks, pre final marks, final marks of 5 students. And then print who has the highest marks. What if I ask you to print the average as well?
var name1 = document.querySelector("#name1");
var ut1 = document.querySelector("#ut_marks1");
var pf1 = document.querySelector("#pf_marks1");
var final1 = document.querySelector("#final_1");
var total1

var name2 = document.querySelector("#name2");
var ut2 = document.querySelector("#ut_marks2");
var pf2 = document.querySelector("#pf_marks2");
var final2 = document.querySelector("#final_2");
var total2

var name3 = document.querySelector("#name3");
var ut3 = document.querySelector("#ut_marks3");
var pf3 = document.querySelector("#pf_marks3");
var final3 = document.querySelector("#final_3");
var total3

var name4 = document.querySelector("#name4");
var ut4 = document.querySelector("#ut_marks4");
var pf4 = document.querySelector("#pf_marks4");
var final4 = document.querySelector("#final_4");
var total4

var name5 = document.querySelector("#name5");
var ut5 = document.querySelector("#ut_marks5");
var pf5 = document.querySelector("#pf_marks5");
var final5 = document.querySelector("#final_5");
var total5

var submitBtn = document.querySelector("#submit");
var output = document.querySelector("#output");
var avg = document.querySelector("#avg");

var highest;

function setOutput(){
    total1 = Number(ut1.value) + Number(pf1.value) + Number(final1.value);
    total2 = Number(ut2.value) + Number(pf2.value) + Number(final2.value);
    total3 = Number(ut3.value) + Number(pf3.value) + Number(final3.value);
    total4 = Number(ut4.value) + Number(pf4.value) + Number(final4.value);
    total5 = Number(ut5.value) + Number(pf5.value) + Number(final5.value);

    console.log(total1);
    console.log(total2);
    console.log(total3);
    console.log(total4);
    console.log(total5);

    const total = [total1, total2, total3, total4, total5]
    var largest = 0;
    for (var i = 0; i < 5; i++){
        if(total[i] > largest) {
            largest = total[i];
        }
    }

    output.innerText = largest;
    avg.innerText = (total1 + total2 + total3 + total4 + total5)/5;

}

submitBtn.addEventListener("click", setOutput);