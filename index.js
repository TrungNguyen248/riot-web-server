import express from "express"
import * as dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import news from "./routers/news.js"
import news_by_tag from "./routers/news_by_tag.js"
import riot_forge from "./routers/riot_forge.js"

const app = express()
const PORT = process.env.PORT
const URI = process.env.URI


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())


app.use("/news", news)
app.use("/news", news_by_tag)
app.use("/riot-forge", riot_forge)



mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connected to DB")
        app.listen(PORT, () => {
            console.log("Server is listening on port ", PORT)
        })
    }).catch((err) => {
        console.log(err)
    })


