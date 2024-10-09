import { Schema,model,Types } from "mongoose";

const reviewSchema = new Schema({
    rating:{type:Number},
    comment:{type:String},
    datecreated:{type:Date}
   // book:{type:Types.ObjectId,ref:'Book'},
})





export const ReviewModel =model('Review',reviewSchema)