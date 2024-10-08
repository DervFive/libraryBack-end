import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import 'dotenv/config'
import reviewRoute from "./routes/review.js";

//  Create express app
const app = express()


// Use Middleware 
app.use(express.json())
app.use(cors())


app.use(reviewRoute)

try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Database is connected')
} catch (error) {
    console.log('Database failed')
    
}

const port = 3003
app.listen(port,() => console.log(`app is listening on port 3003`))