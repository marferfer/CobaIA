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
            musica[0].play();
            for (var i = 1; i < musica.length; i++) {
                musica[i].stop();
            }
            nivel0off = false;
        }
        else if (nivelJuego === 1 && nivel1off) {
            musica[1].setVolume(0.65);
            musica[1].play();
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
