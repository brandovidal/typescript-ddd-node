import { CourseCreatedAt } from "src/Context/Backoffice/Course/domain/CourseCreatedAt";
import { DateMother } from "tests/Context/Shared/domain/DateMother";

export class CourseCreatedAtMother {
  static create (value: Date) {
    return new CourseCreatedAt(value)
  }

  static random () {
    return this.create(DateMother.random())
  }
}
