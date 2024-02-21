import { Container } from 'inversify'

import { MongoClientFactory } from '@Shared/infraestructure/persistence/mongo/MongoClientFactory'
import { MongoCourseRepository } from '@Backoffice/Course/infraestructure/persistence/MongoCourseRepository'

import { CourseReader } from '@Backoffice/Course/application/CourseReader'
import { CourseCreator } from '@Backoffice/Course/application/CourseCreator'
import { CourseDeletor } from '@Backoffice/Course/application/CourseDeletor'

import CourseAllGetController from '../controllers/course/CourseAllGetController'
import CoursePostController from '../controllers/course/CoursePostController'
import CourseDeleteController from '../controllers/course/CourseDeleteController'

const container = new Container()

container.bind(MongoClientFactory).toSelf()
container.bind('Backoffice.Course.domain.CourseRepository').to(MongoCourseRepository)

container.bind('Backoffice.Course.application.CourseReader').to(CourseReader)
container.bind(CourseAllGetController).toSelf()

container.bind('Backoffice.Course.application.CourseCreator').to(CourseCreator)
container.bind(CoursePostController).toSelf()

container.bind('Backoffice.Course.application.CourseDeletor').to(CourseDeletor)
container.bind(CourseDeleteController).toSelf()

export default container
