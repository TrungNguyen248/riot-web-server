import { RiotForgeModel } from "../models/RiotForgeModel.js"

export const getRiotForge = async (req, res) => {
    try{
        let riot_forge_data = new RiotForgeModel({
            title: "Song Of Nunu",
            urlImg: "https://www.riotgames.com/darkroom/564/0bc3ca90fcd359c736f7b2dfdd591592:7f96cd14b7af00bd6a760a63f0a325fb/song-of-nunu-card-bg-1800.jpg",
            urlLogo: "https://www.riotgames.com/darkroom/350/d603dd152138eff2d5566023ca703971:c50a4d529d59a16d0189b1a9b959732f/songofnunu-logotype.png",
            platForm:[
                "windows",
                "nintendo",
                "playstation",
                "xbox"
            ]
        })
/*         riot_forge_data.save() */

        const riot_forge = await RiotForgeModel.find()
        res.status(200).json(riot_forge)
    }catch(err) {
          res.status(500).json(err)
    }
}