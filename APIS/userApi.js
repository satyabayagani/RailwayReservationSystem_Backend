const exp = require("express");
const userApi = exp.Router();
userApi.use(exp.json());
const { 
    createPool
}=require('mysql');
const { stringify } = require("querystring");
const pool =createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"dbshackathon",
    timezone: 'Z',
    connectionLimit:1

})

userApi.get('/gettraindetails',(req,res)=>{
    pool.query('select * from traindetails',(err,result,fields)=>{
        if(err){
            return console.log(err);
        }
     console.log({result})
    })
    res.send({message:result})
})





module.exports=userApi;