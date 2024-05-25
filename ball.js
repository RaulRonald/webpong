export class Ball extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this); // Adiciona o sprite à cena
        this.setOrigin(0, 0);
        this.velocityx = 1;
        this.velocityy = 0.5;
    }
    update() {
        //BALL CONFIGS
        const scene = this.scene;
        //BALL MOVIMENT
        this.x += this.velocityx;
        this.y += this.velocityy;
        if ((this.y + this.height) >= scene.game.config.height) {
            this.velocityy *= -1;
            this.velocityy -= 0.2;
        }
        if (this.y <= 0) {
            this.velocityy *= -1;
            this.velocityy += 0.2;
        }
    }
}
