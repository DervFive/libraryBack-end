import { Schema, model, Types } from "mongoose";

const reviewSchema = new Schema({
    rating: { type: Number },
    comment: { type: String },
    book: { type: Types.ObjectId, ref: 'Book'},
},{timestamps:true})





export const ReviewModel = model('Review', reviewSchema)