import { jwtDecode } from 'jwt-decode'
import jwtEncode from 'jwt-encode'

export default class Jwt {
  static simpleEncode (data: unknown, secret: string): string {
    return jwtEncode(data, secret)
  }

  static simpleDecode (token: string) {
    return jwtDecode(token)
  }
}
