"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Battle {
    constructor(player) {
        this.player = player;
    }
    // Should return 1 if player wins, -1 otherwise
    fight() {
        return this.player.lifePoints === -1 ? -1 : 1;
    }
}
exports.default = Battle;
