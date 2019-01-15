
function preload4() {

    //game.load.spritesheet('button', 'assets/Menu/button_sprite_sheet.png', 193, 71);
    game.load.spritesheet('buttonVolver', 'assets/Menu/button_sprite_sheet volver.png', 193, 71);
    game.load.spritesheet('tanka', 'assets/images/TankabaIAspriteSheet.png', 242, 137);
    game.load.spritesheet('acro', 'assets/images/AcrobaIAspriteSheet.png', 242, 137);
    game.load.spritesheet('tali', 'assets/images/TalibaIAspriteSheet.png', 242, 137);
    game.load.spritesheet('tecladoNav', 'assets/Menu/tecladoNavSpriteSheet.png', 183, 53);
    game.load.spritesheet('mandoNav', 'assets/Menu/mandoNavSpriteSheet.png', 183, 53);
    game.load.image('background','assets/Menu/FondoControles.png');
    game.load.image('teclasTanka','assets/Menu/Teclas Tanka.png');
    game.load.image('teclasAcro','assets/Menu/Teclas Acro.png');
    game.load.image('teclasTali','assets/Menu/Teclas Tali.png');
    game.load.image('mandoTanka','assets/Menu/mando tanka.png');
    game.load.image('mandoAcro','assets/Menu/mando acro.png');
    game.load.image('mandoTali','assets/Menu/mando tali.png');
    
}

var button;
var buttonOnline;
var buttonExit;
var background;
var title;
var tankaControl;
var acroControl;
var taliControl;
var tecladoNav;
var mandoNav;
var teclasTanka;
var teclasAcro;
var teclasTali;
var mandoTanka;
var mandoAcro;
var mandoTali;
var tecladoSelec = true;
var cobaIAselec = 'tanka';

function create4() {

    nivelJuego = 3;
    //console.log(nivelJuego);

    game.stage.backgroundColor = '#182d3b';

    background = game.add.tileSprite(0, 0, 800, 600, 'background');
    
    teclasTanka = game.add.image(game.world.centerX - 118, game.world.centerY - 170, 'teclasTanka');
    teclasAcro = game.add.image(game.world.centerX - 197, game.world.centerY - 170, 'teclasAcro');
    teclasTali = game.add.image(game.world.centerX - 169, game.world.centerY - 170, 'teclasTali');
    mandoTanka = game.add.image(game.world.centerX - 354, game.world.centerY - 130, 'mandoTanka');
    mandoAcro = game.add.image(game.world.centerX - 354, game.world.centerY - 166, 'mandoAcro');
    mandoTali = game.add.image(game.world.centerX - 354, game.world.centerY - 166, 'mandoTali');
    
    cobaIAselec = 'tanka';
    
    teclasTanka.alpha = 1.0;
    teclasAcro.alpha = 0.0;
    teclasTali.alpha = 0.0;
    mandoTanka.alpha = 0.0;
    mandoAcro.alpha = 0.0;
    mandoTali.alpha = 0.0;

    buttonExit = game.add.button(game.world.centerX - 410, 15, 'buttonVolver', actionOnClickVolver, this, 2, 1, 0); //game.world.centerX - 320, 550
    buttonExit.scale.setTo(0.7, 0.7);

    tankaControl = game.add.button(game.world.centerX - 385, 390, 'tanka', selectTanka, this, 2, 2, 2);
    acroControl = game.add.button(game.world.centerX - 120, 390, 'acro', selectAcro, this, 1, 0, 2);
    taliControl = game.add.button(game.world.centerX + 135, 390, 'tali', selectTali, this, 1, 0, 2);
    
    tecladoNav = game.add.button(game.world.centerX - 183, 20, 'tecladoNav', selectTeclado, this, 2, 2, 2);
    mandoNav = game.add.button(game.world.centerX, 20, 'mandoNav', selectMando, this, 1, 0, 2);
    //buttonPruebas = game.add.button(game.world.centerX - 220, 550, 'buttonSalir', actionOnClickPruebas, this, 2, 1, 0); //game.world.centerX - 320, 550

}

function actionOnClickVolver () {
    //background.visible = false;
    //game.destroy();
	Phaser.Canvas.removeFromDOM(game.canvas);
    menu();
}

function selectTanka() {
	tankaControl.setFrames(null, null, 2, null);
	acroControl.setFrames(1, 0, 2, null);
	taliControl.setFrames(1, 0, 2, null);
	if (tecladoSelec) {
		teclasTanka.alpha = 1.0;
	    teclasAcro.alpha = 0.0;
	    teclasTali.alpha = 0.0;
	}
	else {
		mandoTanka.alpha = 1.0;
	    mandoAcro.alpha = 0.0;
	    mandoTali.alpha = 0.0;
	}
	cobaIAselec = 'tanka';
}

function selectAcro() {
	tankaControl.setFrames(1, 0, 2, null);
	acroControl.setFrames(null, null, 2, null);
	taliControl.setFrames(1, 0, 2, null);
	if (tecladoSelec) {
		teclasTanka.alpha = 0.0;
	    teclasAcro.alpha = 1.0;
	    teclasTali.alpha = 0.0;
	}
	else {
		mandoTanka.alpha = 0.0;
	    mandoAcro.alpha = 1.0;
	    mandoTali.alpha = 0.0;
	}
	cobaIAselec = 'acro';
}

function selectTali() {
	tankaControl.setFrames(1, 0, 2, null);
	acroControl.setFrames(1, 0, 2, null);
	taliControl.setFrames(null, null, 2, null);
	if (tecladoSelec) {
		teclasTanka.alpha = 0.0;
	    teclasAcro.alpha = 0.0;
	    teclasTali.alpha = 1.0;
	}
	else {
		mandoTanka.alpha = 0.0;
	    mandoAcro.alpha = 0.0;
	    mandoTali.alpha = 1.0;
	}
	cobaIAselec = 'tali';
}

function selectTeclado() {
	mandoNav.setFrames(1, 0, 2, null);
	tecladoNav.setFrames(null, null, 2, null);
	tecladoSelec = true;
	switch (cobaIAselec) {
	case 'tanka':
		teclasTanka.alpha = 1.0;
		mandoTanka.alpha = 0.0;
		break;
	case 'acro':
		teclasAcro.alpha = 1.0;
		mandoAcro.alpha = 0.0;
		break;
	case 'tali':
		teclasTali.alpha = 1.0;
		mandoTali.alpha = 0.0;
		break;
	default:
		break;
	}
}

function selectMando() {
	tecladoNav.setFrames(1, 0, 2, null);
	mandoNav.setFrames(null, null, 2, null);
	tecladoSelec = false;
	switch (cobaIAselec) {
	case 'tanka':
		teclasTanka.alpha = 0.0;
		mandoTanka.alpha = 1.0;
		break;
	case 'acro':
		teclasAcro.alpha = 0.0;
		mandoAcro.alpha = 1.0;
		break;
	case 'tali':
		teclasTali.alpha = 0.0;
		mandoTali.alpha = 1.0;
		break;
	default:
		break;
	}
}
