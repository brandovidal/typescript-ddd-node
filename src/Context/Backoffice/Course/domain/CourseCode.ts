import { StringValueObject } from '@Shared/domain/value-object/StringValueObject'

export class CourseCode extends StringValueObject {
  constructor (value: string) {
    const code = value.toLocaleUpperCase()
    super(code)
  }
}
