import { CourseId } from './CourseId'
import { CourseName } from './CourseName'
import { CourseCode } from './CourseCode'
import { CourseDescription } from './CourseDescription'
import { CourseStatus } from './CourseStatus'
import { CourseCreatedAt } from './CourseCreatedAt'
import { CourseUpdatedAt } from './CourseUpdatedAt'

import { type Maybe } from '@Shared/domain/Maybe'

export interface CoursePrimitives {
  _id: string
  id: string
  name: string
  code: string
  description: Maybe<string>
  status: string
  created_at: Date
  updated_at: Date
}

export class Course {
  private readonly id!: CourseId

  private readonly name: CourseName
  private readonly code: CourseCode

  private readonly description: Maybe<CourseDescription>

  private readonly status: CourseStatus

  private readonly createdAt: CourseCreatedAt
  private readonly updatedAt: CourseUpdatedAt

  constructor (
    id: CourseId,
    name: CourseName,
    code: CourseCode,
    description: Maybe<CourseDescription>,
    status: CourseStatus,
    createdAt: CourseCreatedAt,
    updatedAt: CourseUpdatedAt
  ) {
    this.id = id
    this.name = name
    this.code = code
    this.description = description
    this.status = status
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }

  static create (id: string, name: string, code: string, description: Maybe<string>, status: string, createdAt: Date | string, updatedAt: Date | string) {
    return new Course(
      new CourseId(id),
      new CourseName(name),
      new CourseCode(code),
      description.map(description => new CourseDescription(description)),
      new CourseStatus(status),
      new CourseCreatedAt(createdAt),
      new CourseUpdatedAt(updatedAt)
    )
  }

  static fromPrimitives (primitives: CoursePrimitives) {
    return new Course(
      new CourseId(primitives.id),
      new CourseName(primitives.name),
      new CourseCode(primitives.code),
      primitives.description.map(description => new CourseDescription(description)),
      new CourseStatus(primitives.status),
      new CourseCreatedAt(primitives.created_at),
      new CourseCreatedAt(primitives.updated_at)
    )
  }

  toPrimitives () {
    return {
      id: this.id.value,
      name: this.name.value,
      code: this.code.value,
      description: this.description.toPrimitive()?.value,
      status: this.status.value,
      created_at: this.createdAt.value,
      updated_at: this.updatedAt.value
    }
  }
}
