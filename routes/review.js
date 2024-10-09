import { Router } from "express";
import { getAllReviews,updateReview,deleteReview,getOneReview,addReview } from "../controllers/review.js";
import { validateDelete, validteAddBook, validteBookUpdate } from "../middlewares/reviewMiddleware.js";


const reviewRoute = Router();

reviewRoute.post('/reviews',validteBookUpdate, addReview);

reviewRoute.get('/reviews',getAllReviews);

reviewRoute.get('/review/:id',getOneReview);

reviewRoute.patch('/reviews/:id',validteAddBook, updateReview);

reviewRoute.delete('/reviews/:id',validateDelete, deleteReview);



export default reviewRoute;
