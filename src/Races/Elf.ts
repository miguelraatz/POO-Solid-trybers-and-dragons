import Race from './Race';

class Elf extends Race {
  private _maxLifePoints = 99;
  private static _countInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._countInstance += 1;
  }

  static createdRacesInstances(): number {
    return Elf._countInstance;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;
