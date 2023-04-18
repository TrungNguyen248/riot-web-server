import { NewsModel } from "../models/NewsModel.js"

export const getNews = async (req, res) => {
    try{
        let news = new NewsModel({
            title: 'Looking Back on Women’s History Month 2023',
            subTitle: "We celebrated Women’s History Month by hosting panels with women leaders, holding events to bring people together, and sharing women’s stories across Riot. ",
            imageUrl: 'https://www.riotgames.com/darkroom/1000/0246c326644245311cf3b613c9d359b2:42ef0bf6eaa87379154e7d4725d2608a/2023-whm-recaparticle.png',
            tag: 'inside riot',
            urlNews: 'https://www.riotgames.com/en/news/womens-history-month-riot-rad-2023'
        })
        /* news.save() */
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

