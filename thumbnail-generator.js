function generateThumbnail(){

let topic=document.getElementById("thumbnailTopic").value;

if(topic==""){

alert("Please enter a topic");

return;

}

document.getElementById("thumbnailOutput").innerHTML=

"<h2>🖼 AI Thumbnail</h2>" +

"<p><b>Topic:</b> "+topic+"</p>" +

"<p>Future Version: AI will automatically create a professional YouTube thumbnail.</p>";

}
