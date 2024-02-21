import { FileCourseRepository } from '@/Context/Backoffice/Course/infraestructure/persistence/FileCourseRepository'

import { CourseMother } from '../../domain/CourseMother'
import { CourseId } from '@/Context/Backoffice/Course/domain/CourseId'

const id = CourseId.random().value

describe('Save Course', () => {
  it('should save a Course', async () => {
    const repository = new FileCourseRepository()

    const random = CourseMother.random()

    const request = CourseMother.toRequest(random)

    const course = CourseMother.fromRequest({ ...request, id })

    await repository.save(course)
  })
})

afterAll(async () => {
  const repository = new FileCourseRepository()
  await repository.delete(id)
})
