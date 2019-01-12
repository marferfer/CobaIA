function inicio() {
     juego = new Phaser.Game(1920, 800, Phaser.AUTO, '', {preload: preload5, create: create5, update: update5, render: render5});                
    
    

    function render5() { // Render
        //juego.debug.cameraInfo(juego.camera, 32, 32);
        //juego.debug.spriteCoords(obj_jugador.jugador, 32, 500);
    }

    function reinicia_inmediato() {
        location.reload();
    } 

    
}

///////////////////////////////////////////////////////////////////////////////////
//////////////////////////// SONIDO ///////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

var nivel0off = true;
var nivel1off = true;

var musica = [];

var baseCharles;
var metronomo;

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    this.isOn = false;
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
        this.isOn = true;
    }
    this.stop = function(){
        this.sound.pause();
        this.isOn = false;
    }
    this.getVolume = function(){
        return this.sound.volume;
    }
    this.setVolume = function(v){
        this.sound.volume = v;
    }
}

function connectChat(){
	////console.log('gola');
	chatConnection = new WebSocket('ws://localhost:8080/chat');
	chatConnection.onerror = function(e) {
		//console.log("WS error: " + e);
	}
	chatConnection.onmessage = function(msg) {
		//console.log("WS message: " + msg.data);
		var message = JSON.parse(msg.data)
		$('#mensajePersona').append( message.name + ": " + message.message + "<br>");
	}
	chatConnection.onclose = function() {
		console.log("Closing chat socket");
	}
}

loop();

function loop() {
    setTimeout(function(){
        if (nivelJuego === 0 && nivel0off && !musica[0].isOn) {
            //musica[0].play();
            for (var i = 1; i < musica.length; i++) {
                musica[i].stop();
            }
            nivel0off = false;
        }
        else if (nivelJuego === 1 && nivel1off) {
            musica[1].setVolume(0.65);
            //musica[1].play();
            nivel1off = false;
        }
        ////console.log(baseCharles.getVolume());
        loop();
    }, 2000);
}



///////////////////////////////////////////////////////////////////////////////////

var miCobaIA = '';

function personajes() {
     jugPersonajes = new Phaser.Game(1920, 800, Phaser.AUTO, '', {preload: preload6, create: create6});  

     function render6() { // Render
        //juego.debug.cameraInfo(juego.camera, 32, 32);
        //juego.debug.spriteCoords(obj_jugador.jugador, 32, 500);
    }              

    function reinicia_inmediato() {
        location.reload();
    }   
}

function pruebas() {
     juegoPruebas = new Phaser.Game(1920, 800, Phaser.AUTO, '', {preload: preloadP, create: createP, update: updateP, render: renderP});                
    
    

    function renderP() { // Render
        //juego.debug.cameraInfo(juego.camera, 32, 32);
        //juego.debug.spriteCoords(obj_jugador.jugador, 32, 500);
    }

    function reinicia_inmediato() {
        location.reload();
    }

    
}

function nivel2() {
     juego2 = new Phaser.Game(1920, 800, Phaser.AUTO, '', {preload: preload2, create: create2, update: update2, render: render2});                
    
    

    function render2() { // Render
        //juego.debug.cameraInfo(juego.camera, 32, 32);
        //juego.debug.spriteCoords(obj_jugador.jugador, 32, 500);
    }

    function reinicia_inmediato() {
        location.reload();
    }

    
}

function nivel3() {
     game = new Phaser.Game(1920, 800, Phaser.AUTO, '', {preload: preload3, create: create3});                

    function render3() { // Render
        //juego.debug.cameraInfo(juego.camera, 32, 32);
        //juego.debug.spriteCoords(obj_jugador.jugador, 32, 500);
    }

    function reinicia_inmediato() {
        location.reload();
    }

    
}

function controles() {
     game = new Phaser.Game(1920, 800, Phaser.AUTO, '', {preload: preload4, create: create4});                

    function render4() { // Render
        //juego.debug.cameraInfo(juego.camera, 32, 32);
        //juego.debug.spriteCoords(obj_jugador.jugador, 32, 500);
    }

    function reinicia_inmediato() {
        location.reload();
    }   
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GESTIÓN DEL SERVIDOR ///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////


hereIam();
//checkUsers();


var usuario = '';
var conectado = false;
var userRepeated = false;
var enSala = false;
var miSala = null;
var miSala2 = null;
var miGrupo = '';
var playerConnection;
var chatConnection; 
var myGameId = '';

var t = 0;

var invitar = false; 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FICHEROS ///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//agregamos un nuevo usuario y password a los ficheros 
function addUserToFile(item){
	$.ajax({
		method: "POST",
		url:'http://localhost:8080/ficheros',
		data: JSON.stringify(item),
	    processData: false,
	    headers: {
	    	"Content-Type": "application/json"
	    }
	})
}

function getUsersAndPasswords(callback){
	$.ajax({
		url: 'http://localhost:8080/ficheros/{partes}'
	}).done(function(items){
		callback(items);
	})
}






///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ITEMS ///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
var usersConnection;

//no borrar de momento, puede resultar util mas tarde
/*function hola123(callback){
	$.ajax({
		url:'http://localhost:8080/items/{password}'
	}).done(function(items){
		callback(items);
	})
}

hola123(function (pw) {
    //console.log(pw);
});*/

//Load items from server
function loadItems(callback) {
    $.ajax({
        url: 'http://localhost:8080/items'
    }).done(function (items) {
        ////console.log('Items loaded: ' + JSON.stringify(items));
        callback(items);
    })
}

//Create item in server
function createItem(item, callback) {
    $.ajax({
        method: "POST",
        url: 'http://localhost:8080/items',
        data: JSON.stringify(item),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (item) {
        //console.log("Item created: " + JSON.stringify(item));
        callback(item);
    })
}

//Update item in server
function updateItem(item) {
    $.ajax({
        method: 'PUT',
        url: 'http://localhost:8080/items/' + item.id,
        data: JSON.stringify(item),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (item) {
        ////console.log("Updated item: " + JSON.stringify(item))
    })
}

//Delete item from server
function deleteItem(itemId) {
    $.ajax({
        method: 'DELETE',
        url: 'http://localhost:8080/items/' + itemId
    }).done(function (item) {
        //console.log("Deleted item " + itemId)
    })
}

//Show item in page
function showItem(item) {

    var checked = '';
    var style = '';

    if (item.checked) {
        checked = 'checked';
        style = 'style="text-decoration:line-through"';
    }

    $('#info').append(
        '<li onclick="llamarconsola()" id="item-"' + item.id + '" class="nav-item"><span>' + item.description + ' <i class="fa fa-send"></i></span></li>')
}

//Show user in page
function showUser(item) {

    var checked = '';
    var style = '';

    if (item.checked) {
        checked = 'checked';
        style = 'style="text-decoration:line-through"';
    }

    document.getElementById("miCuenta").innerHTML = "<span style='text-transform: capitalize'>" + item.description + "</span>";
}

function llamarconsola(){
	//console.log('hola');
}

function logInSignIn() {
	document.getElementById('exampleInputEmail1').focus();
    var input = $('#exampleInputEmail1')
    var input2 = $('#passUser')
    var input3 = $('#passUser2')
    var info = $('#info')
	document.getElementById('exampleInputEmail1').addEventListener("keyup", function(event) {
	  event.preventDefault();
	  if (event.keyCode === 13) {
	    document.getElementById("add-button").click();
	  }
	});
    document.getElementById('passUser').addEventListener("keyup", function(event) {
  	  event.preventDefault();
  	  if (event.keyCode === 13) {
  	    document.getElementById("add-button").click();
  	  }
  	});
    document.getElementById('passUser2').addEventListener("keyup", function(event) {
  	  event.preventDefault();
  	  if (event.keyCode === 13) {
  	    document.getElementById("add-button").click();
  	  }
  	});

    //Handle delete buttons
    $('li').click(function (event) {
    	//console.log('hola');
    	
    })

    //Handle items checkboxs
    info.change(function (event) {

        //Get page elements for item
        var checkbox = $(event.target);
        var itemDiv = checkbox.parent();
        var textSpan = itemDiv.find('span');

        //Read item info from elements
        var itemDescription = textSpan.text();
        var itemChecked = checkbox.prop('checked');
        var itemId = itemDiv.attr('id').split('-')[1];

        //Create updated item
        var updatedItem = {
            id: itemId,
            description: itemDescription,
            checked: itemChecked
        }

        //Update item in server
        updateItem(updatedItem);

        //Update page when checked
        var style = itemChecked ? 'line-through' : 'none';
        textSpan.css('text-decoration', style);

    })
    
    $("#btnRegistrarse").click(function () {
    	var btn = document.getElementById("btnRegistrarse");
    	if (btn.innerHTML == "Crear Cuenta") {
    		btn.innerHTML = "Iniciar Sesión";
    		document.getElementById("confirmPass").style.visibility = "visible";
    		document.getElementById("confirmPass").style.display = "block";
    	}
    	else {
    		btn.innerHTML = "Crear Cuenta";
    		document.getElementById("confirmPass").style.visibility = "hidden";
    		document.getElementById("confirmPass").style.display = "none";
    	}
    });
    
    $('#send-btn').click(function() {
		var msg = {
			name : usuario,//$('#name').val(),
			message : $('#textoOwner').val()
		}
		$('#mensajePersona').append(msg.name + ": " + msg.message + "<br>");
	    //$('#mensajePersona').val($('#mensajePersona').val() + "\n" + msg.name + ": " + msg.message);
		chatConnection.send(JSON.stringify(msg));
		
		//console.log($('#mensajePersona').val($('#mensajePersona').val() + "\n" + msg.name + ": " + msg.message));
	});

    //Handle add button
    $("#add-button").click(function () {

    	var btnReg = document.getElementById("btnRegistrarse");
    	  	
    	
    	var value = input.val(); //User
        var value2 = input2.val(); //Pass
        var value3 = input3.val(); //PassConfirm
        input.val(''); 
        input2.val('');
        input3.val('');

        var item = {
            description: value,
            password: value2,
            checked: true
        }
        

    	//Ficheros
    	if (btnReg.innerHTML == "Crear Cuenta") {
    		var userMatches = false;
    		var repeatedUser = false;
    		loadItems(function(items) {
				for (var j = 0; j < items.length; j++) {
					if (value == items[j]) {
						repeatedUser = true;
					}
				}
			});
			if (!repeatedUser) {
				getUsersAndPasswords(function (items) {
	    			for (var i = 0; i < items.length; i += 2) {
	    				if (value == items[i] && value2 == items[i+1]) {
	    					userMatches = true;
	    					i = items.length;    					
	    					/*createItem(item, function (itemWithId) {
	    	                    //When item with id is returned from server
	    	    				showUser(itemWithId);
	    	                });*/    					
	    					showUser(item);
	    					connectToUsers();
	    	                var element = document.getElementById("exampleInputEmail1");
	    	                element.parentNode.removeChild(element);
	    	                var element1 = document.getElementById("add-button");
	    	                element1.parentNode.removeChild(element1);
	    	                var element2 = document.getElementById("title");
	    	                element2.parentNode.removeChild(element2);
	    	                document.getElementById("loader").style.visibility = "visible";
	    	                /*var element3 = document.getElementById("pantallaInicio");
	    	                element3.style.visibility = "hidden";
	    	                element3.style.zIndex = "2";*/
	    	                var element4 = document.getElementById("contrasena");
	    	                element4.parentNode.removeChild(element4);
	    	                var element5 = document.getElementById("passUser");
	    	                element5.parentNode.removeChild(element5);
	    	                var element6 = document.getElementById("btnRegistrarse");
	    	                element6.parentNode.removeChild(element6);
	    	                var element7 = document.getElementById("confirmPass");
	    	                element7.parentNode.removeChild(element7);
	    	                
	    	   
	    	                usuario = value;
	    	                /*if (usuario == "admin") {
	    	        			checkUsers();
	    	        		}*/
	    				}
	    			}
	    		});
			}
			else {
				document.getElementById("title").innerHTML = '<span style="color:red"> <b>Usuario ya conectado</b> </span>';
			}
			if (!userMatches) {
				document.getElementById("title").innerHTML = '<span style="color:red"> <b>Los datos introducidos no concuerdan</b> </span>';
			}
    	}
    	else {
    		getUsersAndPasswords(function (items) {
    			var x = value.split(' ');
    			var repeatedUser = false;
    			for (var i = 0; i < items.length; i += 2) {
    				if (value == items[i]) {
    					i = items.length;
    					document.getElementById("title").innerHTML = '<span style="color:red"> <b>Usuario ya existente</b> </span>';
    					repeatedUser = true;
    				}
    			}
    			if (value.length < 5 || value.length > 10) {
					document.getElementById("title").innerHTML = '<span style="color:red"> <b>El nombre de usuario debe tener entre 5 y 10 caracteres</b> </span>';
				}    				
				else if (x.length > 1) {
					document.getElementById("title").innerHTML = '<span style="color:red"> <b>No están permitidos los espacios</b> </span>';
				}
				else if (value2 != value3) {
					document.getElementById("confirmContrasena").innerHTML = '<span style="color:red"> <b>Las contraseñas no concuerdan</b> </span>';
				}
				else if (!repeatedUser){
					/*createItem(item, function (itemWithId) {
	                    //When item with id is returned from server
	    				showUser(itemWithId);
	    				addUserToFile(itemWithId);
	                });*/
					
					showUser(item);
					addUserToFile(item);
					connectToUsers();
	            
	                var element = document.getElementById("exampleInputEmail1");
	                element.parentNode.removeChild(element);
	                var element1 = document.getElementById("add-button");
	                element1.parentNode.removeChild(element1);
	                var element2 = document.getElementById("title");
	                element2.parentNode.removeChild(element2);
	                /*var element3 = document.getElementById("pantallaInicio");
	                element3.style.visibility = "hidden";
	                element3.style.zIndex = "2";*/
	                document.getElementById("loader").style.visibility = "visible";
	                var element4 = document.getElementById("contrasena");
	                element4.parentNode.removeChild(element4);
	                var element5 = document.getElementById("passUser");
	                element5.parentNode.removeChild(element5);
	                var element6 = document.getElementById("btnRegistrarse");
	                element6.parentNode.removeChild(element6);
	                var element7 = document.getElementById("confirmPass");
	                element7.parentNode.removeChild(element7);
	                
	   
	                usuario = value;
	                if (usuario == "admin") {
	        			checkUsers();
	        		}
	                
				}
    		});
    	}
    });
}

$(document).ready(function() {
	logInSignIn();
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// VERSION ///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

var cobaIAversion = "1.6";

//Load VERSIONS from server
function loadVersions(callback) {
    $.ajax({
        url: 'http://localhost:8080/versions'
    }).done(function (versions) {
        ////console.log('Versions loaded: ' + JSON.stringify(versions));
        callback(versions);
    })
}

//Create version in server
function createVersion(version, callback) {
    $.ajax({
        method: "POST",
        url: 'http://localhost:8080/versions',
        data: JSON.stringify(version),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (version) {
        //console.log("Version created: " + JSON.stringify(version));
        callback(version);
    })
}

//Update version in server
function updateVersion(version) {
    $.ajax({
        method: 'PUT',
        url: 'http://localhost:8080/versions/' + version.id,
        data: JSON.stringify(version),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (version) {
        //console.log("Updated version: " + JSON.stringify(version))
    })
}

//Delete version from server
function deleteVersion(versionId) {
    $.ajax({
        method: 'DELETE',
        url: 'http://localhost:8080/versions/' + versionId
    }).done(function (version) {
        //console.log("Deleted version " + versionId)
    })
}

//Show version in page
function showVersion(version) {

    var checked = '';
    var style = '';

    if (version.checked) {
        checked = 'checked';
        style = 'style="text-decoration:line-through"';
    }

    $('#info').append(
        '<div id="version-' + version.id + '</div>')
}


loadVersions(function (versions) {
	if (versions.length == 0) {
		var myVersion = {
            description: cobaIAversion
        }	
        createVersion(myVersion, function (versionWithId) { ; });
	}
	else  {
		versions[0].description = cobaIAversion;
		updateVersion(versions[0]);
	}
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GRUPOS	 ///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

var myGroupId = '';
var myGroupName = '';
var tankaUser2 = '';
var taliUser2 = '';
var acroUser2 = '';
var groupConnection;
var canDisconnect;
var creator = false;
var grupoNew;
var entrandoEnSala = false;

//Load grupos from server
function loadGrupos(callback) {
 $.ajax({
     url: 'http://localhost:8080/grupos'
 }).done(function (grupos) {
     ////console.log('Versions loaded: ' + JSON.stringify(grupos));
     callback(grupos);
 })
}

//Create grupo in server
function createGrupo(grupo, callback) {
 $.ajax({
     method: "POST",
     url: 'http://localhost:8080/grupos',
     data: JSON.stringify(grupo),
     processData: false,
     headers: {
         "Content-Type": "application/json"
     }
 }).done(function (grupo) {
     //console.log("Grupo created: " + JSON.stringify(grupo));
     callback(grupo);
 })
}

//Update grupo in server
function updateGrupo(grupo) {
 $.ajax({
     method: 'PUT',
     url: 'http://localhost:8080/grupos/' + grupo.id,
     data: JSON.stringify(grupo),
     processData: false,
     headers: {
         "Content-Type": "application/json"
     }
 }).done(function (grupo) {
     ////console.log("Updated grupo: " + JSON.stringify(grupo))
 })
}

//Delete grupo from server
function deleteGrupo(grupoId) {
 $.ajax({
     method: 'DELETE',
     url: 'http://localhost:8080/grupos/' + grupoId
 }).done(function (grupo) {
     //console.log("Deleted grupo " + grupoId)
 })
}

//Show grupo in page
function showGrupo(grupo) {

	document.getElementById("info").innerHTML = '';
	
	document.getElementById("salas").innerHTML = grupo.nombre;
	
	////console.log(grupo);
	var usuario1;
	if (grupo.usuario1 == null) {
		usuario1 = "";
	}
	else {
		usuario1 = grupo.usuario1;
	}
	var usuario2;
	if (grupo.usuario2 == null) {
		usuario2 = "";
	}
	else {
		usuario2 = grupo.usuario2;
	}
	var usuario3;
	if (grupo.usuario3 == null) {
		usuario3 = "";
	}
	else {
		usuario3 = grupo.usuario3;
	}	
		
	 $('#info').append(
			 '<li id="usuario1" class="nav-item"><span style="text-transform: capitalize">' + usuario1 + ' <i class="fas fa-star"></i></span></li>' +
			 '<li id="usuario2" class="nav-item"><span style="text-transform: capitalize">' + usuario2 + '</span></li>' +
			 '<li id="usuario2" class="nav-item"><span style="text-transform: capitalize">' + usuario3 + '</span></li>')
}

//Show grupos in page
function showGrupos(grupos) {
	var tabla = $("#tablaSalas");
	tabla.empty();
	for (var i = 0; i < grupos.length; i++) {
		var size = 0;
		if (grupos[i].usuario1 != '' && grupos[i].usuario1 != null) size++;
		if (grupos[i].usuario2 != '' && grupos[i].usuario2 != null) size++;
		if (grupos[i].usuario3 != '' && grupos[i].usuario3 != null) size++;
		
		if (size > 0 && size < 3) {
			tabla.append('<table class="table">' +
				            '<thead class="thead-dark">' +
					        '<tr>' +
					          '<th scope="col" id="grupo-' + grupos[i].id + '">' + grupos[i].nombre + '</th>' +
					          '<th scope="col" style="text-align: center;">' + size + '/3</th>' +
					          '<th scope="col" style="text-align: right;"><button type="button" class="btn btn-success btn-sm col-lg-6" id="btnEnter">Entrar</button></th>' +
					        '</tr>' +
					      '</thead>' +
					      '<hr/>' +
					    '</table>'
			);
		}
	}
}

$(document).ready(function () {
	var btn = document.getElementById("crearGrupo");
	
	$("#crearGrupo").click(function () {     
		
        if (btn.innerHTML === "Crear Sala") {
			document.getElementById("pantallaInicio").style.visibility = "visible";
	        document.getElementById("formCreateGroup").style.visibility = "visible";
	        document.getElementById("salasDisp").style.visibility = "hidden";
        }       
        //Salir de la sala
        else if (canDisconnect) {
        	myGroupId = '';
        	enSala = false;
        	miSala = null;
        	miSala2 = null;
        	/*loadGrupos(function (grupos) {
        		for (var i = 0; i < grupos.length; i++) {
        			if (grupos[i].usuario1 == usuario) {
        				grupos[i].usuario1 = '';
        				updateGrupo(grupos[i]);
        			}
        			else if (grupos[i].usuario2 == usuario) {
        				grupos[i].usuario2 = '';
        				updateGrupo(grupos[i]);
        			}
        			else if (grupos[i].usuario3 == usuario) {
        				grupos[i].usuario3 = '';
        				updateGrupo(grupos[i]);
        			}
        		}
        	});*/
        	document.getElementById("info").innerHTML = '';
			document.getElementById("salas").innerHTML = '';
			btn.className = "btn btn-success";
            btn.innerHTML = 'Crear Sala';
            document.getElementById("live-chat").style.visibility = "hidden";
        	document.getElementById("abrir-chat").style.visibility = "hidden";
        	document.getElementById("entrarGrupo").style.visibility = "visible";
        	if (nivelJuego === 0.5) {
        		tankaUser2 = '';
        		taliUser2 = '';
        		acroUser2 = '';
        		tanka.alpha = 1;
        		tali.alpha = 1;
        		acro.alpha = 1;
        		miCobaIA = '';
        		tankaCheck.alpha = 0;
        		taliCheck.alpha = 0;
        		acroCheck.alpha = 0;
        		checkSala();
        	}
        	groupConnection.close();
        	creator = false;
        }
	})
	//Crear Sala
	$("#add-buttonCreateRoom").click(function () {
		var nameRepeated = false;
		
		var inputName = $('#nombreSala')
		
		loadGrupos(function (grupos) {
			
			var grupo;
			
			for (var i = 0; i < grupos.length; i++) {
				if (grupos[i].nombre === inputName.val()) {
					nameRepeated = true;
				}
			}
		
			if (nameRepeated) {
				document.getElementById("title").innerHTML = '<span style="color:red"> <b>Nombre de sala ya en uso. Por favor, escoja un nuevo nombre.</b> </span>';
			}
			else {
			    var gameState;
			    createGameState(gameState, function(gameStateWithId) {
			    	myGameId = gameStateWithId.id;
			    });
				if (document.getElementById("password").innerHTML != '') {
					var inputPass = $('#passSala');
					grupoNew = {
					        usuario1: usuario,
					        usuario2: '',
					        usuario3: '',
					        nombre: inputName.val(),
					        password: inputPass.val(),
					        gameId: myGameId
					}	
				}
				
				else {
					grupoNew = {
				        usuario1: usuario,
				        usuario2: '',
				        usuario3: '',
				        nombre: inputName.val(),
				        password: '',
				        gameId: myGameId
				    }
				}
				
				myGroupName = inputName.val();
			    
			    invitar = true;
			    creator = true;
			    //document.getElementById("salas").innerHTML = inputName.val();	
			    
			    document.getElementById("info").innerHTML = '';

			    document.getElementById("salas").innerHTML = inputName.val();

			    ////console.log(grupo);
			    	
			    /* $('#info').append(
			    		 '<li id="usuario1" class="nav-item"><span style="text-transform: capitalize">' + usuario + ' <i class="fas fa-star"></i></span></li>' +
			    		 '<li id="usuario2" class="nav-item"><span style="text-transform: capitalize"></span></li>' +
			    		 '<li id="usuario2" class="nav-item"><span style="text-transform: capitalize"></span></li>')*/
			    
			    connectToGrupos();
			    connectChat();
			    document.getElementById("loaderSalas").style.visibility = "visible";
			    document.getElementById("infoDeSalas").innerHTML = "Creando Sala";
			    document.getElementById("pantallaInicio").style.visibility = "hidden";
	            document.getElementById("formCreateGroup").style.visibility = "hidden";
	            document.getElementById("entrarGrupo").style.visibility = "hidden";
	            btn.className = "btn btn-danger";
	            btn.innerHTML = 'Salir';
	            btn.style.opacity = 0.5;
	            btn.disabled = true;
	            enSala = true;
	            document.getElementById("abrir-chat").style.visibility = "visible";
	            entrandoEnSala = true;
			}	            
		});
		
	});
	$("#entrarGrupo").click(function () {
		if(document.getElementById("entrarGrupo").innerHTML === "Buscar Salas"){
			document.getElementById("pantallaInicio").style.visibility = "visible";
	        document.getElementById("salasDisp").style.visibility = "visible";
	        document.getElementById("formCreateGroup").style.visibility = "hidden";
	        loadGrupos(function (grupos) {
	        	showGrupos(grupos);
	        });
		}
		if(document.getElementById("entrarGrupo").innerHTML === "Controles"){
			document.getElementById("pantallaInicio").style.visibility = "visible";
			document.getElementById("botV").style.visibility = "visible";
			document.getElementById("controlesM").style.visibility = "visible";
		}
	});
	
	$("#botV").click(function () {
		document.getElementById("pantallaInicio").style.visibility = "hidden";
		document.getElementById("botV").style.visibility = "hidden";
		document.getElementById("controlesM").style.visibility = "hidden";
	});
	$("#cerrarTabla").click(function () {
        var element6 = document.getElementById("pantallaInicio");
        element6.style.visibility = "hidden";
        var element5 = document.getElementById("salasDisp");
        element5.style.visibility = "hidden";
    });
	//Entrar en sala
	$("#tablaSalas").click(function (event) {
		var elem = $(event.target);
        if (elem.is('button')) {
            var itemDiv = elem.parent().parent().children();
            var itemId = itemDiv[0].id.split('-')[1];
            //console.log(itemId);
            document.getElementById("live-chat").style.visibility = "visible";
            loadGrupos(function (grupos) {
            	for (var i = 0; i < grupos.length; i++) {
            		if (grupos[i].id == itemId && grupos[i].password === '') {
            			if (grupos[i].usuario2 === ''  || grupos[i].usuario2 == null) {
	            			grupos[i].usuario2 = usuario;
            			}
            			else if (grupos[i].usuario3 === '' || grupos[i].usuario3 == null) {
            				grupos[i].usuario3 = usuario;
            			}
            			//updateGrupo(grupos[i]);
            			//showGrupo(grupos[i]);
            			entrandoEnSala = true;
            			document.getElementById("loaderSalas").style.visibility = "visible";
                        var element6 = document.getElementById("pantallaInicio");
                        element6.style.visibility = "hidden";
                        var element5 = document.getElementById("salasDisp");
                        element5.style.visibility = "hidden";
                        btn.className = "btn btn-danger";
                        btn.innerHTML = 'Salir';
                        btn.style.opacity = 0.5;
                        btn.disabled = true;
                        document.getElementById("entrarGrupo").style.visibility = "hidden";
                        enSala = true;
                        myGroupId = itemId;
                        myGroupName = grupos[i].nombre;
                        if (myGroupName.length > 5) {
                			document.getElementById("infoDeSalas").innerHTML = "Uniendote a<br>" + grupos[i].nombre;
                        }
                        else {
                        	document.getElementById("infoDeSalas").innerHTML = "Uniendote a " + grupos[i].nombre;
            			}
                        myGameId = grupos[i].gameId;
                        loadSala(myGroupId, function (grupo) {
                        	if (nivelJuego === 0.5) {
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
	                    		if (grupo.tankaReady) tankaCheck.alpha = 1;
	                    		else tankaCheck.alpha = 0;
	                    		if (grupo.taliReady) taliCheck.alpha = 1;
	                    		else taliCheck.alpha = 0;
	                    		if (grupo.acroReady) acroCheck.alpha = 1;
	                    		else acroCheck.alpha = 0;
                        	}
                    	});
                        miCobaIA = '';
                        connectToGrupos();
                        connectChat();
            		}
            		else if (grupos[i].id == itemId) {
            			document.getElementById("pantallaInicio").style.zIndex = "10";
            			document.getElementById("pantallaInicio").style.visibility = "visible";
            			document.getElementById("passSalas").style.visibility = "visible";
            			var miGrupo = grupos[i];
            			$("#btnPassSalas").click(function () {            				
            				var inputPassSala = $('#passSalaPriv');
	            			if (inputPassSala.val() == miGrupo.password) {
	            				if (miGrupo.usuario2 === '' || grupos[i].usuario2 == null) {
	    	            			miGrupo.usuario2 = usuario;
	                			}
	                			else if (miGrupo.usuario3 === '' || grupos[i].usuario3 == null) {
	                				miGrupo.usuario3 = usuario;
	                			}
	                			//updateGrupo(miGrupo);
	                			//showGrupo(miGrupo);
	            				entrandoEnSala = true;
	                			document.getElementById("loaderSalas").style.visibility = "visible";
	                            var element6 = document.getElementById("pantallaInicio");
	                            element6.style.zIndex = "2";
	                            element6.style.visibility = "hidden";
	                            var element5 = document.getElementById("salasDisp");
	                            element5.style.visibility = "hidden";
	                            document.getElementById("passSalas").style.visibility = "hidden";
	                            btn.className = "btn btn-danger";
	                            btn.innerHTML = 'Salir';
	                            btn.style.opacity = 0.5;
	                            btn.disabled = true;
	                            document.getElementById("entrarGrupo").style.visibility = "hidden";
	                            enSala = true;
	                            myGroupId = itemId;
	                            myGroupName = grupos[i].nombre;
	                            if (myGroupName.length > 5) {
		                			document.getElementById("infoDeSalas").innerHTML = "Uniendote a<br>" + grupos[i].nombre;
	                            }
	                            else {
	                            	document.getElementById("infoDeSalas").innerHTML = "Uniendote a " + grupos[i].nombre;
	                			}
	                            myGameId = grupos[i].gameId;
	                            if (nivelJuego === 0.5) {
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
	                            miCobaIA = '';
	                            connectToGrupos();
	                            connectChat();
	            			}
	            			else {
	            				document.getElementById("contrasenaDeSala").innerHTML = '<span style="color:red"> <b>La contraseña no es correcta, por favor vuelve a intentarlo</b> </span>';
	            			}
            			});
            		}
            	}
            	
            });
        }
    });
	
	$("#send-btn").click(function () {
		
		if(document.getElementById("textoOwner").value != ""){
			
			//Sacar hora
			var d = new Date();
			var hour = d.getHours();
			var min  =  d.getMinutes();
			var fecha = hour + ":" + min;
			
			
			
	        
			loadGrupos(function(grupos){
				for (var i = 0; i < grupos.length; i++) {
					if (usuario == grupos[i].usuario1 || usuario == grupos[i].usuario2 || usuario == grupos[i].usuario3) {
						var habitacion = grupos[i].nombre;
						loadChats(function (chats) {
							
							var mensaje = document.getElementById("textoOwner").value; 
					        var hora = fecha;
					        var sala = habitacion;
					        
					        //console.log(mensaje + "," + hora + "," + sala + ","  + usuario);

					        var chat = {
					        	mensaje,
					            hora,
					            usuario,
					            sala
					        }
					        
							/*createChat(chat, function (chatWithId) {
			                    //When item with id is returned from server
			    				showChat(chatWithId);
			    				//console.log("todo correcto");
			                });*/
					        
					        
					        
					        
					        
	                    	//var cant = grupos[i].mensajes.length;
	                    	//grupos[i].mensajes[0]= document.getElementById("textoOwner").value;
	                    	////console.log(grupos[i].mensajes[0]);
	                    	////console.log(document.getElementById("textoOwner").value);
	                    	//cant++;
	                    	i = grupos.length;
						});
                    }
                }
			});
		}
	});
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CHAT ///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Load Chats from server
function loadChats(callback) {
    $.ajax({
        url: 'http://localhost:8080/chats'
    }).done(function (chats) {
        ////console.log('Chats loaded: ' + JSON.stringify(chats));
        callback(chats);
    })
}

//Create chat in server
function createChat(chat, callback) {
    $.ajax({
        method: "POST",
        url: 'http://localhost:8080/chats',
        data: JSON.stringify(chat),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (chat) {
        //console.log("Chat created: " + JSON.stringify(chat));
        callback(chat);
    })
}

//Update chat in server
function updateChat(chat) {
    $.ajax({
        method: 'PUT',
        url: 'http://localhost:8080/chats/' + chat.id,
        data: JSON.stringify(chat),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (chat) {
        //console.log("Updated chat: " + JSON.stringify(chat))
    })
}

//Delete chat from server
function deleteChat(chatId) {
    $.ajax({
        method: 'DELETE',
        url: 'http://localhost:8080/chats/' + chatId
    }).done(function (chat) {
        //console.log("Deleted chat " + chatId)
    })
}

//Show chat in page
function showChat(chats) {
	 ////console.log(chats);
	$('#mensajePersona').empty();
	 var message = $('#mensajePersona');
   for(var i = 0; i < chats.length; i++){
	    if (chats[i].sala == miGrupo) {
			message.append(
		    		'<div class="chat-message clearfix">' +
				    '<div class="chat-message-content clearfix">'+
				        '<span class="chat-time"><b>'+ chats[i].hora + '</b></span><h5>'+ chats[i].usuario + '</h5>' +
				        '<p>'+ chats[i].mensaje +'</p>'+
				    '</div>'+
			    '</div>'+ 
			'<hr>')
	    }
   }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//GAME STATE //////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Load Chats from server
function loadGameState(gameId, callback) {
	 $.ajax({
	     url: 'http://localhost:8080/gameStates' + gameId
	 }).done(function (gameState) {
	     ////console.log('Chats loaded: ' + JSON.stringify(chats));
	     callback(gameState);
	 })
}

//Create chat in server
function createGameState(gameState, callback) {
	 $.ajax({
	     method: "POST",
	     url: 'http://localhost:8080/gameStates',
	     data: JSON.stringify(gameState),
	     processData: false,
	     headers: {
	         "Content-Type": "application/json"
	     }
	 }).done(function (gameState) {
	     //console.log("GameState created: " + JSON.stringify(gameState));
	     callback(gameState);
	 })
}

//Update chat in server
function updateGameState(gameState) {
	 $.ajax({
	     method: 'PUT',
	     url: 'http://localhost:8080/gameStates/' + gameState.id,
	     data: JSON.stringify(gameState),
	     processData: false,
	     headers: {
	         "Content-Type": "application/json"
	     }
	 }).done(function (gameState) {
	     //console.log("Updated GameState: " + JSON.stringify(gameState))
	 })
}

//Delete chat from server
function deleteGameState(gameId) {
	 $.ajax({
	     method: 'DELETE',
	     url: 'http://localhost:8080/gameStates/' + gameId
	 }).done(function (gameState) {
	     //console.log("Deleted GameState " + gameId)
	 })
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ADMIN	 //////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function checkUsers() {
	setTimeout(function(){
		loadItems(function (items) {
            for (var i = 0; i < items.length; i++) {
            	if (items[i].checked === false) {
            		//deleteItem(items[i].id);
            		setTimeout(disconnect(items[i].description), 1000);
            	}
            	else {
            		items[i].checked = false;
            		updateItem(items[i]);
            	}
            }
        });
		//console.log(usuario);
        checkUsers();
        loadGrupos(function (grupos) {
        	for (var i = 0; i < grupos.length; i++) {
        		if (grupos[i].usuario1 === '' && grupos[i].usuario2 === '' && grupos[i].usuario3 === '') {
        			deleteGrupo(grupos[i].id);
        		}
        	}
        });
    }, 2000);
}



function hereIam() {
	setTimeout(function(){
		if (enSala) {
            if (miGrupo != '') {
            	/*var misChats = {};
            	var chatSize = 0;;*/
                loadChats(function (chats) {
                    /*for (var i = 0; i < chats.length; i++) {
                        if (chats[i].sala == miGrupo) {
                        	misChats[chatSize] = chats[i];
                        	chatSize++;
                        }
                    }*/
                	showChat(chats);
                    ////console.log(misChats);
                });
               
                //showChat(misChats);
            }
        }
    	/*loadItems(function (items) {    		
    		for (var i = 0; i < items.length; i++) {
            	//if (invitar) showItem(items[i]);
                if (items[i].description == usuario) {
                	items[i].checked = true;
                    updateItem(items[i]);
                }
            }
    		if (miSala != null && enSala) {
    			var user2 = false;
    			var user3 = false;
                for (var j = 0; j < items.length; j++) {
                	if (items[j].description == miSala.usuario2 && !user2) {    			            		
                		user2 = true;
                	}
                	if (items[j].description == miSala.usuario3 && !user3){    			            		
                		user3 = true;
                	}
                }
                if (!user2) {
                	miSala.usuario2 = '';
            		updateGrupo(miSala);
                }
                if (!user3) {
                	miSala.usuario3 = '';
            		updateGrupo(miSala);
                }
    		}
    		if (miSala2 != null && enSala) {
    			var user1 = false;
                for (var j = 0; j < items.length; j++) {
                	if (items[j].description == miSala2.usuario1 && !user1) {    			            		
                		user1 = true;
                	}
                }
                if (!user1) {
                	miSala2.usuario1 = '';
            		updateGrupo(miSala2);
                }
    		}
        });
    	loadVersions(function (versions) {
    		if (cobaIAversion != versions[0].description) {
    			location.reload();
    		}
    	});
        hereIam();*/
    }, 750);
}

function disconnect (description) {
	loadItems(function (items) {
		for (var i = 0; i < items.length; i++) {
			if (items[i].description == description && !items[i].checked) {
				deleteItem(items[i].id);
			}
		}
	});
}

function checkSala() {
	if (tankaUser2 != '') {    
		tanka.alpha = 0.5;
		tankaUser.text = tankaUser2;
	}
	else {
		tanka.alpha = 1;
		tankaUser.text = '';
	}
	if (taliUser2 != '') {
		tali.alpha = 0.5;
		taliUser.text = taliUser2;
	}
	else {
		tali.alpha = 1;
		taliUser.text = '';
	}
	if (acroUser2 != '') {
		acro.alpha = 0.5;
		acroUser.text = acroUser2;
	}
	else {
		acro.alpha = 1;
		acroUser.text = '';
	}
}

function connectToGrupos() {
groupConnection = new WebSocket('ws://localhost:8080/salas');


	
	groupConnection.onopen = function() {
		var msg = {
			name : usuario,
			message : 'hi',
			groupId : myGroupName
		}
		groupConnection.send(JSON.stringify(msg));
	}
	
	groupConnection.onerror = function(e) {
		//console.log("WS error: " + e);
	}
	groupConnection.onmessage = function(msg) {
		//console.log("WS message: " + msg.data + myGroupId);
		var message = JSON.parse(msg.data);
		if (message.groupId == myGroupName) {
			if (message.message == "bye") {
				if (nivelJuego == 0.5) {
					switch (message.name) {
					case tankaUser.text:
						tankaUser.text = '';
						tanka.alpha = 1;
						tankaCheck.alpha = 0;
						break;
					case taliUser.text:
						taliUser.text = '';
						tali.alpha = 1;
						taliCheck.alpha = 0;
						break;
					case acroUser.text:
						acroUser.text = '';
						acro.alpha = 1;
						acroCheck.alpha = 0;
						break;
					default:
						break;
					}
				}
				setTimeout(function() {
					loadSala(myGroupId, function (grupo) {
						if (grupo.usuario1 == message.name) {
							grupo.usuario1 = grupo.usuario2;
							grupo.usuario2 = grupo.usuario3;
							grupo.usuario3 = "";
						}
						else if (grupo.usuario2 == message.name) {
							grupo.usuario2 = grupo.usuario3;
							grupo.usuario3 = "";
						}
						else if (grupo.usuario2 == message.name) {
							grupo.usuario3 = "";						
						}
						showGrupo(grupo);
					});
				}, 2000);
			}
			else if (message.message == "hi" && message.name == usuario) {
				
				canDisconnect = true;
				var btn = document.getElementById("crearGrupo");
				btn.style.opacity = 1;
				btn.disabled = false;
				if (creator) {
					createGrupo(grupoNew, function (grupoWithId) {
				    	myGroupId = grupoWithId.id;
				    	if (nivelJuego === 0.5) {
				    		tankaCheck.alpha = 0;
			        		taliCheck.alpha = 0;
			        		acroCheck.alpha = 0;
				    		switch (miCobaIA) {
				    		case 'tankabaIA':
				    			loadSala(myGroupId, function(grupo) {
				    				grupo.tanka = usuario;
				    				updateGrupo(grupo);
				    			});
				    			break;
				    		case 'talibaIA':
				    			loadSala(myGroupId, function(grupo) {
				    				grupo.tali = usuario;
				    				updateGrupo(grupo);
				    			});
				    			break;
				    		case 'acrobaIA':
				    			loadSala(myGroupId, function(grupo) {
				    				grupo.acro = usuario;
				    				updateGrupo(grupo);
				    			});
				    			break;
				    		default:
				    			break;
				    		}
				    	}
				    	document.getElementById("loaderSalas").style.visibility = "hidden";
						entrandoEnSala = false;
						showGrupo(grupoWithId);
				    });
				}
				else {
					loadSala(myGroupId, function (grupo) {
						document.getElementById("loaderSalas").style.visibility = "hidden";
						entrandoEnSala = false;
						showGrupo(grupo);
					});
				}
			}
			else {
				loadSala(myGroupId, function (grupo) {
					document.getElementById("loaderSalas").style.visibility = "hidden";
					entrandoEnSala = false;
					showGrupo(grupo);
				});
			}
		}
	}
	groupConnection.onclose = function() {
		console.log("Closing group socket");
		setTimeout(function() {
			connectToGrupos();
		}, 1000);
	}
}

function connectToUsers() {
	usersConnection = new WebSocket('ws://localhost:8080/users');
		
	usersConnection.onopen = function() {
		var msg = {
			name : usuario,
			message : 'hi'
		}
		usersConnection.send(JSON.stringify(msg));
		stillAlive();
	}
	
	usersConnection.onerror = function(e) {
		//console.log("WS error: " + e);
	}
	usersConnection.onmessage = function(msg) {
		//console.log("WS message: " + msg.data);
		var message = JSON.parse(msg.data);
		if (message.message == "User Repeated") {
			document.getElementById("loader").style.visibility = "hidden";
			$("body").prepend("<div>" +
						        '<button type="button" id="btnRegistrarse" style="margin: 50px 1750px; position: absolute;	z-index: 30; width: 120px;"class="btn btn-success">Crear Cuenta</button>' +
						    "</div>");
			$("#formInicial").append('<label for="exampleInputEmail1" id="title">Antes de ' +
									'continuar, añada su nombre de usuario.</label> <input type="email" ' +
										'class="form-control " id="exampleInputEmail1" ' +
										'aria-describedby="emailHelp" placeholder="Nombre de usuario" >' +
									'<label for="passUser" id="contrasena">Añada una contraseña</label> <input type="password" ' +
						                'class="form-control " id="passUser" ' +
						                'placeholder="Contraseña">' +
						            '<div id="confirmPass" style="visibility: hidden; display:none;">' +
						            	'<label for="passUser" id="confirmContrasena">Por favor, repita la contraseña</label> <input type="password" ' +
						                'class="form-control " id="passUser2" ' +
						                'placeholder="Contraseña">' +
						            '</div>');
			$(".formulario").append('<div class="boton">' +
										'<button type="button" id="add-button" class="btn btn-success">Aceptar</button>' +
									'</div>');
			document.getElementById("title").innerHTML = '<span style="color:red"> <b>Usuario ya conectado</b> </span>';
			logInSignIn();
		}
		else {
			var element3 = document.getElementById("pantallaInicio");
            element3.style.visibility = "hidden";
            element3.style.zIndex = "2";
            document.getElementById("loader").style.visibility = "hidden";
		}
	}
	usersConnection.onclose = function() {
		console.log("Closing users socket");
		setTimeout(function() {
			connectToUsers();
		}, 1000);
	}
	usersConnection.onerror = function(e) {
		document.getElementById("pantallaInicio").style.visibility = "visible";
		document.getElementById("pantallaInicio").style.zIndex = "50";
		document.getElementById("error").innerHTML = "Parece que TalibaIA ha mordido algunos cables de más... <br>Error: " + e;
		document.getElementById("imgTali").style.visibility = "visible";
	}
}

function stillAlive() {
	if (usersConnection != null) {
		if (usersConnection.readyState === 1) {
			var msg = {
				name : usuario,
				message : 'still alive'
			}
			usersConnection.send(JSON.stringify(msg));
		}
	}
	if (connection != null) {
		if (connection.readyState === 1) {
				var msg = {
					name : usuario,
					message : 'still alive'
				}
				connection.send(JSON.stringify(msg));
		}
	}
	if (playerConnection != null) {
		if (playerConnection.readyState === 1) {
			var msg = {
				name : usuario,
				message : 'still alive'
			}
			playerConnection.send(JSON.stringify(msg));
		}
	}
	if (groupConnection != null) {
		if (groupConnection.readyState === 1) {
			var msg = {
				name : usuario,
				message : 'still alive'
			}
			groupConnection.send(JSON.stringify(msg));
		}
	}
	if (chatConnection != null) {
		if (chatConnection.readyState === 1) {
			var msg = {
				name : usuario,
				message : 'still alive'
			}
			chatConnection.send(JSON.stringify(msg));
		}
	}
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// CONTROLES COBAIAS /////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

var canConnect = false;
var readyToUpdate = true;
var chatIsFocused = false;
var stillAliveInterval = setInterval(stillAlive, 20000);

var wTankaDown = false;
var aTankaDown = false;
var sTankaDown = false;
var dTankaDown = false;
var shiftTankaDown = false;
var wTaliDown = false;
var aTaliDown = false;
var sTaliDown = false;
var dTaliDown = false;
var shiftTaliDown = false;
var wAcroDown = false;
var aAcroDown = false;
var sAcroDown = false;
var dAcroDown = false;
var shiftAcroDown = false;
var currentWDown = false;
var currentADown = false;
var currentSDown = false;
var currentDDown = false;
var currentShiftDown = false;