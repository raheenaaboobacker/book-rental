const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const register = require('../modals/registerdata')
const login=require('../modals/logindata')
const jwt=require('jsonwebtoken')


router.post('/login',(req, res)=>{
    
    let fetchedUser
    login.findOne({username: req.body.username})
    .then((user)=>{
        console.log("logindata=>",user)
        if(!user){
            return res.status(401).json({
                success:false,
                error:true,
                message:"User Not Found!"
            })
        }
            fetchedUser = user
            return bcrypt.compare(req.body.password, user.password)      
    })
    .then(result=>{
        
        if(!result){
            return res.status(401).json({
                success:false,
                error:true,
                message:"Please Check Password!"
            })
        }
       
        if(fetchedUser.role===2){
           // console.log("role=>",fetchedUser.role);
           const token = jwt.sign(
            {username:fetchedUser.username, userId:fetchedUser._id, userRole:fetchedUser.role},
                "secret_this_should_be_longer",
                { expiresIn: "4h" }
            ) 
            res.status(200).json({
                success:true,
                error:false,
                token:token,
                loginId: fetchedUser._id,
                name: fetchedUser.username,
                role:fetchedUser.role
            })
        }
        // else if(fetchedUser.role===1){
        //    // console.log("role not=>",fetchedUser.role);
        //     id = fetchedUser._id
        //     drivers.findOne({login_id:id})
        //     .then((registerData)=>{  
                
        //         let status = registerData.status
        //         console.log(status);
        //         if(status!=1){
        //             return res.status(401).json({
        //                 success:false,
        //                 error:true,
        //                 message: "Waiting for admins approval",                        
        //             })
        //         }
        //         else{
                    
                   
        //             const token = jwt.sign(
        //                 {username:fetchedUser.username, userId:fetchedUser._id, userRole:fetchedUser.role},
        //                 "secret_this_should_be_longer",
        //                 { expiresIn: "1h" }
        //             )            
        //             res.status(200).json({
        //                 success:true,
        //                 error:false,
        //                 token:token,
        //                 loginId: fetchedUser._id,
        //                 role:fetchedUser.role,
        //                 name: registerData.name,
        //                 role:fetchedUser.role
        //             })
        //         }
               
        //     })
        // }
        // else if(fetchedUser.role===2){
        //     id = fetchedUser._id
        //     register.findOne({login_id:id})
        //     .then((registerData)=>{  
                
        //         let status = registerData.status
        //         console.log(status);
        //         if(status!=1){
        //             return res.status(401).json({
        //                 success:false,
        //                 error:true,
        //                 message: "Waiting for admins approval",                        
        //             })
        //         }
        //         else{
                    
                   
        //             const token = jwt.sign(
        //                 {username:fetchedUser.username, userId:fetchedUser._id, userRole:fetchedUser.role},
        //                 "secret_this_should_be_longer",
        //                 { expiresIn: "1h" }
        //             )            
        //             res.status(200).json({
        //                 success:true,
        //                 error:false,
        //                 token:token,
        //                 loginId: fetchedUser._id,
        //                 name: registerData.name,
        //                 role:fetchedUser.role
        //             })
        //         }
               
        //     })
        // }
        
 
    })
    // .catch(err=>{
    //     return res.status(401).json({
    //         message: "Auth failed",
    //         error: err
    //     })
    // })
})

module.exports = router;