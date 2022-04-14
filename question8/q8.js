//Palindrome Birthday
var bday = document.querySelector("#dob");
var btn = document.querySelector("#submit");
var output = document.querySelector("#output");
var count = 0;

function isPalindrome(dob) {
    var i = 0;
    while(i <= 3) {
        if(dob[i] === dob[7-i]){
            count = 0;
            i++;
        } else {
            count = 1;
            break;
        }
    }
    return count;
}

function closestSmallPalindrome(dob) {
    var sPNum = dob;
    
    while(count === 1) {
        sPNum++;
        isPalindrome(sPNum.toString());
    }
    console.log(sPNum);
    count = 1;
    return sPNum;
}

function closestLargePalindrome(dob) {
    var lPNum = dob;
    while(count === 1) {
        lPNum--;
        isPalindrome(lPNum.toString());
    }
    console.log(lPNum);
    return lPNum;
}

function closestPalindrome(dob){
    var sP = 0, lP = 0, sPDiff, lPdiff, num;
    num = dob;
    sP = closestSmallPalindrome(num);
    lP = closestLargePalindrome(num);

    sPDiff = Math.abs(sP - dob);
    lPdiff = Math.abs(lP - dob);
    console.log(sPDiff);
    console.log(lPdiff);

    if(sPDiff > lPdiff){
        return lP;
    } else {
        return sP;
    }
}

function getResult(){
    var date_sum = bday.value.split("-");
    var dob, result, newPNum;

    dob = date_sum[0] + date_sum[1] + date_sum[2];
    console.log(dob);
    
    result = isPalindrome(dob);
    dob = Number(dob);
    if(result === 0 ){
        output.innerHTML = "Your birthday is a palindrome!!!";
    } else {
        output.innerHTML = "Your birthday is not a palindrome!!!";
        newPNum = closestPalindrome(dob.toString());
        console.log(newPNum);
    }
}

btn.addEventListener("click", getResult);