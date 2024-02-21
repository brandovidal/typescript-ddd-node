import type { Request, Response } from 'express'

import httpStatus from 'http-status'
import { inject, injectable } from 'inversify'

import type { Controller } from '@Shared/domain/Controller'

import { InvalidArgumentError } from '@Shared/domain/value-object/InvalidArgumentError'
import { Maybe } from '@Shared/domain/Maybe'

import { CourseCreator } from '@Context/Backoffice/Course/application/CourseCreator'

interface CoursePostRequest extends Request {
  body: {
    id: string
    name: string
    code: string
    description: string
    status: string
    created_at: string
    updated_at: string
  }
}

@injectable()
export default class CoursePostController implements Controller {
  constructor (@inject('Backoffice.Course.application.CourseCreator') private readonly creator: CourseCreator) {}

  async run (req: CoursePostRequest, res: Response): Promise<void> {
    try {
      const { id, name, code, description, status, created_at, updated_at } = req.body

      await this.creator.run({
        id,
        name,
        code,
        description: Maybe.fromValue(description),
        status,
        created_at,
        updated_at
      })

      res.status(httpStatus.CREATED).send({
        success: true,
        message: 'Course created',
        data: req.body
      })
    } catch (err: unknown) {
      console.error('Error when to create course', err)
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
          message: 'Error when to create course'
        }
      })
    }
  }
}
