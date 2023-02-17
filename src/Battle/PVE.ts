import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _player: Character | Fighter,
    private _arrayMonster: (Fighter | SimpleFighter | Monster | Character)[],
  ) {
    super(_player);
  }

  private attackMonsters(): void {
    this._arrayMonster.forEach((enemy) => {
      this._player.attack(enemy);
      if (enemy.lifePoints > 0) {
        enemy.attack(this._player);
      }
    });
  }

  private shouldContinue(): boolean {
    return this._player.lifePoints > 0 && this._arrayMonster.length > 0;
  }

  public fight(): number {
    while (this.shouldContinue() && this._arrayMonster.length > 0) {
      this._arrayMonster = this._arrayMonster
        .filter((enemy) => enemy.lifePoints > 0);
      if (this._arrayMonster.length > 0) {
        this.attackMonsters();
      }
    }
    return super.fight();
  }
}