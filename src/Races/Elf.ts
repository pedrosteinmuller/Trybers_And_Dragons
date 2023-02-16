import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  private static _countElfInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.countElf();
  }

  static countElf(): void {
    Elf._countElfInstances += 1;
  }

  static createdRacesInstances(): number {
    return Elf._countElfInstances;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}