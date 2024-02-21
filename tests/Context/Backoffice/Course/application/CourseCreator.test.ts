import 'reflect-metadata'

import { CourseRepositoryMock } from '../__mocks__/CourseRepositoryMock'
import { CourseCreator } from '@/Context/Backoffice/Course/application/CourseCreator'

import { CourseMother } from '../domain/CourseMother'

let repository: CourseRepositoryMock
let creator: CourseCreator

describe('CourseCreator', () => {
  beforeAll(() => {
    repository = new CourseRepositoryMock()
    creator = new CourseCreator(repository)
  })

  it('should create a valid course', async () => {
    const course = CourseMother.random()

    const request = CourseMother.toRequest(course)

    await creator.run(request)

    repository.assertSaveHasBeenCalledWith(course)
  })

  it('should throw an error when creating an invalid course name length is less than 5', async () => {
    expect(() => {
      const course = CourseMother.invalidName()

      const request = CourseMother.toRequest(course)

      creator.run(request)

      repository.assertSaveHasBeenCalledWith(course)
    }).toThrowError(/The course name .+ has less than 5 characters/)
  })

  it('should throw an error when creating an invalid course status', async () => {
    expect(() => {
      const course = CourseMother.invalidStatus()

      const request = CourseMother.toRequest(course)

      creator.run(request)

      repository.assertSaveHasBeenCalledWith(course)
    }).toThrowError(/The course status .+ is not valid/)
  })
})
