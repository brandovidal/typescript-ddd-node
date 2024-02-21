/* eslint-disable @typescript-eslint/no-explicit-any */
import _snakeCase from 'just-snake-case'
import _isEmpty from 'just-is-empty'

export default class Helper {
  static snakeCase (value: string): string {
    return _snakeCase(value)
  }

  static isEmpty (value: any): boolean {
    if (typeof value === 'number') {
      return _isEmpty(String(value))
    }

    return _isEmpty(value)
  }
}
