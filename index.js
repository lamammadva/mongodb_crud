const express = require("express")
const app = express()
app.use(express.json())
require("dotenv").config()
const PORT = process.env.PORT
const dbConnection = require('./config/db')
const productRouter = require("./roots/product")
const categoryRouter = require("./roots/category")

app.use("/product",productRouter)
app.use("/category",categoryRouter)
//sql is connection 
dbConnection()


app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`);
})