import { CourseId } from 'src/Context/Backoffice/Course/domain/CourseId'
import { UuidMother } from 'tests/Context/Shared/domain/UuidMother'

export class CourseIdMother {
  static create (value: string) {
    return new CourseId(value)
  }

  static random () {
    return this.create(UuidMother.random())
  }
}
