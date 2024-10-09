import Joi from "joi";
import mongoose from "mongoose";

// Validation schema using Joi
const reviewUpdateSchema=Joi.object({
    rating:Joi.number().max(5).required(),
    comment:Joi.string(),
    datecreated:Joi.date()
})

export const validteBookUpdate = (req,res,next)=>{
    const {error}=reviewUpdateSchema.validate(req.body)
    if (error) {
        return res.status(400).json({success: false,message:error.details[0].message})
    }
    next()
}


export const validteAddBook =(req,res,next)=>{
    const {error}=reviewUpdateSchema.validate(req.body);
    if (error) {
        return res.status(400).json({success:false,message:error.details[0].message})
    }
    next()
}

export const validateDelete = (req,res,next)=>{
    const deleteId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(deleteId)) {
        return res.status(400).json({success:false,message:'Invalid Review ID'})
    }
    next()
}




// export default validteBookUpdate;