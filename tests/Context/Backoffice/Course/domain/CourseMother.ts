import { Course, CoursePrimitives } from 'src/Context/Backoffice/Course/domain/Course'
import { CourseCreatorRequest } from 'src/Context/Backoffice/Course/application/CourseCreator'

import { CourseId } from 'src/Context/Backoffice/Course/domain/CourseId'
import { CourseName } from 'src/Context/Backoffice/Course/domain/CourseName'
import { CourseCode } from 'src/Context/Backoffice/Course/domain/CourseCode'
import { CourseDescription } from 'src/Context/Backoffice/Course/domain/CourseDescription'
import { CourseStatus } from 'src/Context/Backoffice/Course/domain/CourseStatus'
import { CourseCreatedAt } from 'src/Context/Backoffice/Course/domain/CourseCreatedAt'
import { CourseUpdatedAt } from 'src/Context/Backoffice/Course/domain/CourseUpdatedAt'

import { CourseIdMother } from './CourseIdMother'
import { CourseNameMother } from './CourseNameMother'
import { CourseCodeMother } from './CourseCodeMother'
import { CourseDescriptionMother } from './CourseDescriptionMother'
import { CourseStatusMother } from './CourseStatusMother'
import { CourseCreatedAtMother } from './CourseCreatedAtMother'
import { CourseUpdatedAtMother } from './CourseUpdatedAtMother'

import { Maybe } from 'src/Context/Shared/domain/Maybe'

export class CourseMother {
  static create (
    id: CourseId,
    name: CourseName,
    code: CourseCode,
    description: Maybe<CourseDescription>,
    status: CourseStatus,
    createdAt: CourseCreatedAt,
    updatedAt: CourseUpdatedAt
  ) {
    const primitives: CoursePrimitives = {
      _id: id.value,
      id: id.value,
      name: name.value,
      code: code.value,
      description: description.map(description => description.value),
      status: status.value,
      created_at: createdAt.value,
      updated_at: updatedAt.value
    }
    return Course.fromPrimitives(primitives)
  }

  static random (): Course {
    return this.create(
      CourseIdMother.random(),
      CourseNameMother.random(),
      CourseCodeMother.random(),
      Maybe.some(CourseDescriptionMother.random()),
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
      Maybe.some(CourseDescriptionMother.random()),
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
      Maybe.some(CourseDescriptionMother.random()),
      CourseStatusMother.invalidStatus(),
      CourseCreatedAtMother.random(),
      CourseUpdatedAtMother.random()
    )
  }

  static toRequest (course: Course): CourseCreatorRequest {
    const primitives = course.toPrimitives()
    return {
      id: primitives.id,
      name: primitives.name,
      code: primitives.code,
      description: Maybe.fromValue(primitives.description),
      status: primitives.status,
      created_at: primitives.created_at,
      updated_at: primitives.updated_at
    }
  }

  static fromRequest (request: CourseCreatorRequest): Course {
    return this.create(
      new CourseId(request.id),
      new CourseName(request.name),
      new CourseCode(request.code),
      request.description.map(description => new CourseDescription(description)),
      new CourseStatus(request.status),
      new CourseCreatedAt(request.created_at),
      new CourseUpdatedAt(request.updated_at)
    )
  }
}
