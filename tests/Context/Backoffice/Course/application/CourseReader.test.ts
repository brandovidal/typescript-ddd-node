import 'reflect-metadata'

import { CourseRepositoryMock } from '../__mocks__/CourseRepositoryMock'
import { CourseReader } from '@/Context/Backoffice/Course/application/CourseReader'

import { CourseMother } from '../domain/CourseMother'

let repository: CourseRepositoryMock
let creator: CourseReader

describe('CourseReader', () => {
  beforeAll(() => {
    repository = new CourseRepositoryMock()
    creator = new CourseReader(repository)
  })

  it('should return course', async () => {
    const course = CourseMother.random()

    const request = CourseMother.toRequest(course)

    await creator.run({ id: request.id })

    repository.assertGetHasBeenCalled()
  })
})
