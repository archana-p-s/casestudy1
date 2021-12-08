function listing()
{
    
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState==4&&this.status==200){
        var response = JSON.parse(this.responseText);
        var op = "";
        for(var i=0;i<response.length;i++){
            if(response[i].completed==true){
                var Html="<tr><td>"+response[i].userId+"</td><td>"+response[i].id+"</td><td>"+response[i].title+"</td><td><input type='checkbox' class='form-check-input checkbox' checked disabled></td></tr>";
                
                 op=op+Html;
               
            }
       else{
           Html="<tr><td>"+response[i].userId+"</td><td>"+response[i].id+"</td><td>"+response[i].title+"</td><td><input type='checkbox' class='form-check-input checkbox' onchange='cvalid();'></td></tr>";
            op=op+Html;
          }
        }
        document.getElementById("table").innerHTML = op;
    }
}
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);

xhttp.send();
}

function cvalid(){
var promise = new Promise(function(resolve,reject){
    var data = document.getElementsByClassName("checkbox");
    
    var count =0;
    for (var i=0; i<data.length; i++){
        if (data[i].checked == true){
            count++;
        }
        
    }
    if(count%5==0){
        resolve("Congrats.5 Tasks have been Successfully Completed.");
    }
    else{
        reject();
    }
})
promise
.then(function(tru){
    alert(tru);
})
.catch(function(){
    console.log(" select 5 tasks ");
});
}
