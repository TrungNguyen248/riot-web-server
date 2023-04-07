import { NewsModel } from "../models/NewsModel.js"

export const getNews = async (req, res) => {
    try{
        const news = await NewsModel.find().sort({createdAt : -1})
        res.status(200).json(news)
    }catch (err) {
        res.status(500).json(err)
    }
}