import { App } from '../../App'
import { AppContextEnum } from '../../AppContext'

import { Secret } from '@Shared/infraestructure/config/secrets'

export class BackofficeApp extends App {
  private readonly secret = Secret.env

  context (): string {
    return AppContextEnum.BACKOFFICE_CONTEXT
  }

  connectionUri (): string {
    const uri = this.secret.backofficeURI

    if (uri === undefined) {
      throw new Error('Backoffice DB connection URI is missing.')
    }
    return uri
  }
}
