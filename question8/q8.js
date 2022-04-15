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

function isValid(d, m, y){
    if(m < 1 || m > 12){
        return false;
    } 
    if(d < 1 || d >31){
        return false;
    }

    if(m === 2){
        if(isLeap(y)){
            return (d < 29);
        } else {
            return (d < 28);
        }
    }

    if(m === 4 || m === 6 || m === 9 || m === 11) {
        return (d < 30);
    }

    return true;
}
function closestLargePalindrome(date_sum) {
    var yr, month, day, mm, yy, dd;

    while(count === 1){
        yr = date_sum.split("");
        yy = Number(yr[0] + yr[1] + yr[2] + yr[3]);

        month = yr[3] + yr [2];
        mm = Number(month);

        day = yr[1] + yr[0];
        dd = Number(day);
            if(isValid(dd, mm, yy)){
                console.log(yr[0] + yr[1] + yr[2] + yr[3] + "-" +month + "-" + day);
                count = 0;
            } else {
                yy++;
                date_sum = yy.toString();
        }
    }
    
}

// function closestPalindrome(dob){
//     var sP = 0, lP = 0, sPDiff, lPdiff, num;
//     num = dob;
//     sP = closestSmallPalindrome(num);
//     lP = closestLargePalindrome(num);

//     sPDiff = Math.abs(sP - dob);
//     lPdiff = Math.abs(lP - dob);
//     console.log(sPDiff);
//     console.log(lPdiff);

//     if(sPDiff > lPdiff){
//         return lP;
//     } else {
//         return sP;
//     }
// }

function getResult(){
    var date_sum = bday.value.split("-");
    var dob, result, newPNum;

    dob = date_sum[0] + date_sum[1] + date_sum[2];
    console.log(dob);
    
    result = isPalindrome(dob);
   // dob = Number(dob);
    if(result === 0 ){
        output.innerHTML = "Your birthday is a palindrome!!!";
    } else {
        output.innerHTML = "Your birthday is not a palindrome!!!";
        closestLargePalindrome(date_sum[0]);
      //  newPNum = closestPalindrome(Number(dob));
        //console.log(newPNum);
        //toDate(newPNum.toString());
    }
}

btn.addEventListener("click", getResult);