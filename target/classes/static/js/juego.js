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

var t = 0;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ITEMS ///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
        console.log("Updated item: " + JSON.stringify(item))
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
        '<div id="item-' + item.id + '"><input type="checkbox" ' + checked + '><span ' + style + '>' + item.description +
        '</span> </div>')
}

$(document).ready(function () {

    loadItems(function (items) {
        //When items are loaded from server
        for (var i = 0; i < items.length; i++) {
            showItem(items[i]);
        }
    });

    var input = $('#exampleInputEmail1')
    var info = $('#info')

    //Handle delete buttons
    info.click(function (event) {
        var elem = $(event.target);
        if (elem.is('button')) {
            var itemDiv = elem.parent();
            var itemId = itemDiv.attr('id').split('-')[1];
            itemDiv.remove()
            deleteItem(itemId);
        }
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
        input.val(''); 

        var item = {
            description: value,
            checked: false
        }
        
        loadItems(function (items) {
    		console.log("Entra en loadItems");
    		console.log("value: " + value);
    		
    		if(items.length == 0){
    			
    			createItem(item, function (itemWithId) {
                    //When item with id is returned from server
                    showItem(itemWithId);
                });
            
                var element = document.getElementById("exampleInputEmail1");
                element.parentNode.removeChild(element);
                var element1 = document.getElementById("add-button");
                element1.parentNode.removeChild(element1);
                var element2 = document.getElementById("title");
                element2.parentNode.removeChild(element2);
                var element3 = document.getElementById("pantallaInicio");
                element3.parentNode.removeChild(element3);
                
                usuario = value;
    		
    		}else{
    		
	            for (var i = 0; i < items.length; i++) {
	            	
	            	if (items[i].description == value){
	                	
						document.getElementById("title").innerHTML = '<span style="color:red"> <b>Nombre de usuario ya en uso. Por favor, escoja un nuevo nombre.</b> </span>';
								
	                	console.log("usuario repetido");
	                	
	                	
	                }else{
	                	
	                	createItem(item, function (itemWithId) {
	                        //When item with id is returned from server
	                        showItem(itemWithId);
	                    });
	                
	                    var element = document.getElementById("exampleInputEmail1");
	                    element.parentNode.removeChild(element);
	                    var element1 = document.getElementById("add-button");
	                    element1.parentNode.removeChild(element1);
	                    var element2 = document.getElementById("title");
	                    element2.parentNode.removeChild(element2);
	                    var element3 = document.getElementById("pantallaInicio");
	                    element3.parentNode.removeChild(element3);
	                    
	                    usuario = value;
	                }
	            }
            }
        })  
    })
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// VERSION ///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

var cobaIAversion = "1.2";

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

function hereIam() {
	setTimeout(function(){
		t++;
		if (t > 100) {
			t = 0;
		}
    	loadItems(function (items) {
    		document.getElementById("info").innerHTML = "";
            for (var i = 0; i < items.length; i++) {
            	showItem(items[i]);
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
    	if (t == 100) {
    		loadItems(function (items) {
                //When items are loaded from server
        		//document.getElementById("info").innerHTML = "";
                for (var i = 0; i < items.length; i++) {
                    //showItem(items[i]);
                    if (!items[i].checked) {
                    	setTimeout(disconect(items[i]), 555);
                    }
                    items[i].checked = false;
                    updateItem(items[i]);
                }
            });
    	}
        hereIam();
    }, 10);
}

function checkUsers() {
    setTimeout(function(){
    	loadItems(function (items) {
            //When items are loaded from server
    		document.getElementById("info").innerHTML = "";
            for (var i = 0; i < items.length; i++) {
                showItem(items[i]);
                if (!items[i].checked) {
                	setTimeout(disconect(items[i]), 555);
                }
                items[i].checked = false;
                updateItem(items[i]);
            }
        });
        checkUsers();
    }, 2000);
}

function disconect (item) {
	console.log("hola");
	if (!item.checked) deleteItem(item.id);
}
