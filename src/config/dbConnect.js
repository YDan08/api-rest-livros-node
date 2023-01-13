import mongoose from "mongoose"
import env from "dotenv"
env.config()

mongoose.connect(process.env.CONEXAO_BANCO)

let db = mongoose.connection

export default db
