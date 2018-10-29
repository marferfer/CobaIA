

function preload() {

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// SONIDO   //////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /*createjs.Sound.registerSound("assets/salto.mp3", salto);
    createjs.Sound.registerSound("assets/risa.mp3", risa);
    createjs.Sound.registerSound("assets/posion.mp3", posion);
    createjs.Sound.registerSound("assets/disparo.mp3", disparo);
    createjs.Sound.registerSound("assets/pierde_vida.mp3", pierde_vida);
    createjs.Sound.registerSound("assets/muerte_malo.mp3", muerte_malo);
    createjs.Sound.registerSound("assets/dolor.mp3", dolor);
    createjs.Sound.registerSound("assets/paso.mp3", paso);
    createjs.Sound.registerSound("assets/perder.mp3", perder);
    createjs.Sound.registerSound("assets/maldad.mp3", maldad);
    createjs.Sound.registerSound("assets/maldad_2.mp3", maldad_2);
    createjs.Sound.registerSound("assets/maldad_3.mp3", maldad_3);
    createjs.Sound.registerSound("assets/maldad_4.mp3", maldad_4);
    createjs.Sound.registerSound("assets/fondo.mp3", fondo);*/
   /* setTimeout(function () {
        instance = createjs.Sound.play(fondo, {interrupt: createjs.Sound.INTERRUPT_ANY, loop: -1});
        instance.volume = 0.15;
    }, 3000);*/


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// IMAGENES Y FISICAS  ///////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    juego.state.add("recarga", Phaser.Preload);

    juego.load.image('fondoN1', 'assets/images/fondoN1.png');
    juego.load.image('sueloN1Parte1', 'assets/images/sueloN1Parte1.png');
    juego.load.image('sueloN1Parte2', 'assets/images/sueloN1Parte2.png');

    juego.load.image('chip', 'assets/images/chip.png');
    juego.load.image('tierra', 'assets/images/tierra.png');
    juego.load.image('tuboMid', 'assets/images/tuboMid.png');
    juego.load.image('escalera', 'assets/images/escalera.png');
    juego.load.image('pua', 'assets/images/puas.png');
    juego.load.image('roca', 'assets/images/roca.png');
    juego.load.image('caja', 'assets/images/caja.png');
    juego.load.image('arbol', 'assets/images/arbol.png');
    juego.load.image('laser_der', 'assets/images/laser_der.png');
    juego.load.image('laser_izq', 'assets/images/laser_izq.png');
    juego.load.image('circulo', 'assets/images/circulo.png');
    juego.load.image('mensaje', 'assets/images/mensaje.png');
    juego.load.image('tuboN1Completo', 'assets/images/tuboN1Completo.png');
    juego.load.image('cobaIA', 'assets/images/cobaIA.png');
    juego.load.image('cable', 'assets/images/cable.png');
    juego.load.image('frasco', 'assets/images/frasco.png');
    juego.load.image('plataformaMovil', 'assets/images/plataformaMovil.png');
    juego.load.image('boton', 'assets/images/boton.png');
    juego.load.image('conexionTuboArriba', 'assets/images/conexionTuboArriba.png');
    juego.load.image('conexionTuboDerecha', 'assets/images/conexionTuboDerecha.png');
    juego.load.image('indicadorJ1', 'assets/indicadorJ1.png');
    juego.load.image('indicadorJ2', 'assets/indicadorJ2.png');
    juego.load.image('indicadorJ3', 'assets/indicadorJ3.png');

    juego.load.spritesheet('compuerta', 'assets/images/compuerta.png', 125, 547);
    juego.load.spritesheet('personaje', 'assets/images/personaje.png', 47, 73);
    juego.load.spritesheet('controller-indicator', 'assets/images/controller-indicator.png',16, 16);
    juego.load.spritesheet('cajaCableado', 'assets/images/cajaCableado.png', 54 , 70);
    juego.load.spritesheet('talibaIAmovimiento', 'assets/images/talibaIAmovimiento.png', 93, 51, 29, 6, 7);

    juego.load.physics('sueloN1Parte1Collisions', 'assets/data/sueloN1Parte1.json');
    juego.load.physics('sueloN1Parte2Collisions', 'assets/data/sueloN1Parte2.json');
    juego.load.physics('cajaCollisions', 'assets/data/caja.json');
    juego.load.physics('personajeCollisions', 'assets/data/personaje.json');
    juego.load.physics('tuboN1CompletoCollisions', 'assets/data/tuboN1Completo.json');
    
}

function create() {

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// FISICAS DEL MUNDO   ///////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    juego.physics.startSystem(Phaser.Physics.P2JS); //activamos el motor de fisicas
    juego.physics.p2.setImpactEvents(true);         //le decimos que detecte los eventos para las colisiones
    juego.physics.p2.gravity.y = 600;               //ajustamos la gravedad
    juego.world.setBounds(0, 0, 5000, 1384);        // Establecemos los límites del juego completo


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// NIVEL 1   /////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    nivel1.fondo = juego.add.sprite(0, 0, 'fondoN1');

    //Decorados que se ven detras del jugador
    nivel1.decorados[0] = juego.add.image(1765, juego.world.height - 650, 'frasco');
    nivel1.decorados[1] = juego.add.image(1450, juego.world.height - 650, 'cable');


    nivel1.grupo = juego.add.group();
    nivel1.grupo.enableBody = true;
    nivel1.grupo.physicsBodyType = Phaser.Physics.P2JS;

    let sueloN1 = nivel1.grupo.create(0, juego.world.height -300, 'sueloN1Parte1');
    juego.physics.p2.enableBody(sueloN1);

    sueloN1.body.clearShapes();
    sueloN1.body.loadPolygon('sueloN1Parte1Collisions', 'sueloN1Parte1');
    sueloN1.body.static = true;
    sueloN1.body.debug = true;
    
    sueloN1.body.x = 1700;
    sueloN1.body.y = juego.world.height - 700;

    sueloN1 = nivel1.grupo.create(0, juego.world.height -300, 'sueloN1Parte2');
    juego.physics.p2.enableBody(sueloN1);

    sueloN1.body.clearShapes();
    sueloN1.body.loadPolygon('sueloN1Parte2Collisions', 'sueloN1Parte2');
    sueloN1.body.static = true;
    sueloN1.body.debug = true;
    
    sueloN1.body.x = 9900;
    sueloN1.body.y = juego.world.height - 700;

    //nivel1.suelo = sueloN1;

    //fondo.fixedToCamera = true; // Lo dejará fijo ante la cámara
    

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// TECLAS   //////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    tecla_laser = juego.input.keyboard.addKey(Phaser.Keyboard.E);

    tecla_accion = juego.input.keyboard.addKey(Phaser.Keyboard.X);

    //Movimiento de la TankabaIA
    cursores = juego.input.keyboard.createCursorKeys();

    //Movimiento de la AcrobaIA
    ctrlW = juego.input.keyboard.addKey(Phaser.Keyboard.W);
    ctrlA = juego.input.keyboard.addKey(Phaser.Keyboard.A);
    ctrlS = juego.input.keyboard.addKey(Phaser.Keyboard.S);
    ctrlD = juego.input.keyboard.addKey(Phaser.Keyboard.D);

    //movimiento de la TalibaIA
    ctrlH = juego.input.keyboard.addKey(Phaser.Keyboard.H);
    ctrlB = juego.input.keyboard.addKey(Phaser.Keyboard.B);
    ctrlN = juego.input.keyboard.addKey(Phaser.Keyboard.N);
    ctrlM = juego.input.keyboard.addKey(Phaser.Keyboard.M);

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// INDICADORES   /////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    indicator = juego.add.sprite(1000, juego.world.height - 300, 'controller-indicator');
    indicator.scale.x = indicator.scale.y = 2;
    indicator.animations.frame = 1;

    
    
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// COMPUERTAS   //////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    compuertas.grupo = juego.add.group();
    compuertas.grupo.enableBody = true;
    compuertas.grupo.physicsBodyType = Phaser.Physics.P2JS;

    let compuerta = compuertas.grupo.create(0, 0, 'compuerta');

    compuerta.body.debug = true;
    compuerta.body.static = true;
    compuerta.pivot.y = 250;
    compuerta.body.setRectangle(75, 25);
    compuerta.animations.frame = 1;
    compuerta.body.x = 4475;
    compuerta.body.y = juego.world.height - 500;
    compuertas.lista.push(compuerta);

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// CAJAS DE CABLEADO   ///////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    cajasCableado.grupo = juego.add.group();
    cajasCableado.grupo.enableBody = true;
    cajasCableado.grupo.physicsBodyType = Phaser.Physics.P2JS;

    let cajaCableado = cajasCableado.grupo.create(0, 0, 'cajaCableado');

    cajaCableado.body.debug = false;
    cajaCableado.animations.frame = 0;
    cajaCableado.animations.add('caja_rota', [1, 2, 3], 10, true);
    cajaCableado.body.static = true;
    cajaCableado.body.setRectangle(23, 69, 15);
    cajaCableado.body.x = 1900;
    cajaCableado.body.y = juego.world.height - 210;
    cajasCableado.lista.push(cajaCableado);

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// TUBOS   ///////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    tubos.grupo = juego.add.group();
    tubos.grupo.enableBody = true;
    tubos.grupo.physicsBodyType = Phaser.Physics.P2JS;

    let tubo = tubos.grupo.create(0, 0, 'tuboN1Completo');

    tubo.body.clearShapes();
    tubo.body.loadPolygon('tuboN1CompletoCollisions', 'tuboN1Completo');

    tubo.body.static = true;
    tubo.body.debug = true;
    tubo.body.x = 2150;
    tubo.body.y = juego.world.height - 675;
    tubo.body.collideWorldBounds = true;
    
    tubos.lista.push(tubo);

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// BOTONES   /////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    botones.grupo = juego.add.group();
    botones.grupo.enableBody = true;
    botones.grupo.physicsBodyType = Phaser.Physics.P2JS;

    let boton = botones.grupo.create(0, 0, 'boton');

    boton.body.setRectangle(61, 15, 0, -5);
    boton.body.debug = true;
    boton.body.static = true;
    boton.body.x = 2600;
    boton.body.y = juego.world.height - 275;

    botones.lista.push(boton);

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// PLATAFORMAS MOVILES   /////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    plataformasMoviles.grupo = juego.add.group();
    plataformasMoviles.grupo.enableBody = true;
    plataformasMoviles.grupo.physicsBodyType = Phaser.Physics.P2JS;

    let plataformaMovil = plataformasMoviles.grupo.create(0, 0, 'plataformaMovil');

    plataformaMovil.body.debug = true;
    plataformaMovil.body.static = true;
    plataformaMovil.pivot.x = 150;
    plataformaMovil.body.setRectangle(300, 25, -150);
    plataformaMovil.body.x = 3000;
    plataformaMovil.body.y = juego.world.height - 460;
    plataformaMovil.body.collideWorldBounds = true;

    plataformasMoviles.lista.push(plataformaMovil);
   
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// CAJAS   ///////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        cajas.grupo = juego.add.group();
    cajas.grupo.enableBody = true;
    cajas.grupo.physicsBodyType = Phaser.Physics.P2JS;
    //cajas.collisionGroup = juego.physics.p2.createCollisionGroup();

    //let caja = juego.add.sprite(2315, juego.world.height - 300, 'caja');
    let caja = cajas.grupo.create(900, juego.world.height -300, 'caja');
    //caja.body.setCollisionGroup(cajas.collisionGroup);
    //caja.body.collides([cajas.collisionGroup, nivel1.collisionGroup]);

    juego.physics.p2.enableBody(caja);
    caja.body.clearShapes();
    caja.body.loadPolygon('cajaCollisions', 'caja');
    caja.scale.setTo(1, 1);
    caja.body.dynamic = true;
    caja.body.mass = 80;
    caja.body.debug = false;
    caja.body.collideWorldBounds = true;
    cajas.lista.push(caja);

    caja = cajas.grupo.create(2415, juego.world.height -500, 'caja');
    //caja.body.setCollisionGroup(cajas.collisionGroup);
    //caja.body.collides([cajas.collisionGroup, nivel1.collisionGroup]);
 
    juego.physics.p2.enableBody(caja);
    caja.body.clearShapes();
    caja.body.loadPolygon('cajaCollisions', 'caja');
    caja.scale.setTo(1, 1);
    caja.body.static = false;
    caja.body.mass = 100;
    caja.body.debug = true;
    caja.body.collideWorldBounds = true;
    cajas.lista.push(caja);

    caja = cajas.grupo.create(1000, juego.world.height -240, 'caja');
 
    juego.physics.p2.enableBody(caja);
    caja.body.setRectangle(70, 70);
    caja.scale.setTo(0.5, 0.5);
    caja.body.static = false;
    caja.body.mass = 45;
    caja.body.debug = true;
    cajas.lista.push(caja);


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// CHIPS   ///////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    chips.grupo = juego.add.group();
    chips.grupo.enableBody = true;
    chips.grupo.physicsBodyType = Phaser.Physics.P2JS;

    let chip = chips.grupo.create(0, 0, 'chip');

    chip.body.setRectangle(10, 10);
    chip.body.debug = true;
    chip.body.static = true;        //Se deja static y apartado para que no se vea hasta que sea necesario.

    chip.body.x = -1;
    chip.body.y = -1;

    chips.lista.push(chip);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////    /////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    lasers = juego.add.group(); // Lasers
    lasers.enableBody = true;

    

    juego.input.gamepad.start();

    // To listen to buttons from a specific pad listen directly on that pad game.input.gamepad.padX, where X = pad 1-4
    pad1 = juego.input.gamepad.pad1;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////// TANKABAIA   ///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    tankabaIA.jugador = juego.add.sprite(2400, juego.world.height - 225, 'cobaIA');
    juego.physics.p2.enableBody(tankabaIA.jugador);
    tankabaIA.jugador.body.setRectangle(80, 40);

    tankabaIA.jugador.body.collideWorldBounds = true;
    
    tankabaIA.jugador.body.fixedRotation = true;
    tankabaIA.jugador.body.mass = 1;
    //tankabaIA.jugador.body.clearShapes();
    //tankabaIA.jugador.body.loadPolygon('cajaCollisions', 'caja');
    tankabaIA.jugador.dynamic = true;
    tankabaIA.jugador.body.debug = false;
    tankabaIA.jugador.body.onBeginContact.add(colisionInicialTankabaIA, this);
    tankabaIA.jugador.body.onEndContact.add(colisionFinalTankabaIA, this);

    //indicadorJ1 = juego.add.sprite(2100, juego.world.height - 225, 'indicadorJ1');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////// ACROBAIA   ////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    acrobaIA.jugador = juego.add.sprite(700, juego.world.height - 300, 'cobaIA');
    juego.physics.p2.enableBody(acrobaIA.jugador);
    acrobaIA.jugador.body.setRectangle(90, 70);
    
    acrobaIA.jugador.body.fixedRotation = true;
    acrobaIA.jugador.body.mass = 1;

    acrobaIA.jugador.dynamic = true;
    acrobaIA.jugador.body.debug = false;
    acrobaIA.jugador.body.onBeginContact.add(colisionInicialAcrobaIA, this);
    //acrobaIA.jugador.body.onEndContact.add(colisionFinal, this);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////// TALIBAIA   ////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    talibaIA.jugador = juego.add.sprite(700, juego.world.height - 300, 'talibaIAmovimiento');
    juego.physics.p2.enableBody(talibaIA.jugador);
    talibaIA.jugador.body.setRectangle(80, 40);
    
    talibaIA.jugador.body.fixedRotation = true;
    talibaIA.jugador.body.mass = 1;
    
    talibaIA.jugador.dynamic = true;
    talibaIA.jugador.body.debug = false  ;
    
    //animaciones
    talibaIA.jugador.animations.add('movimientoDerecha', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
                                                            20, 21, 22, 23, 24, 25, 26, 27, 28], 60, true);
    talibaIA.jugador.animations.add('stop', [0], true);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////DECORADOS POR DELANTE DEL JUGADOR  ///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    nivel1.decorados[2] = juego.add.image(1610, juego.world.height - 490, 'conexionTuboArriba');
    nivel1.decorados[3] = juego.add.image(1634, juego.world.height - 1043, 'conexionTuboDerecha');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function stopPlataforma(i){
        plataformasMoviles.lista[i].body.rotateRight(0);
    }

    function up() {
        console.log('button up', arguments);
    }

    function over() {
        console.log('button over');
    }

    function out() {
        console.log('button out');
    }

    function actionOnClick () {

        background.visible =! background.visible;

    }

     function colisionInicialTankabaIA(body, bodyB, shapeA, shapeB, equation){

        if (body){
            //console.log(body.sprite.key);
            console.log(body.id);

        }else{
        
        result = 'You last hit: The wall :)';

        }


        if(body.sprite.key === 'cajaCableado' && tecla_accion.isDown){  

            //console.log(body.id);
            cajasCableado.lista[0].animations.play('caja_rota');
            let timer =  juego.time.events.add(1250, stopPlataforma, this, 0);
            plataformasMoviles.lista[0].body.rotateRight(25);      

        }

        if(body.sprite.key === 'boton'){

            //animacion de boton presionado
            plataformasMoviles.lista[0].body.rotateRight(25);
        }

        if(body.sprite.key === 'chip'){ //deberia ser 'chip'
            
            if(body.id === 18){
                tankabaIA.chip = "acrobaIA";
            }

            body.enableBody = true;
            //body.setRectangle(0.01, 0.01);
            body.x = -1;
            body.static = true;
            
        }

        if(body.id === 17){
            if(tankabaIA.chip === "acrobaIA"){

                acrobaIA.jugador.body.x = tankabaIA.jugador.body.x + 20;
                acrobaIA.jugador.body.y = tankabaIA.jugador.body.y;
                acrobaIA.jugador.body.static = false;

                tankabaIA.chip = "";
            }
        }
    }

    function colisionFinalTankabaIA(body, bodyB, shapeA, shapeB, equation){

        if(body.sprite.key === 'boton'){
            plataformasMoviles.lista[0].body.rotateRight(0);
            //stopPlataforma(0);
        }
    }

    function colisionInicialAcrobaIA(body, bodyB, shapeA, shapeB, equation){

        if (body){
            //console.log(body.sprite.key);
            //console.log(body.id);

        }else{
        
        result = 'You last hit: The wall :)';

        }


        if(body.sprite.key === 'cajaCableado' && tecla_accion.isDown){  

            //console.log(body.id);
            cajasCableado.lista[0].animations.play('caja_rota');
            let timer =  juego.time.events.add(1250, stopPlataforma, this, 0);
            plataformasMoviles.lista[0].body.rotateRight(25);      

        }

        if(body.sprite.key === 'boton'){

            //animacion de boton presionado
            plataformasMoviles.lista[0].body.rotateRight(25);
        }

        if(body.id === 16){

            acrobaIA.muerta = true;
        }
    }


     // Creamos un teclado  
    juego.input.keyboard.onUpCallback = function (e) {
        if (e.keyCode == Phaser.Keyboard.UP) {
            tankabaIA.contadorSaltos++;
        }
    };

    var sprite = juego.add.sprite(0, 0); // Creamos un Sprite para contener el texto de puntaje y lo dejamos fijo en relación a la cámara. Esto quiere decir que se moverá con ella fixedToCamera = true
    sprite.fixedToCamera = true; // Lo dejará fijo ante la cámara
    /*puntajeTexto = juego.add.text(100, 16, 'puntaje: 0 disparos: ' + obj_jugador.cantidad_disparos, {fontSize: '20px', fill: 'red'});// Creamos el texto y lo agregamos como hijo del objeto sprite con addChild
    sprite.addChild(puntajeTexto);*/
    sprite.cameraOffset.x = 10; // Ubicamos el sprite contenedor de la cámara en las coordenadas 10, 10
    sprite.cameraOffset.y = 10;
    juego.camera.follow(tankabaIA.jugador); // Le permitimos a la cámara del juego, seguir en todo momento al obj_jugador.jugador    

    juego.physics.p2.updateBoundsCollisionGroup();

    juego.camera.follow(tankabaIA.jugador); // Le permitimos a la cámara del juego, seguir en todo momento al obj_jugador.jugador                


    /*
        Code for the pause menu
    

    // Create a label to use as a button
    pause_label = juego.add.text(2000, juego.world.height - 200, 'Pause', { font: '24px Arial', fill: '#fff' });
    pause_label.inputEnabled = true;
    pause_label.events.onInputUp.add(function () {
        // When the paus button is pressed, we pause the game
        juego.paused = true;

        // Then add the menu
        menu = juego.add.sprite(juego.world.width/2, juego.world.height/2, 'menu');
        menu.anchor.setTo(0.5, 0.5);

        // And a label to illustrate which menu item was chosen. (This is not necessary)
        choiseLabel = juego.add.text(juego.world.width/2, juego.world.height-150, 'Click outside menu to continue', { font: '30px Arial', fill: '#fff' });
        choiseLabel.anchor.setTo(0.5, 0.5);
    });

    // Add a input listener that can help us return from being paused
    juego.input.onDown.add(unpause, self);

    // And finally the method that handels the pause menu
    function unpause(event){
        // Only act if paused
        if(juego.paused){
            // Calculate the corners of the menu
            var x1 = juego.world.width/2 - 270/2, x2 = juego.world.width/2 + 270/2,
                y1 = juego.world.height/2 - 180/2, y2 = juego.world.height/2 + 180/2;

            // Check if the click was inside the menu
            if(event.x > x1 && event.x < x2 && event.y > y1 && event.y < y2 ){
                // The choicemap is an array that will help us see which item was clicked
                var choisemap = ['one', 'two', 'three', 'four', 'five', 'six'];

                // Get menu local coordinates for the click
                var x = event.x - x1,
                    y = event.y - y1;

                // Calculate the choice 
                var choise = Math.floor(x / 90) + 3*Math.floor(y / 90);

                // Display the choice
                choiseLabel.text = 'You chose menu item: ' + choisemap[choise];
            }
            else{
                // Remove the menu and the label
                menu.destroy();
                choiseLabel.destroy();

                // Unpause the game
                juego.paused = false;
            }
        }
    };*/
}