import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _countDwarfInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.countDwarf();
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static countDwarf(): void {
    Dwarf._countDwarfInstances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf._countDwarfInstances;
  }
}