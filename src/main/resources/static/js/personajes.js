WebFontConfig = {

    //  'active' means all requested fonts have finished loading
    //  We set a 1 second delay before calling 'createText'.
    //  For some reason if we don't the browser cannot render the text the first time it's created.
    //active: function() { jugPersonajes.time.events.add(Phaser.Timer.SECOND, createText, this); },

    //  The Google Fonts we want to load (specify as many as you like in the array)
    google: {
      families: ['Bungee']
    }

};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//GRUPOS	 ///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

var tankaUser2 = '';
var taliUser2 = '';
var acroUser2 = '';

//Load grupos from server
function loadSala(id, callback) {
$.ajax({
  url: 'http://localhost:8080/grupos/' + id
}).done(function (grupo) {
  //console.log('Versions loaded: ' + JSON.stringify(grupos));
  callback(grupo);
})
}

//Update grupo in server
function updateSala(grupo) {
$.ajax({
  method: 'PUT',
  url: 'http://localhost:8080/grupos/' + grupo.id,
  data: JSON.stringify(grupo),
  processData: false,
  headers: {
      "Content-Type": "application/json"
  }
}).done(function (grupo) {
  //console.log("Updated grupo: " + JSON.stringify(grupo))
})
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function preload6() {

	jugPersonajes.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
	
	jugPersonajes.load.audio('baseCharles', 'assets/sounds/baseCharles.mp3');
    jugPersonajes.load.audio('metronomo', 'assets/sounds/metronome120bpm.mp3');

    jugPersonajes.load.spritesheet('button', 'assets/Menu/button_sprite_sheet.png', 193, 71);
    jugPersonajes.load.spritesheet('buttonVolver', 'assets/Menu/button_sprite_sheet volver.png', 193, 71);
    jugPersonajes.load.image('background','assets/Menu/Personajes.png');
    jugPersonajes.load.image('tanka','assets/Images/TankabaIA.png');
    jugPersonajes.load.image('tali','assets/Images/TalibaIA.png');
    jugPersonajes.load.image('acro','assets/Images/AcrobaIA.png');

}

var button;
var buttonOnline;
var buttonExit;
var background;
var title;
var tanka;
var tali;
var acro;
var connection;
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
    
    tanka = jugPersonajes.add.button(310, 420, 'tanka', actionOnClickTanka, this, 2, 1, 0);
    tali = jugPersonajes.add.button(1370, 420, 'tali', actionOnClickTali, this, 2, 1, 0);
    acro = jugPersonajes.add.button(830, 420, 'acro', actionOnClickAcro, this, 2, 1, 0);
    
    tankaUser = jugPersonajes.add.text(310, 420, '');
    taliUser = jugPersonajes.add.text(1370, 420, '');
    acroUser = jugPersonajes.add.text(830, 420, '');
    
    tankaUser.fill = 'white';
    taliUser.fill = 'white';
    acroUser.fill = 'white';
    
    tankaUser.font = 'Bungee';
    taliUser.font = 'Bungee';
    acroUser.font = 'Bungee';  
    
    if (myGroupId != '') {
    	loadSala(myGroupId, function (grupo) {
    		if (grupo.tanka != '') {
    			tankaUser2 = grupo.tanka;
    		}
    		if (grupo.tali != '') {
    			taliUser2 = grupo.tali;
    		}
    		if (grupo.acro != '') {
    			acroUser2 = grupo.acro;
    		}
    		checkSala();
    	});
    }
    
    
    

    buttonExit = jugPersonajes.add.button(jugPersonajes.world.centerX - 760, 130, 'buttonVolver', actionOnClickVolverMenu, this, 2, 1, 0); //jugPersonajes.world.centerX - 320, 550

    button.onInputOver.add(over, this);
    button.onInputOut.add(out, this);
    button.onInputUp.add(up, this);
    tanka.onInputOver.add(over, this);
    tanka.onInputOut.add(out, this);
    tanka.onInputUp.add(up, this);
    tali.onInputOver.add(over, this);
    tali.onInputOut.add(out, this);
    tali.onInputUp.add(up, this);
    acro.onInputOver.add(over, this);
    acro.onInputOut.add(out, this);
    acro.onInputUp.add(up, this);

}

function checkSala() {
	if (tankaUser2 != '') {    
		tanka.alpha = 0.5;
		tankaUser.text = tankaUser2;
	}
	if (taliUser2 != '') {
		tali.alpha = 0.5;
		taliUser.text = taliUser2;
	}
	if (acroUser2 != '') {
		acro.alpha = 0.5;
		acroUser.text = acroUser2;
	}
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


function actionOnClickVolverMenu () {
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
function actionOnClickTanka () {
	tankaUser.text = usuario;
	switch (miCobaIA) {
	case 'tankabaIA':
		miCobaIA = '';
	    tanka.alpha = 1;
	    tankaUser.text = '';
	    if (myGroupId != '') {
	    	loadSala(myGroupId, function (grupo) {
	    		grupo.tanka = '';
	    		updateSala(grupo);
	    	});
	    }
		break;
	case 'talibaIA':
		miCobaIA = 'tankabaIA';
	    tanka.alpha = 0.5;
	    tali.alpha = 1;
	    taliUser.text = '';
	    if (myGroupId != '') {
	    	loadSala(myGroupId, function (grupo) {
	    		grupo.tanka = usuario;
	    		grupo.tali = '';
	    		updateSala(grupo);
	    	});
	    }
		break;
	case 'acrobaIA':
		miCobaIA = 'tankabaIA';
	    tanka.alpha = 0.5;
	    acro.alpha = 1;
	    acroUser.text = '';
	    if (myGroupId != '') {
	    	loadSala(myGroupId, function (grupo) {
	    		grupo.tanka = usuario;
	    		grupo.acro = '';
	    		updateSala(grupo);
	    	});
	    }
		break;
	default:
		miCobaIA = 'tankabaIA';
		tanka.alpha = 0.5;
		if (myGroupId != '') {
	    	loadSala(myGroupId, function (grupo) {
	    		grupo.tanka = usuario;
	    		updateSala(grupo);
	    	});
	    }
		break;
	}
	var msg = {
		name : usuario,
		message : miCobaIA
	}
	connection.send(JSON.stringify(msg));
	console.log(msg);
}
function actionOnClickTali () {
	taliUser.text = usuario;
	switch (miCobaIA) {
	case 'tankabaIA':
		miCobaIA = 'talibaIA';
	    tali.alpha = 0.5;
	    tanka.alpha = 1;
	    tankaUser.text = '';
	    if (myGroupId != '') {
	    	loadSala(myGroupId, function (grupo) {
	    		grupo.tali = usuario;
	    		grupo.tanka = '';
	    		updateSala(grupo);
	    	});
	    }
		break;
	case 'talibaIA':
		miCobaIA = '';
	    tali.alpha = 1;
	    taliUser.text = '';
	    if (myGroupId != '') {
	    	loadSala(myGroupId, function (grupo) {
	    		grupo.tali = '';
	    		updateSala(grupo);
	    	});
	    }
		break;
	case 'acrobaIA':
		miCobaIA = 'talibaIA';
	    tali.alpha = 0.5;
	    acro.alpha = 1;
	    acroUser.text = '';
	    if (myGroupId != '') {
	    	loadSala(myGroupId, function (grupo) {
	    		grupo.tali = usuario;
	    		grupo.acro = '';
	    		updateSala(grupo);
	    	});
	    }
		break;
	default:
		miCobaIA = 'talibaIA';
		tali.alpha = 0.5;
		if (myGroupId != '') {
	    	loadSala(myGroupId, function (grupo) {
	    		grupo.tali = usuario;
	    		updateSala(grupo);
	    	});
	    }
		break;
	}
	var msg = {
		name : usuario,
		message : miCobaIA
	}
	connection.send(JSON.stringify(msg));
}
function actionOnClickAcro () {
	acroUser.text = usuario;
    switch (miCobaIA) {
	case 'tankabaIA':
		miCobaIA = 'acrobaIA';
	    acro.alpha = 0.5;
	    tanka.alpha = 1;
	    tankaUser.text = '';
	    if (myGroupId != '') {
	    	loadSala(myGroupId, function (grupo) {
	    		grupo.acro = usuario;
	    		grupo.tanka = '';
	    		updateSala(grupo);
	    	});
	    }
		break;
	case 'talibaIA':
		miCobaIA = 'acrobaIA';
	    acro.alpha = 0.5;
	    tali.alpha = 1;
	    taliUser.text = '';
	    if (myGroupId != '') {
	    	loadSala(myGroupId, function (grupo) {
	    		grupo.acro = usuario;
	    		grupo.tali = '';
	    		updateSala(grupo);
	    	});
	    }
		break;
	case 'acrobaIA':
		miCobaIA = '';
	    acro.alpha = 1;
	    acroUser.text = '';
	    if (myGroupId != '') {
	    	loadSala(myGroupId, function (grupo) {
	    		grupo.acro = '';
	    		updateSala(grupo);
	    	});
	    }
		break;
	default:
		miCobaIA = 'acrobaIA';
    	acro.alpha = 0.5;
    	if (myGroupId != '') {
	    	loadSala(myGroupId, function (grupo) {
	    		grupo.acro = usuario;
	    		updateSala(grupo);
	    	});
	    }
		break;
	}
    var msg = {
		name : usuario,
		message : miCobaIA
	}
	connection.send(JSON.stringify(msg));
}

$(document).ready(function() {

	connection = new WebSocket('ws://localhost:8080/personajes');
	connection.onerror = function(e) {
		console.log("WS error: " + e);
	}
	connection.onmessage = function(msg) {
		console.log("WS message: " + msg.data);
		var message = JSON.parse(msg.data)
		switch (message.message) {
		case 'tankabaIA':
		    tanka.alpha = 0.5;
		    tankaUser.text = message.name;
		    if (message.name === taliUser.text) {
		    	taliUser.text = '';
		    	tali.alpha = 1;
		    }
		    else if (message.name === acroUser.text) {
		    	acroUser.text = '';
		    	acro.alpha = 1;
		    }
		    if (miCobaIA === 'tankabaIA') {
		    	miCobaIA = '';
		    }
			break;
		case 'talibaIA':
		    tali.alpha = 0.5;
		    taliUser.text = message.name;
		    if (message.name === tankaUser.text) {
		    	tankaUser.text = '';
		    	tanka.alpha = 1;
		    }
		    else if (message.name === acroUser.text) {
		    	acroUser.text = '';
		    	acro.alpha = 1;
		    }
		    if (miCobaIA === 'talibaIA') {
		    	miCobaIA = '';
		    }
			break;
		case 'acrobaIA':
		    acro.alpha = 0.5;
		    acroUser.text = message.name;
		    if (message.name === taliUser.text) {
		    	taliUser.text = '';
		    	tali.alpha = 1;
		    }
		    else if (message.name === tankaUser.text) {
		    	tankaUser.text = '';
		    	tanka.alpha = 1;
		    }
		    if (miCobaIA === 'acrobaIA') {
		    	miCobaIA = '';
		    }
			break;
		default:
			switch (message.name) {
			case tankaUser.text:
				tanka.alpha = 1;
			    tankaUser.text = '';
				break;
			case taliUser.text:
				tali.alpha = 1;
			    taliUser.text = '';
				break;
			case acroUser.text:
				acro.alpha = 1;
			    acroUser.text = '';
				break;
			default:
				break;
			}
			break;
		}
	}
	connection.onclose = function() {
		console.log("Closing socket");
	}
})