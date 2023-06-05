import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _type: EnergyType;
  private static _countInstance = 0;

  constructor(name: string) {
    super(name);
    this._type = 'mana';
    Mage._countInstance += 1;
  }

  get energyType(): EnergyType {
    return this._type;
  }

  static createdArchetypeInstances() {
    return Mage._countInstance;
  }
}

export default Mage;
