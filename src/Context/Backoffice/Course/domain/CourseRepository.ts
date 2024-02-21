import type { Course } from './Course'

export interface CourseRepository {
  searchAll: () => Promise<Course[]>
  search?: () => Promise<Course>
  save: (course: Course) => Promise<void>
  update?: (course: Course) => Promise<void>
  delete?: (id: string) => Promise<void>
}
