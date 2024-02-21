import { MotherCreator } from "./MotherCreator";

export class EnumMother {
  static random (value: Record<string, string>) {
    return MotherCreator.random().helpers.enumValue(value)
  }
}
