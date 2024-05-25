export class Mainmenu extends Phaser.Scene {
    constructor() {
        super({ key: 'mainmenu' });
    }
    preload() {
        // Carregue recursos aqui
    }

    create() {
        //interface com elementos html
        const texto = this.add.text(200,50, 'Clique Aqui!', { fontSize: '32px', fill: '#ffffff' });

        // Torna o texto interativo, permitindo cliques
        texto.setInteractive();

        // Adiciona um evento de clique ao texto
        var referencia = this;
        texto.on('pointerdown', function () {
            referencia.scene.start('ponggame');
        });
        
    }

    update() {
        // Atualize a lógica do jogo aqui
    }
}
