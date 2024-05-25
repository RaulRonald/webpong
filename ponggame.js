import { Player } from "./player.js";
import { Ball } from "./ball.js";
import { Enemy } from "./enemy.js";
export class Ponggame extends Phaser.Scene {
    constructor() {
        super({ key: 'ponggame' });
        this.pongplayer;
        this.cursors;
    }
    preload() {
        // Carrega a imagem do quadrado
        this.load.image('cube', 'assets/sprites/cube.png');
        this.load.image('bar', 'assets/sprites/bar.png');
    }

    create() {
        // Crie objetos do jogo aqui
        this.cursors = this.input.keyboard.createCursorKeys();
        //criando os objetos
        this.pongball = new Ball(this, this.game.config.width / 2, this.game.config.height / 2, 'cube', 0);
        this.pongplayer = new Player(this, 20, 100, 'bar', 0);
        this.pongenemy = new Enemy(this, this.game.config.width - 50, 100, 'bar', 0);
    }

    update() {
        this.pongplayer.update(this.pongball);
        this.pongenemy.update(this.pongball);
        this.pongball.update();
        if (this.pongball.x + this.pongball.width <= 0) {
            this.pongball.x = this.game.config.width / 2;
            this.pongball.y = this.game.config.height / 2;
            this.pongball.velocityx *= 0.5;
            this.pongball.velocityy *= 0.6;
        }
        if (this.pongball.x >= this.game.config.width) {
            this.pongball.x = this.game.config.width / 2;
            this.pongball.y = this.game.config.height / 2;
            this.pongball.velocityx *= 0.5;
            this.pongball.velocityy *= 0.6;
        }
    }
}
