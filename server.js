import app from "./src/app.js"
import env from "dotenv"
env.config()
const port = process.env.PORT

app.listen(port, () => {
	console.log(`Servidor rodando em http://localhost:${port}`)
})
