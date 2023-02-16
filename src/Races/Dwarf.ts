import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}