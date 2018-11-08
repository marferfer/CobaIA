function preload6() {

    jugPersonajes.load.spritesheet('button', 'assets/Menu/button_sprite_sheet.png', 193, 71);
    jugPersonajes.load.spritesheet('buttonVolver', 'assets/Menu/button_sprite_sheet volver.png', 193, 71);
    jugPersonajes.load.image('background','assets/Menu/Personajes.png');

}

var button;
var buttonOnline;
var buttonExit;
var background;
var title;

function create6() {

    nivelJuego = 1;
    //console.log(nivelJuego);

    jugPersonajes.stage.backgroundColor = '#182d3b';

    background = jugPersonajes.add.tileSprite(0, 0, 1920, 800, 'background');

    button = jugPersonajes.add.button(jugPersonajes.world.centerX - 110, 550, 'button', actionOnClickGame, this, 2, 1, 0);

    buttonExit = jugPersonajes.add.button(jugPersonajes.world.centerX - 760, 130, 'buttonVolver', actionOnClickVolver, this, 2, 1, 0); //jugPersonajes.world.centerX - 320, 550

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


function actionOnClickVolver () {
    //background.visible = false;
    jugPersonajes.destroy();
    menu();

}

function actionOnClickGame () {
    jugPersonajes.destroy();
    inicio();

}