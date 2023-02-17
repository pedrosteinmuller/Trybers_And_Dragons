import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player: Fighter;
  private _arrayMonster: (Monster | SimpleFighter)[];
  
  constructor(player: Fighter, arrayMonster: (Monster | SimpleFighter)[]) {
    super(player);
    this._player = player;
    this._arrayMonster = arrayMonster;
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