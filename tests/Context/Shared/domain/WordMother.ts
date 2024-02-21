import { MotherCreator } from './MotherCreator'

export class WordMother {
  static random ({ minLength = 1, maxLength = 100 }: { minLength: number; maxLength: number }): string {
    return MotherCreator.random().lorem.word({ length: { min: minLength, max: maxLength } })
  }
}
