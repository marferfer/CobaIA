
function preload3() {

    //game.load.spritesheet('button', 'assets/Menu/button_sprite_sheet.png', 193, 71);
    game.load.spritesheet('buttonSalir', 'assets/Menu/button_sprite_sheet salir.png', 193, 71);
    game.load.spritesheet('title', 'assets/Final.png');
    game.load.image('background','assets/Menu/Portada.png');

}

var button;
var buttonOnline;
var buttonExit;
var background;
var title;

function create3() {

    nivelJuego = 2;
    //console.log(nivelJuego);

    game.stage.backgroundColor = '#182d3b';

    background = game.add.tileSprite(0, 0, 1920, 800, 'background');

    title = game.add.sprite(game.world.centerX - 769, 50, 'title');

    //button = game.add.button(game.world.centerX - 720, 550, 'button', actionOnClickGame, this, 2, 1, 0);
    //buttonOnline = game.add.button(game.world.centerX - 620, 550, 'button', actionOnClickOnline, this, 2, 1, 0);
    buttonExit = game.add.button(game.world.centerX - 420, 550, 'buttonSalir', actionOnClickExit, this, 2, 1, 0); //game.world.centerX - 320, 550

    //buttonPruebas = game.add.button(game.world.centerX - 220, 550, 'buttonSalir', actionOnClickPruebas, this, 2, 1, 0); //game.world.centerX - 320, 550

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



function actionOnClickOnline () {
    game.destroy();
    inicio();

}

function actionOnClickExit () {
    game.destroy();

}


function actionOnClickPruebas () {
    game.destroy();
    pruebas();

}