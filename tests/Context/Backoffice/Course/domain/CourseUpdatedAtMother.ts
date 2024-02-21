import { CourseUpdatedAt } from "src/Context/Backoffice/Course/domain/CourseUpdatedAt";
import { DateMother } from "tests/Context/Shared/domain/DateMother";

export class CourseUpdatedAtMother {
  static create (value: Date) {
    return new CourseUpdatedAt(value)
  }

  static random () {
    return this.create(DateMother.random())
  }
}
