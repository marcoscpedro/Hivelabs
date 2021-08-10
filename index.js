require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())
const routes = require("./src/routes/routes")

app.use("/hivelabs", routes)

app.listen(3030, () => {
    console.log(`Servidor rodando em http://localhost:3030`)
})