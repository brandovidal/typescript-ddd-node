import { inject, injectable } from 'inversify'

import { Course } from '../domain/Course'
import { type CourseRepository } from '../domain/CourseRepository'

import { type Maybe } from '@Shared/domain/Maybe'

export interface CourseCreatorRequest {
  id: string
  name: string
  code: string
  description: Maybe<string>
  status: string
  created_at: Date | string
  updated_at: Date | string
}

@injectable()
export class CourseCreator {
  constructor (@inject('Backoffice.Course.domain.CourseRepository') private readonly repository: CourseRepository) {}

  async run (request: CourseCreatorRequest) {
    const course = Course.create(request.id, request.name, request.code, request.description, request.status, request.created_at, request.updated_at)

    await this.repository.save(course)
  }
}
