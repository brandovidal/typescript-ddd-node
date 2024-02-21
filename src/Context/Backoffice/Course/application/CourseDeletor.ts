import { inject, injectable } from 'inversify'

import { type CourseRepository } from '../domain/CourseRepository'

export interface CourseDeletorRequest {
  id: string
}

@injectable()
export class CourseDeletor {
  constructor (@inject('Backoffice.Course.domain.CourseRepository') private readonly repository: CourseRepository) {}

  async run (request: CourseDeletorRequest) {
    await this.repository.delete!(request.id)
  }
}
