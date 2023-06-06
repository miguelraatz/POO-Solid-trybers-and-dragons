import { SimpleFighter } from './Fighter';

abstract class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  receiveDamage(attackPoints: number): number {
    const damage = this._lifePoints - attackPoints;

    if (damage <= 0) {
      this._lifePoints = -1;
    } else {
      this._lifePoints = damage;
    }

    return this._lifePoints;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }
}

export default Monster;
