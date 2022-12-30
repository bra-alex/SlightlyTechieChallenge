const express = require('express')

const mongoConnect = require('./utils/mongoose')
const postRouter = require('./routes/posts.route')

const app = express()

const PORT = 3000

app.use(express.json())

app.use(postRouter)

app.use((error, req, res, next) => {
    res.status(500).json({
        message: error.message
    })
})

async function startServer() {
    await mongoConnect()
    app.listen(PORT, () => console.log('Connected'));
}

startServer()