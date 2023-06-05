import Race from './Race';

class Orc extends Race {
  private _maxLifePoints = 74;
  private static _countInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._countInstance += 1;
  }

  static createdRacesInstances(): number {
    return Orc._countInstance;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;
