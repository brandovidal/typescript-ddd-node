import { injectable } from 'inversify'
import { type FindOptions } from 'mongodb'

import { AppContextEnum } from '@apps/AppContext'

import { MongoRepository } from '@Shared/infraestructure/persistence/mongo/MongoRepository'

import { type CourseRepository } from '../../domain/CourseRepository'
import Helper from '@/Context/Shared/domain/Helper'

import { Course, type CourseDocument } from '../../domain/Course'
import { Nullable } from '@/Context/Shared/domain/Nullable'

@injectable()
export class MongoCourseRepository extends MongoRepository<Course, CourseDocument> implements CourseRepository {
  constructor () {
    super(AppContextEnum.BACKOFFICE_CONTEXT as string)
  }

  public async search (id?: string) {
    const query = { id }
    const options: FindOptions = { sort: { created_at: -1 } }
    const doc = await this.searchOneByFilters(query, options)
    return (Helper.isEmpty(doc)) ? null : Course.fromDocument(doc)
  }

  public async searchAll () {
    const query = { }

    const options: FindOptions = { sort: { created_at: -1 } }
    const docs = await this.searchByFilters(query, options)
    return docs.map(doc => Course.fromDocument(doc))
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
