class Database{
backend/ffmpeg-service.js
constructor(){

this.users=[];

}

saveUser(user){

this.users.push(user);

return true;

}

getUsers(){

return this.users;

}

}

module.exports=new Database();
