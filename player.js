import { Ball } from "./ball.js";
export class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this); // Adiciona o sprite à cena
        this.setOrigin(0, 0);
        const up = document.getElementById('upbutton');
        const down = document.getElementById('downbutton');
        let ref = this;
        this.up = false;
        const startMovingUp = () => {
            ref.up = true;
            ref.down = false;
        };

        const stopMovingUp = () => {
            ref.up = false;
        };

        const startMovingDown = () => {
            ref.down = true;
            ref.up = false;
        };

        const stopMovingDown = () => {
            ref.down = false;
        };

        // Adicionar eventos de touch
        up.addEventListener('touchstart', startMovingUp);
        up.addEventListener('touchend', stopMovingUp);
        down.addEventListener('touchstart', startMovingDown);
        down.addEventListener('touchend', stopMovingDown);

        // Adicionar eventos de mouse
        up.addEventListener('mousedown', startMovingUp);
        up.addEventListener('mouseup', stopMovingUp);
        down.addEventListener('mousedown', startMovingDown);
        down.addEventListener('mouseup', stopMovingDown);

        // Adicionar eventos de mouseleave para garantir que o movimento pare quando o mouse sai do botão
        up.addEventListener('mouseleave', stopMovingUp);
        down.addEventListener('mouseleave', stopMovingDown);

        // Adicionar eventos de touchcancel para garantir que o movimento pare se o toque for cancelado
        up.addEventListener('touchcancel', stopMovingUp);
        down.addEventListener('touchcancel', stopMovingDown);
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
