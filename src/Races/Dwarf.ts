import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints = 80;
  private static _count = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._count += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf._count;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;
