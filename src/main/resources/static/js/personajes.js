function preload6() {

    jugPersonajes.load.audio('baseCharles', 'assets/sounds/baseCharles.mp3');
    jugPersonajes.load.audio('metronomo', 'assets/sounds/metronome120bpm.mp3');

    jugPersonajes.load.spritesheet('button', 'assets/Menu/button_sprite_sheet.png', 193, 71);
    jugPersonajes.load.spritesheet('buttonVolver', 'assets/Menu/button_sprite_sheet volver.png', 193, 71);
    jugPersonajes.load.image('background','assets/Menu/Personajes.png');

}

var button;
var buttonOnline;
var buttonExit;
var background;
var title;
/*var music2 = [];
var back = false;*/

function create6() {

    nivelJuego = 1;
    //console.log(nivelJuego);

    /*var baseCharles = jugPersonajes.add.audio('baseCharles');
    var metronomo = jugPersonajes.add.audio('metronomo');

    music2[0] = baseCharles;
    music2[1]= metronomo;

    loop2();*/

    metronomo = new sound("assets/sounds/metronome120bpm.mp3");
    musica[1] = metronomo;

    jugPersonajes.stage.backgroundColor = '#182d3b';

    background = jugPersonajes.add.tileSprite(0, 0, 1920, 800, 'background');

    button = jugPersonajes.add.button(jugPersonajes.world.centerX - 110, 550, 'button', actionOnClickGame, this, 2, 1, 0);

    buttonExit = jugPersonajes.add.button(jugPersonajes.world.centerX - 760, 130, 'buttonVolver', actionOnClickVolver, this, 2, 1, 0); //jugPersonajes.world.centerX - 320, 550

    button.onInputOver.add(over, this);
    button.onInputOut.add(out, this);
    button.onInputUp.add(up, this);

}

/*function loop2() {
    for (var i = 0; i < music2.length; i++) {
        music2[i].play();
    }
    
    setTimeout(function(){
        if (back) {
            jugPersonajes.destroy();
            menu();
        }
        else {
            loop2(music2);
        }
    }, 2000);
}*/

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
    nivel0off = true;
    menu();
    //back = true;
}

function actionOnClickGame () {
    jugPersonajes.destroy();
    inicio();

}