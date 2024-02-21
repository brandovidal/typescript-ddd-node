import { MotherCreator } from './MotherCreator'

export class SlugMother {
  static random ({ minLength = 1, maxLength }: { minLength?: number; maxLength: number }): string {
    return MotherCreator.random().lorem.slug({ min: minLength, max: maxLength })
  }
}
