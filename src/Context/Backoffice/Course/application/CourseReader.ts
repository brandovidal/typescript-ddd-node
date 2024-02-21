import { inject, injectable } from 'inversify'

import { type CourseRepository } from '../domain/CourseRepository'

export interface CourseReaderRequest {
  id: string
  name: string
  code: string
  description: string
  status: string
  created_at: Date
  updated_at: Date
}

@injectable()
export class CourseReader {
  constructor (@inject('Backoffice.Course.domain.CourseRepository') private readonly repository: CourseRepository) {}

  async run () {
    return await this.repository.searchAll()
  }
}
