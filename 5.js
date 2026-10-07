const fs=require("fs");
const file=fs.readFile("./emp/emp.txt",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data.toString())
    }
})
