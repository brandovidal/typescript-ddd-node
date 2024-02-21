import { CourseCode } from "src/Context/Backoffice/Course/domain/CourseCode";
import { SlugMother } from "tests/Context/Shared/domain/SlugMother";

export class CourseCodeMother {
  static create (value: string) {
    return new CourseCode(value)
  }

  static random () {
    return this.create(SlugMother.random({ minLength: 1, maxLength: 3 }))
  }
}
