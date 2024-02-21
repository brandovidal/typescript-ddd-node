import type { Nullable } from '@/Context/Shared/domain/Nullable'
import type { Course } from './Course'

export interface CourseRepository {
  searchAll: () => Promise<Nullable<Course[]>>
  search?: (id?: string) => Promise<Nullable<Course>>
  save: (course: Course) => Promise<void>
  update?: (course: Course) => Promise<void>
  delete?: (id: string) => Promise<void>
}
