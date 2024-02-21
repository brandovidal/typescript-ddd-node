/* eslint-disable @typescript-eslint/space-before-function-paren */
import { MongoClientFactory } from '@Shared/infraestructure/persistence/mongo/MongoClientFactory'

export abstract class App {
  abstract context(): string
  abstract connectionUri(): string

  async startDbClient (): Promise<void> {
    await MongoClientFactory.createClient(this.context(), { url: this.connectionUri() })
  }

  async closeDbClient (): Promise<void> {
    await MongoClientFactory.closeClientConnection(this.context())
  }
}
