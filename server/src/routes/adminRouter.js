const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt=require('jsonwebtoken')
const checkAuth=require("../middleware/check-auth");
const book=require("../modals/bookdata")
const login=require("../modals/logindata")
const user=require("../modals/registerdata")
const complaint=require("../modals/complaintdata")

router.get('/view-users', (req, res) => {
    login.aggregate([
        {
          $lookup:
          {
            from:'register_tbs',
            localField:'_id',
            foreignField:'login_id',
                     
            as:"registerdetails"
          }
        },
        {
            $match:
            {
                role:2
            }
        }
       
    ]).then(function (data) {
            if (data == 0) {
                return res.status(401).json({
                    success: false,
                    error: true,
                    message: "No Data Found!"
                })
            }
            else {
                return res.status(200).json({
                    success: true,
                    error: false,
                    data: data
                })
            }
        })

})

router.get('/view-volunteers', (req, res) => {
    login.aggregate([
        {
          $lookup:
          {
            from:'volunteer_tbs',
            localField:'_id',
            foreignField:'login_id',
                     
            as:"registerdetails"
          }
        },
        {
            $match:
            {
                role:3
            }
        }
       
    ]).then(function (data) {
            if (data == 0) {
                return res.status(401).json({
                    success: false,
                    error: true,
                    message: "No Data Found!"
                })
            }
            else {
                return res.status(200).json({
                    success: true,
                    error: false,
                    data: data
                })
            }
        })

})


router.delete('/delete-user/:id', (req, res) => {
    const id = req.params.id   // login id 
    login.deleteOne({ _id: id }) .then(function () {
    user.deleteOne({ login_id: id })
        .then(function () {
            res.status(200).json({
                success: true,
                error: false,
                message: 'user deleted!'
            })
        })
    })
        .catch(err => {
            return res.status(401).json({
                message: "Something went Wrong!"
            })
        })
})

router.post('/approve/:id', (req, res) => {
    const id = req.params.id
    console.log(id);
    login.updateOne(  { _id:id} , { $set: { status : 1  } } ).then((user)=>{
        console.log(user);
        res.status(200).json({
            success:true,
            error:false,
            message:"approved"
        })
        
    }).catch(err => {
        return res.status(401).json({
            message: "Something went Wrong!"
        })
    })
 
})


router.get('/view-message', (req, res) => {
    complaint.find().then(function (data) {
            if (data == 0) {
                return res.status(401).json({
                    success: false,
                    error: true,
                    message: "No Data Found!"
                })
            }
            else {
                return res.status(200).json({
                    success: true,
                    error: false,
                    data: data
                })
            }
        })

})
module.exports=router;