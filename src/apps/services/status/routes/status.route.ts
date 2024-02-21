import { Router } from 'express'
import type { Request, Response } from 'express'

import container from '../../backoffice/dependency-injection'

import HealthCheckGetController from '../controllers/HealthCheckGetController'

const router = Router()

const controller = container.resolve(HealthCheckGetController)
router.get('/status', (req: Request, res: Response) => controller.run(req, res))

router.get('/', (req: Request, res: Response) => controller.run(req, res))

export default router
