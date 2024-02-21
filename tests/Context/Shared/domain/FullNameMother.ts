import { MotherCreator } from './MotherCreator'

export class FullNameMother {
  static random ({ firstName, lastName, sex }: { firstName?: string; lastName?: string, sex?: 'male' | 'female' }): string {
    return MotherCreator.random().person.fullName({ firstName, lastName, sex })
  }
}
