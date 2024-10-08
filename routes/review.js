import { Router } from "express";
import { getAllReviews,updateReview,deleteReview,getOneReview,addReview } from "../controllers/review.js";

const reviewRoute = Router();

reviewRoute.post('/reviews',addReview);

reviewRoute.get('/reviews',getAllReviews);

reviewRoute.get('/review/:id',getOneReview);

reviewRoute.patch('/reviews/:id',updateReview);

reviewRoute.delete('/reviews/:id',deleteReview);



export default reviewRoute;
