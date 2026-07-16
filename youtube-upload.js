function uploadVideo(){

let title=document.getElementById("videoTitle").value;

let description=document.getElementById("videoDescription").value;

if(title=="" || description==""){

alert("Please enter title and description");

return;

}

document.getElementById("uploadStatus").innerHTML=

"<h2>✅ Upload Ready</h2>" +

"<p><b>Title:</b> "+title+"</p>" +

"<p><b>Description:</b> "+description+"</p>" +

"<p>This is a demo version. In the final version, videos will be uploaded using the YouTube Data API after you sign in and authorize your YouTube account.</p>";

}
