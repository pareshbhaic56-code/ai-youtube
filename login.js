function loginUser(){

let email=document.getElementById("email").value;

let password=document.getElementById("password").value;

if(email=="" || password==""){

alert("Please Enter Email And Password");

return;

}

document.getElementById("loginStatus").innerHTML=

"<h2>✅ Login Successful</h2>" +

"<p>Welcome "+email+"</p>";

}
