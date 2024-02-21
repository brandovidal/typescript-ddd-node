import type { Request, Response } from 'express'

import httpStatus from 'http-status'
import { inject, injectable } from 'inversify'

import type { Controller } from '@Shared/domain/Controller'
import { InvalidArgumentError } from '@Shared/domain/value-object/InvalidArgumentError'

import { CourseDeletor } from '@Context/Backoffice/Course/application/CourseDeletor'

interface CourseDeleteRequest extends Request {
  params: {
    id?: string
  }
}

@injectable()
export default class CourseDeleteController implements Controller {
  constructor (@inject('Backoffice.Course.application.CourseDeletor') private readonly deletor: CourseDeletor) {}

  async run (req: CourseDeleteRequest, res: Response): Promise<void> {
    try {
      const { id } = req.params

      await this.deletor.run({ id: id! })

      res.status(httpStatus.OK).send({
        success: true,
        message: 'Course deleted',
        data: [id]
      })
    } catch (err: unknown) {
      console.error('Error when to delete course', err)

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
          message: 'Error when to delete course',
          details: err
        }
      })
    }
  }
}
