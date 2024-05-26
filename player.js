import { Ball } from "./ball.js";
export class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this); // Adiciona o sprite � cena
        this.setOrigin(0, 0);
        const up = document.getElementById('upbutton');
        const down = document.getElementById('downbutton');
        let ref = this;
        this.up = false;
        up.addEventListener('touchstart', function () {
            ref.up = true;
        });
        up.addEventListener('touchend', function () {
            ref.up = false;
        });
        down.addEventListener('touchstart', function () {
            ref.down = true;
        });
        down.addEventListener('touchend', function () {
            ref.down = false;
        });
    }
    update(ball) {
        //PLAYER CONFIGS
        const scene = this.scene;
        this.move(scene);
        //PLAYER COLISION
        this.col(ball);
    }
    move(scene) {
        if (scene.cursors.up.isDown || this.up == true) {
            this.y -= 2;
        }
        if (scene.cursors.down.isDown || this.down == true) {
            this.y += 2;
        }
        if (this.y <= 0) {
            this.y += 2;
        }
        if ((this.y + this.height) >= scene.game.config.height) {
            this.y -= 2;
        }
    }
    col(ball) {
        if ((ball.x <= this.x + this.width) &&
            (ball.x >= this.x + this.width / 2) &&
            (ball.y <= (this.y + this.height)) &&
            ((ball.y + ball.height) >= this.y)) {
            ball.velocityx *= -1;
            ball.velocityx += 0.5;
        }
    }
}
