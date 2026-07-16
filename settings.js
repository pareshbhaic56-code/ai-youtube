function saveSettings(){

let channel=document.getElementById("channel").value;

let language=document.getElementById("language").value;

let privacy=document.getElementById("privacy").value;

if(channel==""){

alert("Please Enter Channel Name");

return;

}

document.getElementById("status").innerHTML=

"<h2>✅ Settings Saved</h2>" +

"<p><b>Channel:</b> "+channel+"</p>" +

"<p><b>Language:</b> "+language+"</p>" +

"<p><b>Privacy:</b> "+privacy+"</p>";

}
