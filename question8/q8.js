//Palindrome Birthday
var bday = document.querySelector("#dob");
var btn = document.querySelector("#submit");
var output = document.querySelector("#output");

function revDate(date){
    revBday = date.split('').reverse().join('');
    console.log(revBday);
}

function getResult(){
    var date_sum = bday.value.split("-");
    var dob;

    dob = date_sum[0] + date_sum[1] + date_sum[2];
    console.log(dob);

    revBday = dob.split('').reverse().join('');
    console.log(revBday);

    var i = 0, count = 0;
    while(i <= 3) {
        if(dob[i] === revBday[i]){
            i++;
        } else {
            count = 1;
            break;
        }
    }

    if(count === 0 ){
        output.innerHTML = "Your birthday is a palindrome!!!";
    } else {
        output.innerHTML = "Your birthday is not a palindrome!!!";
    }
}

btn.addEventListener("click", getResult);