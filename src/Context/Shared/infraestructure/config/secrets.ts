import { from } from 'env-var'

const env = from(process.env, {})

export class Secret {
  static get env () {
    return {
      nodeEnv: env.get('NODE_ENV').required().default('dev').asString(),
      port: env.get('PORT').required().default('5000').asString(),
      backofficeURI: env.get('BACKOFFICE_URI').required().asString()
    }
  }
}
