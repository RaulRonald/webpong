import { Ball } from "./ball.js";
export class Enemy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this); // Adiciona o sprite à cena
        this.setOrigin(0, 0);
        this.velocityy = 2;
    }
    update(ball) {
        //PLAYER CONFIGS
        const scene = this.scene;
        this.move(scene,ball);
        //PLAYER COLISION
        this.col(ball);
    }
    move(scene,ball) {
        //ENEMY CONFIG
        if (this.y <= 0) {
            this.y += 1;
        }
        if ((this.y + this.height) >= scene.game.config.height) {
            this.y -= 1;
        }
        if (ball.y <= this.y + this.height) {
           this.y -= this.velocityy;
        }
        if (ball.y >= this.y) {
           this.y += this.velocityy;
        }
    }
    col(ball) {
        //ENEMY COLISION
        if ((ball.x + ball.width >= this.x) &&
            (ball.x + ball.width <= this.x + this.width / 2) &&
            (ball.y <= (this.y + this.height)) &&
            ((ball.y + ball.height) >= this.y)) {
            ball.velocityx *= -1;
            ball.velocityx -= 0.5;
        }
    }
}
