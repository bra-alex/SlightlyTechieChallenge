import { AnyZodObject } from 'zod'
import { NextFunction, Request, Response } from 'express'

const validateInput =
  (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      })
      return next()
    } catch (e: any) {
      console.error(e)

      return res.status(400).json(e.errors)
    }
  }

export default validateInput
