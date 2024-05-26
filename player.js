import { Ball } from "./ball.js";
export class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this); // Adiciona o sprite à cena
        this.setOrigin(0, 0);
        const up = document.getElementById('upbutton');
        const down = document.getElementById('downbutton');
        let intervalId;
        let ref = this;
        up.addEventListener('touchstart', function () {
            intervalId = setInterval(function () {
                ref.y -= 16;
            }, 100);
        });
        up.addEventListener('touchend', function () {
            // Para a repetição quando o botão "up" for solto
            clearInterval(intervalId);
        });
        down.addEventListener('touchstart', function () {
            intervalId = setInterval(function () {
                ref.y += 16;
            }, 100);
        });
        down.addEventListener('touchend', function () {
            // Para a repetição quando o botão "up" for solto
            clearInterval(intervalId);
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
        if (scene.cursors.up.isDown) {
            this.y -= 2;
        }
        if (scene.cursors.down.isDown) {
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
