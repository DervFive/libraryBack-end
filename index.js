import express from "express";
import mongoose from "mongoose";
import 'dotenv/config'


const app = express()


try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Database is connected')
} catch (error) {
    next(error)
    
}

const port = 3003
app.listen(port,() => console.log(`app is listening on port 3003`))