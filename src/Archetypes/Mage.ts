import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _countMageInstances = 0;
  private _energyType: EnergyType;
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._countMageInstances += 1;
  }

  public static createdArchetypeInstances(): number {
    return Mage._countMageInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}