const Database = {

user:{

channelName:"",
language:"English",
privacy:"Public"

},

saveSettings(data){

this.user=data;

return true;

},

loadSettings(){

return this.user;

}

};
