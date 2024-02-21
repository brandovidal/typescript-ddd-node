import { MotherCreator } from './MotherCreator'

export class UsernameMother {
  static random ({ firstName, lastName }: { firstName?: string; lastName?: string }): string {
    return MotherCreator.random().internet.userName({ firstName, lastName })
  }
}
