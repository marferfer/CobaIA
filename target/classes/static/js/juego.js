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
        //console.log(baseCharles.getVolume());
        loop();
    }, 2000);
}



///////////////////////////////////////////////////////////////////////////////////

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


var b = null;
getUsersAndPasswords(function (a){
	b = a[0];
	console.log(a);
});


setTimeout(function(){console.log(b)}, 1000);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ITEMS ///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//no borrar de momento, puede resultar util mas tarde
/*function hola123(callback){
	$.ajax({
		url:'http://localhost:8080/items/{password}'
	}).done(function(items){
		callback(items);
	})
}

hola123(function (pw) {
    console.log(pw);
});*/

//Load items from server
function loadItems(callback) {
    $.ajax({
        url: 'http://localhost:8080/items'
    }).done(function (items) {
        //console.log('Items loaded: ' + JSON.stringify(items));
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
        console.log("Item created: " + JSON.stringify(item));
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
        //console.log("Updated item: " + JSON.stringify(item))
    })
}

//Delete item from server
function deleteItem(itemId) {
    $.ajax({
        method: 'DELETE',
        url: 'http://localhost:8080/items/' + itemId
    }).done(function (item) {
        console.log("Deleted item " + itemId)
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
	console.log('hola');
}

$(document).ready(function () {

    var input = $('#exampleInputEmail1')
    var input2 = $('#passUser')
    var info = $('#info')

    //Handle delete buttons
    $('li').click(function (event) {
    	console.log('hola');
    	
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

    //Handle add button
    $("#add-button").click(function () {

        var value = input.val();
        var value2 = input2.val();
        input.val(''); 
        input2.val('');

        var item = {
            description: value,
            password: value2,
            checked: false
        }
        
        loadItems(function (items) {
    		console.log("Entra en loadItems");
    		console.log("value: " + value);
    		
    		document.getElementById("nombreChat").innerHTML = "<h4 >"+value+"</h4 >";
    		
    		if(items.length == 0){
    			
    			createItem(item, function (itemWithId) {
                    //When item with id is returned from server
    				showUser(itemWithId);
    				addUserToFile(itemWithId);
                });
            
                var element = document.getElementById("exampleInputEmail1");
                element.parentNode.removeChild(element);
                var element1 = document.getElementById("add-button");
                element1.parentNode.removeChild(element1);
                var element2 = document.getElementById("title");
                element2.parentNode.removeChild(element2);
                var element3 = document.getElementById("pantallaInicio");
                element3.style.visibility = "hidden";
                var element4 = document.getElementById("contrasena");
                element4.parentNode.removeChild(element4);
                var element5 = document.getElementById("passUser");
                element5.parentNode.removeChild(element5);

                
                usuario = value;
                if (usuario == "admin") {
        			checkUsers();
        		}
    		
    		}
    		
    		else {
            	
            	userRepeated = false;
    		
	            for (var i = 0; i < items.length; i++) {
	            	
	            	if (items[i].description == value){
	                	
						document.getElementById("title").innerHTML = '<span style="color:red"> <b>Nombre de usuario ya en uso. Por favor, escoja un nuevo nombre.</b> </span>';
								
	                	console.log("usuario repetido");
	                	userRepeated = true;	                	
	                }
	            } 
	            if (!userRepeated) {
                	
                	createItem(item, function (itemWithId) {
                        //When item with id is returned from server
                		showUser(itemWithId);
                		addUserToFile(itemWithId);
                    });
                
                    var element = document.getElementById("exampleInputEmail1");
                    element.parentNode.removeChild(element);
                    var element1 = document.getElementById("add-button");
                    element1.parentNode.removeChild(element1);
                    var element2 = document.getElementById("title");
                    element2.parentNode.removeChild(element2);
                    var element3 = document.getElementById("pantallaInicio");
                    element3.style.visibility = "hidden";
                    var element4 = document.getElementById("contrasena");
                    element4.parentNode.removeChild(element4);
                    var element5 = document.getElementById("passUser");
                    element5.parentNode.removeChild(element5); 

                    
                    usuario = value;
                    if (usuario == "admin") {
            			checkUsers();
            		}
                }
            }
        })
    })
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// VERSION ///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

var cobaIAversion = "1.6";

//Load VERSIONS from server
function loadVersions(callback) {
    $.ajax({
        url: 'http://localhost:8080/versions'
    }).done(function (versions) {
        //console.log('Versions loaded: ' + JSON.stringify(versions));
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
        console.log("Version created: " + JSON.stringify(version));
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
        console.log("Updated version: " + JSON.stringify(version))
    })
}

//Delete version from server
function deleteVersion(versionId) {
    $.ajax({
        method: 'DELETE',
        url: 'http://localhost:8080/versions/' + versionId
    }).done(function (version) {
        console.log("Deleted version " + versionId)
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



//Load grupos from server
function loadGrupos(callback) {
 $.ajax({
     url: 'http://localhost:8080/grupos'
 }).done(function (grupos) {
     //console.log('Versions loaded: ' + JSON.stringify(grupos));
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
     console.log("Grupo created: " + JSON.stringify(grupo));
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
     console.log("Updated grupo: " + JSON.stringify(grupo))
 })
}

//Delete grupo from server
function deleteGrupo(grupoId) {
 $.ajax({
     method: 'DELETE',
     url: 'http://localhost:8080/grupos/' + grupoId
 }).done(function (grupo) {
     console.log("Deleted grupo " + grupoId)
 })
}

//Show grupo in page
function showGrupo(grupo) {

document.getElementById("info").innerHTML = '';

console.log(grupo);
	
 $('#info').append(
		 '<li id="usuario1" class="nav-item"><span style="text-transform: capitalize">' + grupo.usuario1 + '</span></li>' +
		 '<li id="usuario2" class="nav-item"><span style="text-transform: capitalize">' + grupo.usuario2 + '</span></li>' +
		 '<li id="usuario2" class="nav-item"><span style="text-transform: capitalize">' + grupo.usuario3 + '</span></li>')
}

//Show grupos in page
function showGrupos(grupos) {
	var tabla = $("#tablaSalas");
	tabla.empty();
	for (var i = 0; i < grupos.length; i++) {
		var size = 0;
		if (grupos[i].usuario1 != '') size++;
		if (grupos[i].usuario2 != '') size++;
		if (grupos[i].usuario3 != '') size++;
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

$(document).ready(function () {
	var btn = document.getElementById("crearGrupo");
	$("#crearGrupo").click(function () {     
		
        if (btn.innerHTML === "Crear Sala") {
			document.getElementById("pantallaInicio").style.visibility = "visible";
	        document.getElementById("formCreateGroup").style.visibility = "visible";
	        document.getElementById("salasDisp").style.visibility = "hidden";
        }        
        else {
        	
        	loadGrupos(function (grupos) {
        		for (var i = 0; i < grupos.length; i++) {
        			if (grupos[i].usuario1 === usuario) {
        				grupos[i].usuario1 = '';
        				updateGrupo(grupos[i]);
        			}
        			else if (grupos[i].usuario2 === usuario) {
        				grupos[i].usuario2 = '';
        				updateGrupo(grupos[i]);
        			}
        			else if (grupos[i].usuario3 === usuario) {
        				grupos[i].usuario3 = '';
        				updateGrupo(grupos[i]);
        			}
        			document.getElementById("info").innerHTML = '';
        			document.getElementById("salas").innerHTML = '';
        			btn.className = "btn btn-success";
                    btn.innerHTML = 'Crear Sala';
        		}
        	});
        }
	})
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
				if (document.getElementById("password").innerHTML != '') {
					var inputPass = $('#passSala');
					grupo = {
					        usuario1: usuario,
					        usuario2: '',
					        usuario3: '',
					        nombre: inputName.val(),
					        password: inputPass.val()
					}	
				}
				
				else {
					grupo = {
				        usuario1: usuario,
				        usuario2: '',
				        usuario3: '',
				        nombre: inputName.val(),
				        password: ''
				    }
				}
			    
			    invitar = true;
			    document.getElementById("salas").innerHTML = inputName.val();	
			    createGrupo(grupo, function (grupoWithId) {
			    	showGrupo(grupoWithId);
			    });
			    document.getElementById("pantallaInicio").style.visibility = "hidden";
	            document.getElementById("formCreateGroup").style.visibility = "hidden";
	            btn.className = "btn btn-danger";
	            btn.innerHTML = 'Salir';
			}	            
		});
	});
	$("#entrarGrupo").click(function () {  
		document.getElementById("pantallaInicio").style.visibility = "visible";
        document.getElementById("salasDisp").style.visibility = "visible";
        document.getElementById("formCreateGroup").style.visibility = "hidden";
        loadGrupos(function (grupos) {
        	showGrupos(grupos);
        });
	});
	$("#cerrarTabla").click(function () {
        var element6 = document.getElementById("pantallaInicio");
        element6.style.visibility = "hidden";
        var element5 = document.getElementById("salasDisp");
        element5.style.visibility = "hidden";
    });
	$("#tablaSalas").click(function (event) {
        var elem = $(event.target);
        if (elem.is('button')) {
            var itemDiv = elem.parent().parent().children();
            var itemId = itemDiv[0].id.split('-')[1];
            console.log(itemId);
            loadGrupos(function (grupos) {
            	for (var i = 0; i < grupos.length; i++) {
            		if (grupos[i].id == itemId) {
            			if (grupos[i].usuario2 === '') {
	            			grupos[i].usuario2 = usuario;
            			}
            			else if (grupos[i].usuario3 === '') {
            				grupos[i].usuario3 = usuario;
            			}
            			updateGrupo(grupos[i]);
            			showGrupo(grupos[i]);
            		}
            	}
            });
        }
    });
})


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
		console.log(usuario);
        checkUsers();
    }, 1000);
}

function hereIam() {
	setTimeout(function(){
    	loadItems(function (items) {
    		//document.getElementById("info").innerHTML = '';
    		for (var i = 0; i < items.length; i++) {
            	//if (invitar) showItem(items[i]);
                if (items[i].description == usuario) {
                	items[i].checked = true;
                    updateItem(items[i]);
                }
            }
        });
    	loadVersions(function (versions) {
    		if (cobaIAversion != versions[0].description) {
    			location.reload();
    		}
    	});
        hereIam();
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
