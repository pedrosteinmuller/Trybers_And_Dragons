import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static _countWarriorInstances = 0;
  private _energyType: EnergyType;
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior._countWarriorInstances += 1;
  }

  public static createdArchetypeInstances(): number {
    return Warrior._countWarriorInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}