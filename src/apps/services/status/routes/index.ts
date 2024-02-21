import { Router } from 'express'

import statusRoutes from './status.route'

const router = Router()

router.use('/', statusRoutes)

export default router
