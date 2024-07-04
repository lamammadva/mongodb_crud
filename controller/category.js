const Category = require("../models/category")

exports.getCategoryAll = async(req,res)=>{
    try {
        const data = await Category.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message:"server xetasi"})
    }

},
exports.getCategoryById = async (req,res)=>{
    const {id} = req.params
    try {
        const data = await Category.findById(id)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message:"server xetasi"})

    }

},
exports.createCategory =  async(req,res)=>{
    try {
        const data =  new  Category(req.body
        )
        const datas = await data.save();

      

        res.status(201).json(datas)
        console.log(datas);
    } catch (error) {

        
    }

},
exports.updateCategory = async(req,res)=>{
    const {id} = req.params
    const {name} = req.body
    try {
        const data = await Category.findByIdAndUpdate(id,{name})
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message:"server xetasi"})
    }
},
exports.deleteCategory = async(req,res)=>{
    const {id} = req.params
    try {
        const data = await Category.deleteOne({_id:id})  
        res.status(201).json("silindi")                                                                
    } catch (error) {
        res.status(500).json({message:"server error"})
    }

}