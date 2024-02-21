import { vi, Mock } from 'vitest'

import { Course } from 'src/Context/Backoffice/Course/domain/Course'
import { CourseRepository } from 'src/Context/Backoffice/Course/domain/CourseRepository'

export class CourseRepositoryMock implements CourseRepository {
  private searchAllMock: Mock
  private searchMock: Mock
  private saveMock: Mock

  constructor () {
    this.searchAllMock = vi.fn()
    this.searchMock = vi.fn()
    this.saveMock = vi.fn()
  }

  async search (id: string) {
    return await this.searchMock(id)
  }

  async searchAll () {
    return await this.searchAllMock()
  }

  async save (course: Course) {
    this.saveMock(course)
  }

  assertGetHasBeenCalled () {
    expect(this.searchMock).toHaveBeenCalled()
  }

  assertGetAllHasBeenCalled () {
    expect(this.searchAllMock).toHaveBeenCalled()
  }

  assertSaveHasBeenCalledWith (course: Course) {
    expect(this.saveMock).toHaveBeenCalledWith(course)
  }
}
