import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private _playerOne: Fighter | Character,
    private _playerTwo: Fighter | Character,
  ) {
    super(_playerOne);
  }

  public fight(): number {
    const maxRounds = 10;
    for (let round = 1; round <= maxRounds; round += 1) {
      if (this._playerOne.lifePoints <= 0 || this._playerTwo.lifePoints <= 0) {
        break;
      }
      this._playerOne.attack(this._playerTwo);
      this._playerTwo.attack(this._playerOne);
    }
    return super.fight();
  }
}