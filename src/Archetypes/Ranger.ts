import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static _countRangerInstances = 0;
  private _energyType: EnergyType;
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._countRangerInstances += 1;
  }

  public static createdArchetypeInstances(): number {
    return Ranger._countRangerInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}