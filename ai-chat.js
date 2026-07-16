function sendMessage(){

let message=document.getElementById("userMessage").value;

if(message==""){

alert("Please enter a message");

return;

}

document.getElementById("chatOutput").innerHTML=

"<h2>🤖 AI Response</h2>" +

"<p>You asked: <b>"+message+"</b></p>" +

"<p>This is a demo response. In the final version, Gemini or OpenAI AI will answer your questions here.</p>";

}
