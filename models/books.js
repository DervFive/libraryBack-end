import { Schema, model } from "mongoose";

const librarySchema = new Schema({
    title: {type: String},

    summary:{type: String 
             // required: true
           },

    cover: {type: String 
            // required: true
           },
    //content: {type: String, required: true},
    //"author": {type: Types.ObjectId, ref:"Author"}
});

export const Library = model ("library", librarySchema)