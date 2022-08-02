const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt=require('jsonwebtoken')
const checkAuth=require("../middleware/check-auth");
const book=require("../modals/bookdata")
const multer=require("multer")

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
router.post('/addBook',checkAuth,((req,res)=>{
    console.log(req.body);
    var item = {
        login_id:req.userData.userId,
        cat_id:req.body.category,
        title:req.body.title,
        author:req.body.author,
        price:req.body.price,
        publisher:req.body.publisher,
        pages:req.body.pages,
        desc:req.body.desc,
        language:req.body.language,
        image:req.body.image,
       
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
module.exports=router;