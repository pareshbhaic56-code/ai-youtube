const express = require("express");

const router = express.Router();

router.get("/", (req,res)=>{

res.json({

message:"Welcome To AI YouTube Studio"

});

});

router.get("/status",(req,res)=>{

res.json({

status:"Running"

});

});

module.exports=router;
