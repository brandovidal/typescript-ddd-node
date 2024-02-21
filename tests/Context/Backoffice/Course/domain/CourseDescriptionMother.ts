import { CourseDescription } from "src/Context/Backoffice/Course/domain/CourseDescription";
import { WordMother } from "tests/Context/Shared/domain/WordMother";

export class CourseDescriptionMother {
  static create (value: string) {
    return new CourseDescription(value)
  }

  static random () {
    return this.create(WordMother.random({ minLength: 5, maxLength: 150 }))
  }
}
