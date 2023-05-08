import dotenv from 'dotenv'
dotenv.config()

import express, { Request, Response } from 'express'

import swaggerDocs from './utils/swagger'
import postRouter from './routes/posts.routes'
import { mongoConnect } from './utils/mongoose'

const app = express()

app.use(express.json())

app.use(postRouter)

app.use('/', (_req: Request, res: Response) => {
  res.redirect('docs')
})

app.get('/healthcare', (_req: Request, res: Response) => res.sendStatus(200))

app.listen(3000, async () => {
  await mongoConnect()
  console.log('Connected')
  swaggerDocs(app)
})
