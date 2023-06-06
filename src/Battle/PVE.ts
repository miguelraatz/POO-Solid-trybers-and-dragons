import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _character: Fighter;
  private _monsters: Fighter[] | SimpleFighter[];

  constructor(character: Fighter, monster: Fighter[] | SimpleFighter[]) {
    super(character);
    this._character = character;
    this._monsters = monster;
  }

  fight(): number {
    while (!(this._character.lifePoints <= -1
      || this._monsters.every((monster) => monster.lifePoints <= -1))) {
      this._monsters.forEach((monster) => {
        this._character.attack(monster);
        monster.attack(this._character);
      });
    }
    return super.fight();
  }
}

export default PVE;
