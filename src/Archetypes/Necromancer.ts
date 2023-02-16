import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static _countNecromancerInstances = 0;
  private _energyType: EnergyType;
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._countNecromancerInstances += 1;
  }

  public static createdArchetypeInstances(): number {
    return Necromancer._countNecromancerInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}