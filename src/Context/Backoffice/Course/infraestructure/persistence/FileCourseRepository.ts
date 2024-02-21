import fs from 'fs'
import path from 'path'

import { Course, type CoursePrimitives } from '../../domain/Course'
import { type CourseRepository } from '../../domain/CourseRepository'

export class FileCourseRepository implements CourseRepository {
  private readonly FILE_PATH = path.join(__dirname, 'data')

  private fileNamePath (id: string) {
    return `${this.FILE_PATH}/${id}`
  }

  private filePath (id: string) {
    return `${this.fileNamePath(id)}.json`
  }

  async searchAll (): Promise<Course[]> {
    const filesPath = (await fs.promises.readdir(this.FILE_PATH, 'utf-8')).filter((file) => file.endsWith('.json'))

    let courses: Course[] = []
    for (const filePath of filesPath) {
      const item = await fs.promises.readFile(this.fileNamePath(filePath), 'utf-8')
      const courseData = JSON.parse(item) as unknown as CoursePrimitives
      const course = Course.fromPrimitives(courseData)
      courses = [...courses, course]
    }
    return courses
  }

  async save (course: Course) {
    const document = { ...course.toPrimitives() }
    void fs.promises.writeFile(this.filePath(document.id), JSON.stringify(document))
  }

  async delete (id: string) {
    void fs.promises.unlink(this.filePath(id))
  }
}
