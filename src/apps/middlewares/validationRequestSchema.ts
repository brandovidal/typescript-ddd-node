import type { NextFunction, Request, Response } from 'express'
import type { AnyZodObject } from 'zod'

import httpStatus from 'http-status'

const validationRequestSchema = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
  const result = schema.safeParse(req)

  if (!result.success) {
    const message = result.error.errors
    console.error('Validation error message', message)

    res.status(httpStatus.UNPROCESSABLE_ENTITY).send({
      success: false,
      message
    })
    return
  }

  next()
}

export default validationRequestSchema
