const express = require('express')

const mongoConnect = require('./utils/mongoose')
const postRouter = require('./routes/posts.route')

const app = express()

const PORT = 3000

app.use(express.json())

app.use(postRouter)

async function startServer() {
    await mongoConnect()
    app.listen(PORT, () => console.log('Connected'));
}

startServer()