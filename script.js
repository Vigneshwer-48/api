//Step 1: Create an XHR Object
var request=new XMLHttpRequest();
//Step 2: initiate a request
//opening request
request.open("GET","https://restcountries.com/v2/all");
// Step 3: sending the request
//pushing towards the server
request.send();
//Step 4: once the date successfully loaded from server
//Status: code:200
//event: it is a specific work
//onload event: it helps us to load the event
//functions: to perform a specific task
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
    for(var i=0;i<result.length;i++){
        console.log(result[i].name);
    }
};



