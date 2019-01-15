var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function menu(){
    game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });
}
function preload() {

    game.load.audio('baseCharles', 'assets/sounds/baseCharles.mp3');

    game.load.spritesheet('buttonOnline', 'assets/Menu/button_sprite_sheet online.png', 193, 71);
    game.load.spritesheet('buttonLocal', 'assets/Menu/button_sprite_sheet local.png', 193, 71);
    //game.load.spritesheet('buttonSalir', 'assets/Menu/button_sprite_sheet salir.png', 193, 71);
    game.load.spritesheet('buttonControles', 'assets/Menu/button_sprite_sheet controles.png', 193, 71);
    game.load.spritesheet('title', 'assets/Menu/TituloJuego.png');
    game.load.image('background','assets/Menu/Portada.png');

}

var buttonOnline;
var buttonLocal;
//var buttonExit;
var background;
var title;
//var pers = false;

function create() {

    nivelJuego = 0;
    console.log(nivelJuego);

    baseCharles = new sound("assets/sounds/baseCharles.mp3");
    musica[0] = baseCharles;

    //baseCharles.play();
    //loop();

    //loop(baseCharles);

    game.stage.backgroundColor = '#182d3b';

    background = game.add.tileSprite(0, 0, 1920, 800, 'background');
    background.scale.setTo(0.8, 0.8);

    title = game.add.sprite(game.world.centerX - 350, 50, 'title');
    title.scale.setTo(0.5, 0.5);

    buttonOnline = game.add.button(game.world.centerX - 400, 450, 'buttonOnline', actionOnClickCharacter, this, null, null, 0);
    buttonOnline.alpha = 0.5;
    buttonLocal = game.add.button(game.world.centerX - 200, 450, 'buttonLocal', actionOnClickLocal, this, 2, 1, 0);
    buttonControles = game.add.button(game.world.centerX, 450, 'buttonControles', actionOnClickControl, this, 2, 1, 0);
    //buttonExit = game.add.button(game.world.centerX - 360, 550, 'buttonSalir', actionOnClickExit, this, 2, 1, 0); //game.world.centerX - 320, 550

    //buttonPruebas = game.add.button(game.world.centerX - 220, 550, 'buttonSalir', actionOnClickPruebas, this, 2, 1, 0); //game.world.centerX - 320, 550

    buttonOnline.onInputOver.add(over, this);
    buttonOnline.onInputOut.add(out, this);
    buttonOnline.onInputUp.add(up, this);

}

/*function loop(music) {
    music.play();
    //let timer = game.time.events.add(2000, function(){
    setTimeout(function(){
        if (pers) {
            game.destroy();
            personajes();
        }
        else {
            loop(music);
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

function actionOnClickLocal () {
    game.destroy();
    inicio();
    //document.getElementById("crearGrupo").innerHTML = "Salir al Menú";
    //document.getElementById("crearGrupo").className = "btn btn-danger";
    
    //document.getElementById("entrarGrupo").innerHTML = "Controles";

}

function actionOnClickCharacter () {
    /*game.destroy();
    personajes();*/
    //pers = true;

}

function actionOnClickControl () {
    game.destroy();
    controles();

}

function actionOnClickExit () {
    game.destroy();

}


function actionOnClickPruebas () {
    game.destroy();
    pruebas();

}

function update(){
	
	/*if (buttonOnline.input.pointerOver())
    {
    	button.alpha = 1;
    }
    else
    {
    	button.alpha = 0.5;
    }*/
}
