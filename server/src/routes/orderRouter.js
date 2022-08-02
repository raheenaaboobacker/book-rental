const express = require('express');
const router = express.Router();
const cart=require("../modals/cartdata")
const order = require('../modals/orderdata')
const checkAuth=require("../middleware/check-auth");
var ObjectId = require('mongodb').ObjectID;


router.post('/orderbook',checkAuth,(req, res)=>{
    console.log(req.body);
   console.log(req.userData.userId);
   cart.find({login_id:req.userData.userId})
   .then(result=>{
    let cartdata=result
    console.log(cartdata);
    cart.deleteMany({login_id:req.userData.userId})
    .then(data=>{
        console.log(data);
           var item={
            login_id:req.userData.userId,
            bookdata:cartdata,
            address:req.body,
            date : new Date().toDateString(),
            orderstatus:"ordered",


        }
        console.log(item);
        var books=order(item);
        books.save().then(()=>{
            res.status(200).json({
                success:true,
                error:false,
                message:'Ordered!'
            })
        })
    })
   })

})

router.get('/viewOrderItems',checkAuth, (req, res) => {
    var id=req.userData.userId;
    order.aggregate([{
        $lookup: {
            from: 'book_tbs',
            localField: 'bookdata.book_id',
            foreignField: '_id',
            as: 'orderBookData'
        }
    },
    {
        $unwind:'$orderBookData'
    },  
    {
        $match:
        {
            login_id:ObjectId(id)
        }
    }
     ])
        .then(function (data) {
            console.log(data);
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
module.exports = router;