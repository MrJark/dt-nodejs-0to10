import 'dotenv/config'
import * as env from 'env-var' // para las validaciones

export const envs = {
  PORT: env.get( 'PORT' ).required().asPortNumber()
}