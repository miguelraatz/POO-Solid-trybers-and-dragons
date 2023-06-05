import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _type: EnergyType;
  private static _countInstance = 0;

  constructor(name: string) {
    super(name);
    this._type = 'stamina';
    Warrior._countInstance += 1;
  }

  get energyType(): EnergyType {
    return this._type;
  }

  static createdArchetypeInstances() {
    return Warrior._countInstance;
  }
}

export default Warrior;
