import { object, string, nativeEnum } from 'zod'

import { CourseStatusType } from '../CourseStatus'
import { CourseCreatedAt } from '../CourseCreatedAt'
import { CourseUpdatedAt } from '../CourseUpdatedAt'

const createCourseSchema = object({
  body: object({
    name: string({ required_error: 'name is required', invalid_type_error: 'name must be a string' })
      .min(5, 'name must be at least 5 characters long')
      .max(100, 'name must be at most 100 characters long'),
    code: string({ required_error: 'code is required', invalid_type_error: 'code must be a string' }).min(3, 'name must be at least 3 characters long'),
    status: nativeEnum(CourseStatusType),
    created_at: string({ required_error: 'created_at is required', invalid_type_error: 'created_at must be a string' })
      .regex(CourseCreatedAt.REGEX, {
        message: 'created_at must be a valid date'
      })
      .nullish(),
    updated_at: string({ required_error: 'updated_at is required', invalid_type_error: 'updated_at must be a string' })
      .regex(CourseUpdatedAt.REGEX, {
        message: 'updated_at must be a valid date'
      })
      .nullish()
  })
})

export { createCourseSchema }
