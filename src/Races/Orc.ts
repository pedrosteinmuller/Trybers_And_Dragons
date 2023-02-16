import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  private static _countOrcsInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.countOrcs();
  }

  static countOrcs(): void {
    Orc._countOrcsInstances += 1;
  }

  static createdRacesInstances(): number {
    return Orc._countOrcsInstances;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}