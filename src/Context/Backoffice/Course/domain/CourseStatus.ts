import { StringValueObject } from '@Shared/domain/value-object/StringValueObject'
import { CourseStatusInvalid } from './errors/CourseStatusInvalid'

export type CourseStatusValue = 'ACTIVE' | 'INACTIVE' | 'DELETED'
export enum CourseStatusType {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  DELETED = 'DELETED'
}

export class CourseStatus extends StringValueObject {
  constructor (value: string) {
    super(value)
    this.ensureIsValidStatus(value)
  }

  private ensureIsValidStatus (value: string): void {
    if (CourseStatusType[value as CourseStatusValue] === undefined) {
      throw new CourseStatusInvalid(`The course status ${value} is not valid`)
    }
  }
}
