import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _playerOne: Fighter;
  private _playerTwo: Fighter;

  constructor(playerOne: Fighter, playerTwo: Fighter) {
    super(playerOne);
    this._playerOne = playerOne;
    this._playerTwo = playerTwo;
  }

  public fight(): number {
    while (this._playerOne.lifePoints > 0 && this._playerTwo.lifePoints > 0) {
      this._playerOne.attack(this._playerTwo);
      if (this._playerTwo.lifePoints === 0) break;
      this._playerTwo.attack(this._playerOne);
    }
    return super.fight();
  }
}