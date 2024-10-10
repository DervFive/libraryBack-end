import Joi from "joi";
import mongoose from "mongoose";

//validation schema using joi
const booksUpdateSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    genre: Joi.string().required(),
    summary: Joi.string().required(),
    cover: Joi.string().required(),
    description: Joi.string().required(),
    language: Joi.string().required(),
    datePublished: Joi.string().required()
})

export const validateBooksUpdate = (req, res, next) => {
  const { error } = booksUpdateSchema.validate(req.body);
  if (error) {
    return res.status(422).json({ success: false, message: error.details[0].message });
  }
  next();
};
export const validateBooksAdd = (req, res, next) => {
  const { error } = booksUpdateSchema.validate(req.body);
  if (error) {
    return res.status(422).json({ success: false, message: error.details[0].message });
  }
  next();
};