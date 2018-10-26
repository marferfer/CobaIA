                                          var game = new Phaser.Game(1920, 800, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {

    game.load.spritesheet('button', 'assets/button_sprite_sheet.png', 193, 71);
    game.load.image('background','assets/Portada.png');

}

var button;
var buttonOnline;
var buttonExit;
var background;

function create() {

    game.stage.backgroundColor = '#182d3b';

    background = game.add.tileSprite(0, 0, 1920, 800, 'background');

    button = game.add.button(game.world.centerX - 920, 550, 'button', actionOnClickGame, this, 2, 1, 0);
    buttonOnline = game.add.button(game.world.centerX - 620, 550, 'button', actionOnClickOnline, this, 2, 1, 0);
    buttonExit = game.add.button(game.world.centerX - 320, 550, 'button', actionOnClickExit, this, 2, 1, 0);

    button.onInputOver.add(over, this);
    button.onInputOut.add(out, this);
    button.onInputUp.add(up, this);

}

function up() {
    //console.log('button up', arguments);
}

function over() {
    //console.log('button over');
}

function out() {
    //console.log('button out');
}

function actionOnClickGame () {
    game.destroy();
    inicio();

}

function actionOnClickOnline () {
    game.destroy();
    inicio();

}

function actionOnClickExit () {
    game.destroy();

}