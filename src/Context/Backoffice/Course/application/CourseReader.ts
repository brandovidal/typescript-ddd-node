import { inject, injectable } from 'inversify'

import { type CourseRepository } from '../domain/CourseRepository'

export interface CourseReaderRequest {
  id?: string
}

@injectable()
export class CourseReader {
  constructor (@inject('Backoffice.Course.domain.CourseRepository') private readonly repository: CourseRepository) {}

  async run (req: CourseReaderRequest) {
    const doc = await this.repository.search!(req.id)
    return doc?.toPrimitives()
  }
}
