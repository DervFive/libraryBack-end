import express from "express";
import { booksRouter } from "./routes/books.js";
import mongoose from "mongoose";
import cors from "cors";
import 'dotenv/config'
import reviewRoute from "./routes/review.js";
import router from "./routes/author.js";
import userRouter from "./routes/users.js";



//  Create express app
const app = express();

// Use Middleware

app.use(cors());
app.use(express.json());

app.use(booksRouter,);
app.use(router);
app.use(reviewRoute);
app.use(userRouter)

try {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Database is connected");
} catch (error) {
 
}

const port = 3003;
app.listen(port, () => console.log(`app is listening on port 3003`));
