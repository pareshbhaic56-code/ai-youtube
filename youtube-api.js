const YouTubeAPI = {

apiKey: "YOUR_YOUTUBE_API_KEY",

channelId: "YOUR_CHANNEL_ID",

async uploadVideo(title, description){

return {
status: "Success",
message: "Demo Upload Complete",
title: title,
description: description
};

},

async getAnalytics(){

return {
views: 125430,
subscribers: 8250,
videos: 57
};

}

};
