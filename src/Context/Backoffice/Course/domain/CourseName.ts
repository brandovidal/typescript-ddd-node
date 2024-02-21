import { StringValueObject } from '@Shared/domain/value-object/StringValueObject'
import { CourseNameLengthNeeded } from './errors/CourseNameLengthNeeded'
import { CourseNameLengthExceded } from './errors/CourseNameLengthExceded'

export class CourseName extends StringValueObject {
  constructor (value: string) {
    super(value)
    this.ensureLengthIsLessThanFiveNeeded(value)
    this.ensureLengthIsMoreThanOneHundredNeeded(value)
  }

  private ensureLengthIsLessThanFiveNeeded (value: string): void {
    if (value.length < 5) {
      throw new CourseNameLengthNeeded(`The course name <${value}> has less than 5 characters`)
    }
  }

  private ensureLengthIsMoreThanOneHundredNeeded (value: string): void {
    if (value.length > 100) {
      throw new CourseNameLengthExceded(`The course name <${value}> has more than 50 characters`)
    }
  }
}
