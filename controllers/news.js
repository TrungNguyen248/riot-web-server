import { NewsModel } from "../models/NewsModel.js"

export const getNews = async (req, res) => {
    try{
        let news = new NewsModel({
            title: 'Building the Future of Sport at Riot Games',
            subTitle: "John Needham, President of Esports at Riot Games, lays out his game plan toward building a sustainable future for the esports industry",
            imageUrl: 'https://www.riotgames.com/darkroom/1000/592505fae56639af284572f290abbb6c:6cb1af3fcc39f7b7b837a024a6e441f0/rg-esports-johnneedham-one-shot-04-2023.png',
            tag: 'one-shot',
            urlNews: 'https://www.riotgames.com/en/news/building-the-future-of-sport-at-riot-games'
        })
        /* news.save() */
        const tag = req.query.q   
        if(tag) {
            const newsByTag = await NewsModel.find({tag: tag}).sort({createdAt : -1})
            res.status(200).json(newsByTag)
        }else {
            const news = await NewsModel.find().sort({createdAt : -1})
            res.status(200).json(news)
        }
    }catch (err) {
        res.status(500).json(err)
    }
}

