function generateVideo(){

let topic=document.getElementById("videoTopic").value;

if(topic==""){

alert("Please enter a video topic.");

return;

}

document.getElementById("videoOutput").innerHTML=

"<h2>🎥 Video Ready</h2>" +

"<p><b>Topic:</b> "+topic+"</p>" +

"<p>This is a demo preview. In the future, AI will automatically create a complete video for this topic.</p>";

}
