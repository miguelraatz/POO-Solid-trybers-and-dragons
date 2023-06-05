import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _type: EnergyType;
  private static _countInstance = 0;

  constructor(name: string) {
    super(name);
    this._type = 'mana';
    Necromancer._countInstance += 1;
  }

  get energyType(): EnergyType {
    return this._type;
  }

  static createdArchetypeInstances() {
    return Necromancer._countInstance;
  }
}

export default Necromancer;
