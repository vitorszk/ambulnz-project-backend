import express, { Express } from "express"
import cors from "cors"
import dotenv from "dotenv"
import { apiRouter } from "./routes/apiRouter"

dotenv.config()

const app: Express = express()
app.use(express.json())
app.use(cors())

app.use("/api", apiRouter)

const PORT = process.env.PORT || 3003

app.listen(PORT, () => {
   console.log(`Server running at ${PORT}`)
})