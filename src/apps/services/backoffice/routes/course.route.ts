import { Router } from 'express'
import type { Request, Response } from 'express'

import container from '../dependency-injection'

import CourseAllGetController from '../controllers/course/CourseAllGetController'
import CoursePostController from '../controllers/course/CoursePostController'
import CourseDeleteController from '../controllers/course/CourseDeleteController'

import validationRequestSchema from '@middlewares/validationRequestSchema'

import { createCourseSchema } from '@Context/Backoffice/Course/domain/schemas/createCourseSchema'
import { deleteCourseSchema } from '@Context/Backoffice/Course/domain/schemas/deleteCourseSchema'

const router = Router()

const courseGetController = container.resolve(CourseAllGetController)
router.get('/search', (req: Request, res: Response) => courseGetController.run(req, res))

const coursePostController = container.resolve(CoursePostController)
router.post('/', validationRequestSchema(createCourseSchema), (req: Request, res: Response) => coursePostController.run(req, res))

const courseDeleteController = container.resolve(CourseDeleteController)
router.delete('/:id', validationRequestSchema(deleteCourseSchema), (req: Request, res: Response) => courseDeleteController.run(req, res))

export default router
