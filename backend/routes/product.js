const express=require('express')
const router=express.Router();
const { getProduct, addProduct, getoneproduct}=require('../controllers/productControllers')

router.get('/get/product',getProduct)

router.post('/add/product',addProduct)

router.get('/get/product/:id',getoneproduct)

module.exports=router