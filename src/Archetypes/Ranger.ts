import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _type: EnergyType;
  private static _countInstance = 0;

  constructor(name: string) {
    super(name);
    this._type = 'stamina';
    Ranger._countInstance += 1;
  }

  get energyType(): EnergyType {
    return this._type;
  }

  static createdArchetypeInstances() {
    return Ranger._countInstance;
  }
}

export default Ranger;
