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
// GESTIÓN DEL SERVIDOR ///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

checkUsers();
hereIam();

var usuario = '';
var conectado = false;

//Load items from server
function loadItems(callback) {
    $.ajax({
        url: 'http://25.76.106.32:8080/items'
    }).done(function (items) {
        //console.log('Items loaded: ' + JSON.stringify(items));
        callback(items);
    })
}

//Create item in server
function createItem(item, callback) {
    $.ajax({
        method: "POST",
        url: 'http://25.76.106.32:8080/items',
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
        url: 'http://25.76.106.32:8080/items/' + item.id,
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
        url: 'http://25.76.106.32:8080/items/' + itemId
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
        '</span> <button class="btn btn-danger">Delete</button></div>')
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
        
        usuario = value;
        conectado = true;

        var item = {
            description: value,
            checked: false
        }

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
    })
})

function checkUsers() {
    setTimeout(function(){
        //console.log(baseCharles.getVolume());
    	loadItems(function (items) {
            //When items are loaded from server
    		document.getElementById("info").innerHTML = "";
            for (var i = 0; i < items.length; i++) {
                showItem(items[i]);
                if (!items[i].checked) {
                	setTimeout(disconect(items[i]), 1000);
                }
                items[i].checked = false;
                updateItem(items[i]);
            }
        });
        checkUsers();
    }, 2000);
}

function disconect (item) {
	if (!item.checked) deleteItem(item.id);
}

function hereIam() {
	setTimeout(function(){
    	loadItems(function (items) {
            for (var i = 0; i < items.length; i++) {
                if (items[i].description == usuario) {
                	items[i].checked = true;
                    updateItem(items[i]);
                }
            }
        });
        hereIam();
    }, 10);
}
