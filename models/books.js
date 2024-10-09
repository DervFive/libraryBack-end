import { Schema, model, Types } from "mongoose";

const librarySchema = new Schema({
  title: { type: String, required: true },

  //author: { type: Types.ObjectId, ref: "Author" },

  genre: { type: String, required: true },

  summary: {type: String, required: true},

  cover: {type: String, required: true},

  description: {type: String, required: true}, 

  language: {type: String, required: true},

  datePublished: {type: String, required: true}
});

export const Library = model("library", librarySchema);
