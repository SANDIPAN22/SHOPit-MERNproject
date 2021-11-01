const mongoose= require('mongoose')
const productSchema= new mongoose.Schema({
    name: {
        type: String,
        required: [true, "product name is required"],
        trim: true,
        maxlength:[1000, "Product name can not exceed 100 chars."]
    },
    price:{
        type: Number,
        required: [true, "Price is required"],
        default: 0.0

    },
    description:{
        type: String,
        required:[true,'please enter the description']
    },
    ratings:{
        type: Number,
        default: 0

    },
    images: [
        {
            public_id:{
                type: String,
                required: true

            },
            url:{
                type: String,
                required: true
            } 
        }
    ],
    category: {
        type: String,
        required: [true,'please enter category'],
        enum: {
            values:[
                'electronics',
                'outfits',
                'vegitables',
                'books',
                'furniture',
                'stationaries',
                'sports',
                'food suppliments'
            ],
            message: "please select the proper category"
        }

    },
    seller:{
        type: String,
        required: [true, 'seller info is required']
    },
    stock:{
        type: Number,
        required: [true, 'Include updated stock.'],
        maxlength:[4, 'Max possible 4 chars'],
        default: 0
    },
    numOfReviews:{
        type: Number,
        default: 0
    },
    reviews: [
        {
            name:{
                type: String,
                required: true
            },
            rating:{
                type: Number,
                required: true,

            },
            comment:{
                type: String,
                required: true,
                maxlength: [200, "max limit 200 chars"]
            }
        }
    ],
    createdAt:{
        type: Date,
        default: Date.now
    }






})

module.exports=mongoose.model('Product',productSchema)