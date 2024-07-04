const Product = require("../models/product")

exports.getProductAll = async(req,res)=>{
    try {
        const data = await Product.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message:"server xetasi"})
    }

},
exports.getProductById = async (req,res)=>{
    const {id} = req.params
    try {
        const data = await Product.findById(id)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message:"server xetasi"})

    }

},
exports.createProduct =  async(req,res)=>{
    try {
        const data =  new  Product(req.body)
        const datas = await data.save();

      

        res.status(201).json(datas)
        console.log(datas);
    } catch (error) {

        
    }

},
exports.updateProduct = async(req,res)=>{
    const {id} = req.params
    const uptade = req.body
    try {
        const data = await Product.findByIdAndUpdate(id,uptade)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message:"server xetasi"})
    }
},
exports.deleteProduct = async(req,res)=>{
    const {id} = req.params
    try {
        const data = await Product.deleteOne({_id:id})  
        res.status(201).json("silindi")                                                                
    } catch (error) {
        res.status(500).json({message:"server error"})
    }

}