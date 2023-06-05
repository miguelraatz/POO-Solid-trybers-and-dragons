import Race from './Race';

class Elf extends Race {
  private _maxLifePoints = 99;
  private static _count = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._count += 1;
  }

  static createdRacesInstances(): number {
    return Elf._count;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;
