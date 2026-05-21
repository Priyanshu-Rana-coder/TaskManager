
const express=require('express')
const app=express()
const tasks=require('./routes/tasks.js')
const connectDB=require('./db/connect.js')
require('dotenv').config()
const notFound=require('./middleware/notfound.js')
const errorHandlerMiddleware=require('./middleware/notfound.js')

//middleware
app.use(express.static('./public'))
app.use(express.json())






app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)
const port=3000



const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log("Server is listening"))
    } catch(error){
        console.log(error)
    }
}

start()