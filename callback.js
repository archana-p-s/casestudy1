let password=document.getElementById("password");
let uname=document.getElementById("uname");
let euname=document.getElementById("euname");
let epassword=document.getElementById("epassword");
//for validating username

function uvalid()
{
if(uname.value!="admin")
{
    euname.innerHTML="Invalid!";
    euname.style.color="red";
    return false;
}
else 
{
    euname.innerHTML="Valid!";
    euname.style.color="green";
    return true;
}
}
//for validating password
function pvalid()
{

    if(password.value!="12345")
{
    epassword.innerHTML="Invalid!";
    epassword.style.color="red";
    return false;
}
else 
{
    epassword.innerHTML="Valid!";
    epassword.style.color="green";
    return true;
}
}
function callbackfn(un,pass,uvalid,pvalid)
{
    var un=uvalid(un);
    var pass=pvalid(pass);

//alert(un);

if(un && pass)
{
    
    window.location="main.html";
    return false;
}
}
function valid(){
   // function call

return callbackfn(uname.value, password.value, uvalid,pvalid);

}