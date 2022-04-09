var input = document.querySelector("#input");
var output = document.querySelector("#output");
var btn = document.querySelector("#submit");
var baseUrl = "https://api.funtranslations.com/translate/yoda.json";

//fetch(baseUrl).then((response) => console.log(response.json));

 function clickHandler() {
     var url = baseUrl + "/?text=" + input.value;

     fetch(url)
         .then((response) => response.json())
         .then((data) => console.log(data));
 }

btn.addEventListener("click", clickHandler);