import { CourseStatus, CourseStatusType } from 'src/Context/Backoffice/Course/domain/CourseStatus'
import { EnumMother } from 'tests/Context/Shared/domain/EnumMother'

export class CourseStatusMother {
  static create (value: string) {
    return new CourseStatus(value)
  }

  static random () {
    return this.create(EnumMother.random(CourseStatusType))
  }

  static invalidStatus () {
    return this.create('INVALID')
  }
}
