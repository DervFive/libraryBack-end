import { ReviewModel } from "../models/review.js";

export const getAllReviews = async (req, res,next)=>{
    try {
        const reviews = await ReviewModel.find()
        res.status(200).json(reviews);
        console.log('All')
    } catch (error) {
        next(error)
    }
}
export const getOneReview =()=>{
    try {
        res.json();
    } catch (error) {
        
    }
}
export const  addReview = async (req,res,next)=>{
    try {
        await ReviewModel.create(req.body)
        res.status(201).json('Review is added');
    } catch (error) {
        next(error)
    }
}
export const updateReview =async (req,res)=>{
    try {
       
    } catch (error) {
        
    }
}
export const deleteReview = async (req,res,next)=>{
    try {
        const {id} = req.params;
        const index = await ReviewModel.findOneAndDelete(id);
        // if (index) {
        //     console.log(index)
        // }else{
        //     console.log('hii')
        // }

        res.json();
    } catch (error) {
        next(error)
    }
}