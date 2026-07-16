function generateVoice(){

let text=document.getElementById("voiceText").value;

if(text==""){

alert("Please enter a script");

return;

}

document.getElementById("voiceOutput").innerHTML=

"<h2>🎤 AI Voice Ready</h2>" +

"<p>This is a demo version.</p>" +

"<p>Future version will generate realistic AI voice.</p>";

}
