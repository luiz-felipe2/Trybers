import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

type Fighters = Fighter | SimpleFighter;

export default class PVE extends Battle {
  constructor(player: Fighter, private enemies: Fighters[]) {
    super(player);
  }

  miniFight(enemy: Fighters): number {
    while (this.player.lifePoints > -1) {
      this.player.attack(enemy);
      if (enemy.lifePoints === -1) {
        return 1;
      }
      enemy.attack(this.player);
    }
    return -1;
  }

  override fight(): number {
    const battles = this.enemies.map((enemy) => {
      const returnBattle = this.miniFight(enemy);
      return returnBattle;
    });
    return battles.includes(-1) ? -1 : 1;
  }
}