import { CourseName } from "src/Context/Backoffice/Course/domain/CourseName";
import { WordMother } from "tests/Context/Shared/domain/WordMother";

export class CourseNameMother {
  static create (value: string) {
    return new CourseName(value)
  }

  static random () {
    return this.create(WordMother.random({ minLength: 5, maxLength: 50 }))
  }

  static invalidName () {
    return this.create(WordMother.random({ minLength: 0, maxLength: 4 }))
  }
}
