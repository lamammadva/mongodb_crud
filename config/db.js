const mongoose = require("mongoose")
require('dotenv').config
const dbConnection = async ()=>{
    try {
        await mongoose.connect(process.env.URL)
        console.log("db connection is successfull");
    } catch (error) {
        console.log("db connection is not successfull",error);
        
    }
}
module.exports = dbConnection