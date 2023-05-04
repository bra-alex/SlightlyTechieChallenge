import dotenv from 'dotenv'
dotenv.config()

import express from 'express'

import postRouter from './routes/posts.routes'
import { mongoConnect } from './utils/mongoose'

const app = express()

app.use(express.json())

app.use(postRouter)

app.listen(3000, async () => {
  await mongoConnect()
  console.log('Connected')
})
