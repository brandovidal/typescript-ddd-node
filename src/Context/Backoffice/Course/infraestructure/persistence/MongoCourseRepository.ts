import { injectable } from 'inversify'
import { type FindOptions } from 'mongodb'

import { type Course } from '../../domain/Course'
import { type CourseRepository } from '../../domain/CourseRepository'

import { MongoRepository } from '@Shared/infraestructure/persistence/mongo/MongoRepository'

import { AppContextEnum } from '@apps/AppContext'

interface CourseDocument {
  _id: string
  id: string
  name: string
  code: string
  description: string
  status: string
  created_at: Date
  updated_at: Date
}

@injectable()
export class MongoCourseRepository extends MongoRepository<Course, CourseDocument> implements CourseRepository {
  constructor () {
    super(AppContextEnum.BACKOFFICE_CONTEXT as string)
  }

  public async searchAll (): Promise<Course[]> {
    const query = {}
    const options: FindOptions = { sort: { created_at: -1 } }
    return await this.searchByFilters(query, options)
  }

  public save (course: Course): Promise<void> {
    return this.persist(course)
  }

  public async update (course: Course): Promise<void> {
    const repository = await this.collection()

    const courseFormatted = course.toPrimitives()
    const courseData = {
      name: courseFormatted.name,
      code: courseFormatted.code,
      status: courseFormatted.status,
      updated_at: courseFormatted.updated_at
    }

    const query = { id: courseFormatted.id }

    await repository.findOneAndUpdate(query, { $set: courseData })
  }

  public async delete (id: string): Promise<void> {
    const repository = await this.collection()

    await repository.deleteOne({ id })
  }

  protected collectionName (): string {
    return 'courses'
  }
}
