import { CourseId } from 'src/Context/Backoffice/Course/domain/CourseId'
import { CourseName } from 'src/Context/Backoffice/Course/domain/CourseName'
import { CourseCode } from 'src/Context/Backoffice/Course/domain/CourseCode'
import { CourseDescription } from 'src/Context/Backoffice/Course/domain/CourseDescription'
import { CourseStatus } from 'src/Context/Backoffice/Course/domain/CourseStatus'
import { CourseCreatedAt } from 'src/Context/Backoffice/Course/domain/CourseCreatedAt'
import { CourseUpdatedAt } from 'src/Context/Backoffice/Course/domain/CourseUpdatedAt'

import { CourseIdMother } from '../domain/CourseIdMother'
import { CourseNameMother } from '../domain/CourseNameMother'
import { CourseCodeMother } from '../domain/CourseCodeMother'
import { CourseDescriptionMother } from '../domain/CourseDescriptionMother'
import { CourseStatusMother } from '../domain/CourseStatusMother'
import { CourseCreatedAtMother } from '../domain/CourseCreatedAtMother'
import { CourseUpdatedAtMother } from '../domain/CourseUpdatedAtMother'

export class CreateCourseRequestMother {
  static create (
    id: CourseId,
    name: CourseName,
    code: CourseCode,
    description: CourseDescription,
    status: CourseStatus,
    createdAt: CourseCreatedAt,
    updatedAt: CourseUpdatedAt
  ) {
    return {
      id: id.value,
      name: name.value,
      code: code.value,
      description: description.value,
      status: status.value,
      created_at: createdAt.value,
      updated_at: updatedAt.value
    }
  }

  static random () {
    return this.create(
      CourseIdMother.random(),
      CourseNameMother.random(),
      CourseCodeMother.random(),
      CourseDescriptionMother.random(),
      CourseStatusMother.random(),
      CourseCreatedAtMother.random(),
      CourseUpdatedAtMother.random()
    )
  }

  static invalidName () {
    return this.create(
      CourseIdMother.random(),
      CourseNameMother.invalidName(),
      CourseCodeMother.random(),
      CourseDescriptionMother.random(),
      CourseStatusMother.random(),
      CourseCreatedAtMother.random(),
      CourseUpdatedAtMother.random()
    )
  }
  static invalidStatus () {
    return this.create(
      CourseIdMother.random(),
      CourseNameMother.random(),
      CourseCodeMother.random(),
      CourseDescriptionMother.random(),
      CourseStatusMother.invalidStatus(),
      CourseCreatedAtMother.random(),
      CourseUpdatedAtMother.random()
    )
  }
}
