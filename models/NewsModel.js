import mongoose, { Schema } from "mongoose"

const schema = new mongoose.Schema({
    title : {
        type: String,
        require: true 
    },
    subTitle: {
        type: String,
        require: true
    },
    imageUrl: {
        type: String,
        require: true
    },
    tags: {
        type: String,
        require: true
    },
    
    urlNews: {
        type: String,
        require: true
    }
}, {timestamps: true})

export const NewsModel = mongoose.model("News", schema)