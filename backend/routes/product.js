const express=require('express')
const router=express.Router();
const { getProduct}=require('../controllers/productControllers')

router.get('/list',getProduct)

// async (req,res)=>{

//     try{
//         res.status(200).json({
//             'message': "sandipan r purono technique!"
//         })
//     }
//     catch(err)
//     {
//         res.status(502)
//     }
    
//     }

module.exports=router