import 'reflect-metadata'

import { BackendApp } from 'src/apps/BackendApp'

let application: BackendApp

beforeAll(async () => {
  application = new BackendApp()
  await application.start()
})

afterAll(async () => {
  await application.stop()
})

export { application }
