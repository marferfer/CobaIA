
function preload4() {

    //game.load.spritesheet('button', 'assets/Menu/button_sprite_sheet.png', 193, 71);
    game.load.spritesheet('buttonVolver', 'assets/Menu/button_sprite_sheet volver.png', 193, 71);
    game.load.image('background','assets/Menu/Controles.png');

}

var button;
var buttonOnline;
var buttonExit;
var background;
var title;

function create4() {

    nivelJuego = 3;
    //console.log(nivelJuego);

    game.stage.backgroundColor = '#182d3b';

    background = game.add.tileSprite(0, 0, 1920, 800, 'background');

    buttonExit = game.add.button(game.world.centerX - 760, 130, 'buttonVolver', actionOnClickVolver, this, 2, 1, 0); //game.world.centerX - 320, 550

    //buttonPruebas = game.add.button(game.world.centerX - 220, 550, 'buttonSalir', actionOnClickPruebas, this, 2, 1, 0); //game.world.centerX - 320, 550

    button.onInputOver.add(over, this);
    button.onInputOut.add(out, this);
    button.onInputUp.add(up, this);

}

function actionOnClickVolver () {
    //background.visible = false;
    game.destroy();
    menu();

}
