import { ReviewModel } from "../models/review.js";

export const getAllReviews = async (req, res, next) => {
    try {
        const reviews = await ReviewModel.find()
        res.status(200).json({success:true,message:"Books retrieved successfully",data: reviews});
    } catch (error) {
        next(error)
    }
}
export const getOneReview = async (req, res, next) => {
    try {
        const getId = req.params.id;
        const reviewByid = await ReviewModel.findById(getId)
        if (!reviewByid) {
            return res.status(404).json({ success: false, message: 'Review not found'});
        }
        res.status(200).json({ success: true, message: 'Review Retrieved successfully', book: reviewByid })
    } catch (error) {
        next(error);
    }
}
export const addReview = async (req, res, next) => {
    try {
        await ReviewModel.create(req.body)
        res.status(200).json({ success: true, message: 'successfully'});
    } catch (error) {
        next(error)
    }
}
export const updateReview = async (req, res) => {
    try {
        const reviewid = req.params.id;
        const updatedData = req.body;
        const updatedBook = await ReviewModel.findByIdAndUpdate(reviewid, updatedData, { new: true })
        if (!updatedBook) {
            return res.status(404).json({ success: false, message: 'Book not found' });
        }
        res.status(200).json({ success: true, message: 'Book updated successfully', book: updatedBook });
    } catch (error) {
        next(error)
    }
}


export const deleteReview = async (req, res, next) => {
    try {
        const reviewid = req.params.id;
        const deletedBook = await ReviewModel.findByIdAndDelete(reviewid);
        if (!deletedBook) {
            return res.status(404).json({ success: false, message: 'Book not found' });
        }
        res.status(200).json({ success: true, message: 'Review deleted successfully' });
    } catch (error) {
        next(error)
    }
}
