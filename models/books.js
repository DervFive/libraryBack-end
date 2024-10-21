import { Schema, model, Types } from "mongoose";

const BookSchema = new Schema({
  title: { type: String},

  author: { type: Types.ObjectId, ref: "Author" },

  genre: { type: String},

  summary: {type: String},

  cover: {type: String},

  description: {type: String}, 

  language: {type: String},

  datePublished: {type: String}
});

export const Books = model("Book", BookSchema);
