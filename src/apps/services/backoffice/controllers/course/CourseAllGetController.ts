import type { Request, Response } from 'express'

import httpStatus from 'http-status'
import { inject, injectable } from 'inversify'

import type { Controller } from '@Shared/domain/Controller'
import { InvalidArgumentError } from '@Shared/domain/value-object/InvalidArgumentError'

import { CourseReader } from '@Context/Backoffice/Course/application/CourseReader'

export interface CourseReaderRequest extends Request {
  query: {
    id?: string
  }
}

@injectable()
export default class CourseAllGetController implements Controller {
  constructor (@inject('Backoffice.Course.application.CourseReader') private readonly reader: CourseReader) {}

  async run (req: CourseReaderRequest, res: Response): Promise<void> {
    try {
      const id = req.query.id!
      console.log('🚀 ~ CourseAllGetController ~ run ~ id:', id)
      const data = await this.reader.run({ id })

      res.status(httpStatus.OK).send({
        success: true,
        message: 'List all courses',
        data
      })
    } catch (err: unknown) {
      console.error('Error when to get courses all', err)
      if (err instanceof InvalidArgumentError) {
        res.status(httpStatus.BAD_REQUEST).send({
          success: false,
          error: {
            message: err.message
          }
        })
        return
      }

      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        success: false,
        error: {
          message: 'Error when to list course'
        }
      })
    }
  }
}
