import type { Request, Response } from 'express'

import httpStatus from 'http-status'
import { injectable } from 'inversify'

import type { Controller } from '@Shared/domain/Controller'

@injectable()
export default class HealthCheckGetController implements Controller {
  async run (_req: Request, res: Response): Promise<void> {
    res.status(httpStatus.OK).send({
      success: true,
      message: 'Health check OK',
      data: []
    })
  }
}
