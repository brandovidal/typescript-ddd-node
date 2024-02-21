import { StringValueObject } from '@Shared/domain/value-object/StringValueObject'
import { CourseNameLengthNeeded } from './errors/CourseNameLengthNeeded'

export class CourseName extends StringValueObject {
  constructor (value: string) {
    super(value)
    this.ensureLengthIsMoreThanFiveCharacters(value)
  }

  private ensureLengthIsMoreThanFiveCharacters (value: string): void {
    if (value.length < 5) {
      throw new CourseNameLengthNeeded(`The course name <${value}> has less than 5 characters`)
    }
  }
}
