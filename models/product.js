    const mongoose = require("mongoose")

    const ProductSchema = new mongoose.Schema({
        title:{
            type:String,
            require:true,
        },
        description:{
            type:String,
        },
        category:
            {type:mongoose.Schema.Types.ObjectId,ref:"Category"}
        
    })
    module.exports = mongoose.model("Product",ProductSchema)