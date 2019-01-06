WebFontConfig = {

	// 'active' means all requested fonts have finished loading
	// We set a 1 second delay before calling 'createText'.
	// For some reason if we don't the browser cannot render the text the first
	// time it's created.
	// active: function() { jugPersonajes.time.events.add(Phaser.Timer.SECOND,
	// createText, this); },

	// The Google Fonts we want to load (specify as many as you like in the
	// array)
	google : {
		families : [ 'Bungee' ]
	}

};

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GRUPOS
// ///////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
 * var tankaUser2 = ''; var taliUser2 = ''; var acroUser2 = '';
 */

// Load grupos from server
function loadSala(id, callback) {
	$.ajax({
		url : 'http://localhost:8080/grupos/' + id
	}).done(function(grupo) {
		console.log('Sala loaded: ' + JSON.stringify(grupo));
		callback(grupo);
	})
}

// Update grupo in server
function updateSala(grupo) {
	$.ajax({
		method : 'PUT',
		url : 'http://localhost:8080/grupos/' + grupo.id,
		data : JSON.stringify(grupo),
		processData : false,
		headers : {
			"Content-Type" : "application/json"
		}
	}).done(function(grupo) {
		// console.log("Updated grupo: " + JSON.stringify(grupo))
	})
}

// ////////////////////////////////////////////////////////////////////////////////////////////////////////

function preload6() {

	jugPersonajes.load.script('webfont',
			'//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

	jugPersonajes.load.audio('baseCharles', 'assets/sounds/baseCharles.mp3');
	jugPersonajes.load.audio('metronomo', 'assets/sounds/metronome120bpm.mp3');

	jugPersonajes.load.spritesheet('button',
			'assets/Menu/button_sprite_sheet listo.png', 193, 71);
	jugPersonajes.load.spritesheet('buttonVolver',
			'assets/Menu/button_sprite_sheet volver.png', 193, 71);
	jugPersonajes.load.image('background', 'assets/Menu/Personajes.png');
	jugPersonajes.load.image('tanka', 'assets/Images/TankabaIA.png');
	jugPersonajes.load.image('tali', 'assets/Images/TalibaIA.png');
	jugPersonajes.load.image('acro', 'assets/Images/AcrobaIA.png');
	jugPersonajes.load.image('check', 'assets/Images/check.png');

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
var tankaCheck2;
var taliCheck2;
var acroCheck2;
/*
 * var music2 = []; var back = false;
 */

function create6() {

	nivelJuego = 0.5;
	// console.log(nivelJuego);

	/*
	 * var baseCharles = jugPersonajes.add.audio('baseCharles'); var metronomo =
	 * jugPersonajes.add.audio('metronomo');
	 * 
	 * music2[0] = baseCharles; music2[1]= metronomo;
	 * 
	 * loop2();
	 */

	metronomo = new sound("assets/sounds/metronome120bpm.mp3");
	musica[1] = metronomo;

	jugPersonajes.stage.backgroundColor = '#182d3b';

	background = jugPersonajes.add.tileSprite(0, 0, 1920, 800, 'background');

	button = jugPersonajes.add.button(jugPersonajes.world.centerX - 110, 550,
			'button', actionOnClickGame, this);

	if (miCobaIA === '') {
		button.alpha = 0.5;
		button.setFrames(null, null, 0, null);
	} else {
		button.alpha = 1;
		button.setFrames(2, 1, 0, null);
	}

	tanka = jugPersonajes.add.button(310, 420, 'tanka', actionOnClickTanka,
			this, 2, 1, 0);
	tali = jugPersonajes.add.button(1370, 420, 'tali', actionOnClickTali, this,
			2, 1, 0);
	acro = jugPersonajes.add.button(830, 420, 'acro', actionOnClickAcro, this,
			2, 1, 0);

	tankaCheck = jugPersonajes.add.image(400, 480, 'check');
	tankaCheck.scale.setTo(0.05, 0.05);
	tankaCheck.alpha = 0;
	taliCheck = jugPersonajes.add.image(1463, 480, 'check');
	taliCheck.scale.setTo(0.05, 0.05);
	taliCheck.alpha = 0;
	acroCheck = jugPersonajes.add.image(925, 480, 'check');
	acroCheck.scale.setTo(0.05, 0.05);
	acroCheck.alpha = 0;

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
		loadSala(myGroupId, function(grupo) {
			if (grupo.tanka != '') {
				tankaUser2 = grupo.tanka;
			}
			if (grupo.tali != '') {
				taliUser2 = grupo.tali;
			}
			if (grupo.acro != '') {
				acroUser2 = grupo.acro;
			}
			if (grupo.tankaReady) {
				tankaCheck.alpha = 1;
			}
			if (grupo.taliReady) {
				taliCheck.alpha = 1;
			}
			if (grupo.acroReady) {
				acroCheck.alpha = 1;
			}
			checkSala();
		});
	}

	buttonExit = jugPersonajes.add.button(jugPersonajes.world.centerX - 760,
			130, 'buttonVolver', actionOnClickVolverMenu, this, 2, 1, 0); // jugPersonajes.world.centerX
																			// -
																			// 320,
																			// 550

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

/*
 * function loop2() { for (var i = 0; i < music2.length; i++) {
 * music2[i].play(); }
 * 
 * setTimeout(function(){ if (back) { jugPersonajes.destroy(); menu(); } else {
 * loop2(music2); } }, 2000); }
 */

function up() {
	// console.log('button up', arguments);
}

function over() {
	// console.log('button over');
}

function out() {
	// console.log('button out');
}

function actionOnClickVolverMenu() {
	// background.visible = false;
	jugPersonajes.destroy();
	nivel0off = true;
	menu();
	// back = true;
}

function actionOnClickGame() {
	if (button.alpha === 1) {
		// jugPersonajes.destroy();
		// inicio();
		switch (miCobaIA) {
		case 'tankabaIA':
			if (tankaCheck.alpha === 0) {
				tankaCheck.alpha = 1;
			} else {
				tankaCheck.alpha = 0;
			}
			if (myGroupId != '') {
				loadSala(myGroupId, function(grupo) {
					if (tankaCheck.alpha === 1) grupo.tankaReady = true;
					else grupo.tankaReady = false;
					updateSala(grupo);
				});
			}
			break;
		case 'talibaIA':
			if (taliCheck.alpha === 0) {
				taliCheck.alpha = 1;
			} else {
				taliCheck.alpha = 0;
			}
			if (myGroupId != '') {
				loadSala(myGroupId, function(grupo) {
					if (taliCheck.alpha === 1) grupo.taliReady = true;
					else grupo.taliReady = false;
					updateSala(grupo);
				});
			}
			break;
		case 'acrobaIA':
			if (acroCheck.alpha === 0) {
				acroCheck.alpha = 1;
			} else {
				acroCheck.alpha = 0;
			}
			if (myGroupId != '') {
				loadSala(myGroupId, function(grupo) {
					if (acroCheck.alpha === 1) grupo.acroReady = true;
					else grupo.acroReady = false;
					updateSala(grupo);
				});
			}
			break;
		default:
			break;
		}
		var msg = {
			name : 'ready',
			message : miCobaIA,
			groupId : myGroupId
		}
		if (myGroupId != '')
			connection.send(JSON.stringify(msg));
	}
}
function actionOnClickTanka() {
	var unlocked = false;
	switch (miCobaIA) {
	case 'tankabaIA':
		miCobaIA = '';
		tanka.alpha = 1;
		tankaUser.text = '';
		if (myGroupId != '') {
			loadSala(myGroupId, function(grupo) {
				grupo.tanka = '';
				grupo.tankaReady = false;
				updateSala(grupo);
			});
		}
		button.alpha = 0.5;
		if (tankaCheck.alpha === 1) {
			tankaCheck.alpha = 0;
			var msg = {
				name : "ready",
				message : "tankabaIA",
				groupId : myGroupId
			}
			if (myGroupId != '') connection.send(JSON.stringify(msg));
		}
		button.setFrames(null, null, 0, null);
		unlocked = true;
		break;
	case 'talibaIA':
		if (tankaCheck.alpha === 0) {
			tankaUser.text = usuario;
			miCobaIA = 'tankabaIA';
			tanka.alpha = 0.5;
			tali.alpha = 1;
			taliUser.text = '';
			if (myGroupId != '') {
				loadSala(myGroupId, function(grupo) {
					grupo.tanka = usuario;
					grupo.tali = '';
					grupo.taliReady = false;
					updateSala(grupo);
				});
			}
			if (taliCheck.alpha === 1) {
				taliCheck.alpha = 0;
				var msg = {
					name : "ready",
					message : "talibaIA",
					groupId : myGroupId
				}
				if (myGroupId != '') connection.send(JSON.stringify(msg));
			}
			unlocked = true;
		}
		break;
	case 'acrobaIA':
		if (tankaCheck.alpha === 0) {
			tankaUser.text = usuario;
			miCobaIA = 'tankabaIA';
			tanka.alpha = 0.5;
			acro.alpha = 1;
			acroUser.text = '';
			if (myGroupId != '') {
				loadSala(myGroupId, function(grupo) {
					grupo.tanka = usuario;
					grupo.acro = '';
					grupo.acroReady = false;
					updateSala(grupo);
				});
			}
			if (acroCheck.alpha === 1) {
				acroCheck.alpha = 0;
				var msg = {
					name : "ready",
					message : "acrobaIA",
					groupId : myGroupId
				}
				if (myGroupId != '') connection.send(JSON.stringify(msg));
			}
			unlocked = true;
		}
		break;
	default:
		if (tankaCheck.alpha === 0) {
			tankaUser.text = usuario;
			miCobaIA = 'tankabaIA';
			tanka.alpha = 0.5;
			if (myGroupId != '') {
				loadSala(myGroupId, function(grupo) {
					grupo.tanka = usuario;
					updateSala(grupo);
				});
			}
			button.alpha = 1;
			button.setFrames(2, 1, 0, null);
			unlocked = true;
		}
		break;
	}
	if (unlocked) {
		var msg = {
			name : usuario,
			message : miCobaIA,
			groupId : myGroupId
		}
		if (myGroupId != '') connection.send(JSON.stringify(msg));
	}
}
function actionOnClickTali() {
	var unlocked = false;;
	switch (miCobaIA) {
	case 'tankabaIA':
		if (taliCheck.alpha === 0) {
			taliUser.text = usuario;
			miCobaIA = 'talibaIA';
			tali.alpha = 0.5;
			tanka.alpha = 1;
			tankaUser.text = '';
			if (myGroupId != '') {
				loadSala(myGroupId, function(grupo) {
					grupo.tali = usuario;
					grupo.tanka = '';
					grupo.tankaReady = false;
					updateSala(grupo);
				});
			}
			if (tankaCheck.alpha === 1) {
				tankaCheck.alpha = 0;
				var msg = {
					name : "ready",
					message : "tankabaIA",
					groupId : myGroupId
				}
				if (myGroupId != '') connection.send(JSON.stringify(msg));
			}
			unlocked = true;
		}
		break;
	case 'talibaIA':
		miCobaIA = '';
		tali.alpha = 1;
		taliUser.text = '';
		if (myGroupId != '') {
			loadSala(myGroupId, function(grupo) {
				grupo.tali = '';
				grupo.taliReady = false;
				updateSala(grupo);
			});
		}
		if (taliCheck.alpha === 1) {
			taliCheck.alpha = 0;
			var msg = {
				name : "ready",
				message : "talibaIA",
				groupId : myGroupId
			}
			if (myGroupId != '') connection.send(JSON.stringify(msg));
		}
		button.alpha = 0.5;
		button.setFrames(null, null, 0, null);
		unlocked = true;
		break;
	case 'acrobaIA':
		if (taliCheck.alpha === 0) {
			taliUser.text = usuario;
			miCobaIA = 'talibaIA';
			tali.alpha = 0.5;
			acro.alpha = 1;
			acroUser.text = '';
			if (myGroupId != '') {
				loadSala(myGroupId, function(grupo) {
					grupo.tali = usuario;
					grupo.acro = '';
					grupo.acroReady = false;
					updateSala(grupo);
				});
			}
			if (acroCheck.alpha === 1) {
				acroCheck.alpha = 0;
				var msg = {
					name : "ready",
					message : "acrobaIA",
					groupId : myGroupId
				}
				if (myGroupId != '') connection.send(JSON.stringify(msg));
			}
			unlocked = true;
		}
		break;
	default:
		if (taliCheck.alpha === 0) {
			taliUser.text = usuario;
			miCobaIA = 'talibaIA';
			tali.alpha = 0.5;
			if (myGroupId != '') {
				loadSala(myGroupId, function(grupo) {
					grupo.tali = usuario;
					updateSala(grupo);
				});
			}
			button.alpha = 1;
			button.setFrames(2, 1, 0, null);
			unlocked = true;
		}
		break;
	}
	if (unlocked) {
		var msg = {
			name : usuario,
			message : miCobaIA,
			groupId : myGroupId
		}
		if (myGroupId != '') connection.send(JSON.stringify(msg));
	}
}
function actionOnClickAcro() {
	var unlocked = false;
	switch (miCobaIA) {
	case 'tankabaIA':
		if (acroCheck.alpha === 0) {
			acroUser.text = usuario;
			miCobaIA = 'acrobaIA';
			acro.alpha = 0.5;
			tanka.alpha = 1;
			tankaUser.text = '';
			if (myGroupId != '') {
				loadSala(myGroupId, function(grupo) {
					grupo.acro = usuario;
					grupo.tanka = '';
					grupo.tankaReady = false;
					updateSala(grupo);
				});
			}
			if (tankaCheck.alpha === 1) {
				tankaCheck.alpha = 0;
				var msg = {
					name : "ready",
					message : "tankabaIA",
					groupId : myGroupId
				}
				if (myGroupId != '') connection.send(JSON.stringify(msg));
			}
			unlocked = true;
		}
		break;
	case 'talibaIA':
		if (acroCheck.alpha === 0) {
			acroUser.text = usuario;
			miCobaIA = 'acrobaIA';
			acro.alpha = 0.5;
			tali.alpha = 1;
			taliUser.text = '';
			if (myGroupId != '') {
				loadSala(myGroupId, function(grupo) {
					grupo.acro = usuario;
					grupo.tali = '';
					grupo.taliReady = false;
					updateSala(grupo);
				});
			}
			if (taliCheck.alpha === 1) {
				taliCheck.alpha = 0;
				var msg = {
					name : "ready",
					message : "talibaIA",
					groupId : myGroupId
				}
				if (myGroupId != '') connection.send(JSON.stringify(msg));
			}
			unlocked = true;
		}
		break;
	case 'acrobaIA':
		miCobaIA = '';
		acro.alpha = 1;
		acroUser.text = '';
		if (myGroupId != '') {
			loadSala(myGroupId, function(grupo) {
				grupo.acro = '';
				grupo.acroReady = false;
				updateSala(grupo);
			});
		}
		if (acroCheck.alpha === 1) {
			acroCheck.alpha = 0;
			var msg = {
				name : "ready",
				message : "acrobaIA",
				groupId : myGroupId
			}
			if (myGroupId != '') connection.send(JSON.stringify(msg));
		}
		button.alpha = 0.5;
		button.setFrames(null, null, 0, null);
		unlocked = true;
		break;
	default:
		if (acroCheck.alpha === 0) {
			acroUser.text = usuario;
			miCobaIA = 'acrobaIA';
			acro.alpha = 0.5;
			if (myGroupId != '') {
				loadSala(myGroupId, function(grupo) {
					grupo.acro = usuario;
					updateSala(grupo);
				});
			}
			button.alpha = 1;
			button.setFrames(2, 1, 0, null);
			unlocked = true;
		}
		break;
	}
	if (unlocked) {
		var msg = {
			name : usuario,
			message : miCobaIA,
			groupId : myGroupId
		}
		if (myGroupId != '') connection.send(JSON.stringify(msg));
	}
}

var allReady = false;

$(document).ready(function() {

	connection = new WebSocket('ws://localhost:8080/personajes');
	connection.onerror = function(e) {
		console.log("WS error: " + e);
	}
	connection.onmessage = function(msg) {
		console.log("WS message: " + msg.data);
		var message = JSON.parse(msg.data);
		if (message.groupId == myGroupId) {
			if (message.name != 'ready') {
				switch (message.message) {
				case 'tankabaIA':
					tanka.alpha = 0.5;
					tankaUser.text = message.name;
					if (message.name === taliUser.text) {
						taliUser.text = '';
						tali.alpha = 1;
						taliCheck.alpha = 0;
					} else if (message.name === acroUser.text) {
						acroUser.text = '';
						acro.alpha = 1;
						acroCheck.alpha = 0;
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
						tankaCheck.alpha = 0;
					} else if (message.name === acroUser.text) {
						acroUser.text = '';
						acro.alpha = 1;
						acroCheck.alpha = 0;
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
						taliCheck.alpha = 0;
					} else if (message.name === tankaUser.text) {
						tankaUser.text = '';
						tanka.alpha = 1;
						tankaCheck.alpha = 0;
					}
					if (miCobaIA === 'acrobaIA') {
						miCobaIA = '';
					}
					break;
				case 'start':
					$('body').prepend('<div class="cd-number-wrapper">' +
										  '<span class="cd-number-five">5</span>' +
										  '<span class="cd-number-four">4</span>' +
										  '<span class="cd-number-three">3</span>' +
										  '<span class="cd-number-two">2</span>' +
										  '<span class="cd-number-one">1</span>' +
										'</div>');
					allReady = true;
					setTimeout(function() {
						if (allReady) {
							jugPersonajes.destroy();
							inicio();
							
					    	document.getElementById("crearGrupo").innerHTML = 'Volver al Menú';
					    	document.getElementById("crearGrupo").className = 'btn btn-danger';
					    	document.getElementById("entrarGrupo").innerHTML = 'Controles';
					    	
						    $('.cd-number-wrapper').remove();
						}
					}, 5500);
					break;
				case 'cancel that':
					allReady = false;
					$('.cd-number-wrapper').remove();
					break;					
				default:
					switch (message.name) {
					case tankaUser.text:
						tanka.alpha = 1;
						tankaUser.text = '';
						tankaCheck.alpha = 0;
						break;
					case taliUser.text:
						tali.alpha = 1;
						taliUser.text = '';
						taliCheck.alpha = 0;
						break;
					case acroUser.text:
						acro.alpha = 1;
						acroUser.text = '';
						acroCheck.alpha = 0;
						break;
					default:
						break;
					}
					break;
				}
			} else {
				switch (message.message) {
				case 'tankabaIA':
					if (tankaCheck.alpha === 0) {
						tankaCheck.alpha = 1;
					} else {
						tankaCheck.alpha = 0;
					}
					break;
				case 'talibaIA':
					if (taliCheck.alpha === 0) {
						taliCheck.alpha = 1;
					} else {
						taliCheck.alpha = 0;
					}
					break;
				case 'acrobaIA':
					if (acroCheck.alpha === 0) {
						acroCheck.alpha = 1;
					} else {
						acroCheck.alpha = 0;
					}
					break;
				default:
					break;
				}
			}
		}
	}
	connection.onclose = function() {
		console.log("Closing socket");
	}
})