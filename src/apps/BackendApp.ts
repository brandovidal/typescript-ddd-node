import { Server } from './server'
import type { App } from './App'

import { Secret } from '@Shared/infraestructure/config/secrets'

import { BackofficeApp } from './services/backoffice/BackofficeApp'

export class BackendApp {
  private readonly secret = Secret.env

  server!: Server
  static serviceApps: App[] = [new BackofficeApp()]

  async bootstrap () {
    this.server = new Server(this.secret.port)
    await this.startAllDatabaseConnections()
  }

  async start () {
    await this.bootstrap()

    const server = this.server
    if (server === undefined) {
      throw new Error('Server not bootstrapped.')
    }

    await server.listen()
  }

  get httpServer () {
    return this.server?.getHTTPServer()
  }

  get serverApp () {
    return this.server?.expressApp()
  }

  async stop () {
    await this.server?.stop()
  }

  private async startAllDatabaseConnections () {
    await this.startDatabaseConnection(...BackendApp.serviceApps)
  }

  private async startDatabaseConnection (...serviceApps: App[]) {
    const startConnectionPromises = serviceApps.map(app => app.startDbClient())
    await Promise.all(startConnectionPromises)
  }

  static async closeDatabaseConnections (...serviceApps: App[]) {
    const closeConnectionPromises = serviceApps.map(app => app.closeDbClient())
    await Promise.allSettled(closeConnectionPromises)
  }

  static async closeAllDatabaseConnections () {
    await BackendApp.closeDatabaseConnections(...BackendApp.serviceApps)
  }
}
