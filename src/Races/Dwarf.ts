import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints = 80;
  private static _countInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._countInstance += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf._countInstance;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;
