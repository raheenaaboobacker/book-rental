const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt=require('jsonwebtoken')
const checkAuth=require("../middleware/check-auth");
const book=require("../modals/bookdata")
const category=require("../modals/categorydata")
const login=require("../modals/logindata")
const multer=require("multer")
var ObjectId = require('mongodb').ObjectID;

var storage=multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"../client/public/upload")
    },
    filename: function(req,file,cb){
        cb(null,req.body.name)
    }
})

var upload=multer({storage:storage})
router.post('/upload',upload.single("file"),(req,res)=>{
return res.json("file uploaded")
})

router.post('/add-category',((req,res)=>{
    console.log(req.body);
    var item = {
        category:req.body.category,
      
    }
    console.log(item);
    var products=category(item);
    products.save().then(()=>{
        res.status(200).json({
            success:true,
            error:false,
            message:'Category Added!'
        })
    })
    .catch(err=>{
        return res.status(401).json({
            message: "Something went wrong"
        })
    })
}))

router.get('/view-category', (req, res) => {
    category.find()
        .then(function (data) {
            if (data == 0) {
                return res.status(401).json({
                    success: false,
                    error: true,
                    message: "No Item Found!"
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

router.post('/addBook',checkAuth,((req,res)=>{
    console.log(req.body);
    var item = {
        login_id:req.userData.userId,
        category:req.body.category,
        title:req.body.title,
        author:req.body.author,
        price:req.body.price,
        publisher:req.body.publisher,
        pages:req.body.pages,
        desc:req.body.desc,
        language:req.body.language,
        image:req.body.image,
        pdf:"null",
        pdfprice:"null"
    }
    console.log(item);
    var products=book(item);
    products.save().then(()=>{
        res.status(200).json({
            success:true,
            error:false,
            message:'Book Added!'
        })
    })
    .catch(err=>{
        return res.status(401).json({
            message: "Auth failed.please login"
        })
    })
}))

router.get('/view-books', (req, res) => {
    book.find()
    .then(function (data) {
        if (data == 0) {
            return res.status(401).json({
                success: false,
                error: true,
                message: "No Item Found!"
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

router.get('/singleitem/:id',(req,res)=>{
    const id = req.params.id
    book.find({_id:id})
    .then((data)=>{
        res.status(200).json({
            success:true,
            error:false,
            data:data
        })   
     })
   
})


router.get('/view-user-books',checkAuth, (req, res) => {
    var id=req.userData.userId;
    login.aggregate([{
        $lookup:{
            from: "book_tbs",
            localField: "_id",
            foreignField: "login_id",
            as: "bookdata"
          }
    },
    {
        $unwind:'$bookdata'
    },  
    {
        $match:
        {
            _id:ObjectId(id)
        }
    }
     ])
     .then(function (data) {
        if (data == 0) {
            return res.status(401).json({
                success: false,
                error: true,
                message: "No Item Found!"
            })
        }
        else {
            return res.status(200).json({
                success: true,
                error: false,
                data: data
            })
        }
    })  .catch(err=>{
            return res.status(401).json({
                message: "Auth failed",
                error: err
            })
        })

})

router.post('/add-pdf/:id',((req,res)=>{
    console.log("data",req.params.id);
    
    book.updateOne( { _id:req.params.id} , { $set: { pdf : req.body.pdf ,pdfprice : req.body.pdfprice  }}).then(()=>{
        res.status(200).json({
            success:true,
            error:false,
            message:'Pdf Added!'
        })
    })
    .catch(err=>{
        return res.status(401).json({
            message: "Something went wrong"
        })
    })
}))
module.exports=router;