import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    urlImg: {
        type: String,
        require: true
    },
    urlLogo: {
        type: String,
        require: true
    },
    platForm: {
        type:[String],
        default: []
    }
    })

export const RiotForgeModel = mongoose.model("RiotForge", schema)