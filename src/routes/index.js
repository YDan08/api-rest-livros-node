import express from "express"
import livros from "./livrosRoutes.js"
import autores from "./autorRoutes.js"
import editoras from "./editoraRoutes.js"

const routes = app => {
	app.route("/").get((req, res) => {
		res.status(200).send("Curso de node")
	})

	app.use(express.json(), livros, autores, editoras)
}

export default routes
