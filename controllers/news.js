import { NewsModel } from "../models/NewsModel.js"

export const getNews = async (req, res) => {
    try{
        const tag = req.query.q   
        if(tag) {
            const newsByTag = await NewsModel.find({tag: tag})
            res.status(200).json(newsByTag)
        }else {
            const news = await NewsModel.find().sort({createdAt : -1})
            res.status(200).json(news)
        }
    }catch (err) {
        res.status(500).json(err)
    }
}

