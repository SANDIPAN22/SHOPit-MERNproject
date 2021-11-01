const db= require('../models/product')

exports.getProduct= async(req,res,next)=>{
try{    
    const products= await db.find().sort({createdAt:-1})
    res.status(200).json({
        'success': 200,
        'count': products.length,
        products
    })

}
catch(e){
    console.log(`error occured while fetching the data: ${e}`)
}

  }

// method (POST)  path api/v1/add/product
 exports.addProduct= async(req,res,next)=>{
     try{
    const product= await db.create(req.body)
    res.status(201).json({
        'success':true,
        product 
    })
    }
    catch(e){
        res.status(404).json({
            'success':false,
            "message": "error occured while inserting the data "+ e 
        })
    }
 }

 // method GET path: api/v1/get/oneproduct/:id
 exports.getoneproduct=async (req,res,next)=>
 {
     try{const details=await db.findById(req.params.id)
     if (details)
     {
        res.status(200).json({
            "success": true,
            details})
        

     }
    }
    catch(e){
        res.status(404).json({
            "success": false,
            "message": "No such product is available"
        })

    }
     

 }