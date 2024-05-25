import { Mainmenu } from "./mainmenu.js";
import { Ponggame } from "./ponggame.js";
// definição da tela do jogo
var config = {
    type: Phaser.AUTO,
    width: 600,
    height: 300,
    parent: document.querySelector('.game-container'), 
    scene: null,
    player_name : null
};
//aderindo a tela ao jogo
export var game = new Phaser.Game(config);
//adicionando cenas ao game
game.scene.add('mainmenu', new Mainmenu());
game.scene.add('ponggame', new Ponggame());
//iniciandio a primeira cena
game.scene.start('mainmenu');
