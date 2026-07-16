class GeminiService{

async generateScript(topic){

return{

success:true,

topic:topic,

script:"This is a demo AI script for "+topic

};

}

async generateTitle(topic){

return "Best "+topic+" Tutorial";

}

async generateDescription(topic){

return "Learn everything about "+topic+" in this video.";

}

}

module.exports=new GeminiService();
