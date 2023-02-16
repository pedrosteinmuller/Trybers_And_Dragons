import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static _countHalflingInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.countHalfling();
  }

  static countHalfling(): void {
    Halfling._countHalflingInstances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._countHalflingInstances;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}