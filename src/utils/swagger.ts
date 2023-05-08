import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'
import { Express, Request, Response } from 'express'
import { version } from '../../package.json'

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Slightly Techie Challenge Docs',
      version,
    },
  },
  apis: ['./src/docs/*.ts'],
}

const swaggerSpec = swaggerJSDoc(options)

export default function swaggerDocs(app: Express) {
  app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))
  app.get('/docs.json', (_req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  })
}
