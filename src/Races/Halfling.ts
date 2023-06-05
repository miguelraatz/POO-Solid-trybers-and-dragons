import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints = 60;
  private static _count = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._count += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._count;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;
