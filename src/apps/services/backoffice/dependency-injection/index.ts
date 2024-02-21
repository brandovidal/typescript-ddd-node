import { Container } from 'inversify'

import HealthCheck from './HealthCheck'
import Course from './Course'

const container = Container.merge(HealthCheck, Course)

export default container
