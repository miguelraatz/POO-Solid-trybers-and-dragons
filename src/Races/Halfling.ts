import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints = 60;
  private static _countInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._countInstance += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._countInstance;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;
