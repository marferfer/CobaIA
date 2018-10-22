function preload() {

    //Sonido

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



    juego.state.add("recarga", Phaser.Preload);

    juego.load.image('fondoN1', 'assets/images/fondoN1.png');
    juego.load.image('sueloN1', 'assets/images/sueloN1.png');

    juego.load.image('mano', 'assets/images/mano.png');
    juego.load.image('tierra', 'assets/images/tierra.png');
    juego.load.image('tuboMid', 'assets/images/tuboMid.png');
    juego.load.image('escalera', 'assets/images/escalera.png');
    juego.load.image('corazon', 'assets/images/corazon.png');
    juego.load.image('posima', 'assets/images/posima.png');
    juego.load.image('pua', 'assets/images/puas.png');
    juego.load.image('roca', 'assets/images/roca.png');
    juego.load.image('caja', 'assets/images/caja.png');
    juego.load.image('arbol', 'assets/images/arbol.png');
    juego.load.image('laser_der', 'assets/images/laser_der.png');
    juego.load.image('laser_izq', 'assets/images/laser_izq.png');
    juego.load.image('circulo', 'assets/images/circulo.png');
    juego.load.image('mensaje', 'assets/images/mensaje.png');
    juego.load.image('compuertaCerrada', 'assets/images/compuertaCerrada.png');
    juego.load.image('tuboN1Completo', 'assets/images/tuboN1Completo.png');
    juego.load.image('cobaIA', 'assets/images/cobaIA.png');
    juego.load.image('cable', 'assets/images/cable.png');
    juego.load.image('frasco', 'assets/images/frasco.png');

    juego.load.spritesheet('personaje', 'assets/images/personaje.png', 47, 73);
    juego.load.spritesheet('controller-indicator', 'assets/images/controller-indicator.png',16, 16);
    juego.load.spritesheet('cajaCableado', 'assets/images/cajaCableado.png', 54 , 70);

    juego.load.physics('sueloN1Collisions', 'assets/data/sueloN1.json');
    juego.load.physics('cajaCollisions', 'assets/data/caja.json');
    juego.load.physics('personajeCollisions', 'assets/data/personaje.json');
    juego.load.physics('tuboN1CompletoCollisions', 'assets/data/tuboN1Completo.json');
    
}

function create() {

    

    juego.physics.startSystem(Phaser.Physics.P2JS); //activamos el motor de fisicas
    juego.physics.p2.setImpactEvents(true); //le decimos que detecte los eventos para las colisiones
    juego.physics.p2.gravity.y = 600;
 

    nivel1.fondo = juego.add.sprite(0, 0, 'fondoN1');

    indicator = juego.add.sprite(1000, juego.world.height - 300, 'controller-indicator');
    indicator.scale.x = indicator.scale.y = 2;
    indicator.animations.frame = 1;

    decorados[0] = juego.add.image(1765, juego.world.height - 70, 'frasco');
    decorados[1] = juego.add.image(1450, juego.world.height - 75, 'cable');    



    //fondo.fixedToCamera = true; // Lo dejará fijo ante la cámara
    juego.world.setBounds(0, 0, 5000, 1384); // Establecemos los límites del juego completo

    tecla_laser = juego.input.keyboard.addKey(Phaser.Keyboard.E);

    tecla_accion = juego.input.keyboard.addKey(Phaser.Keyboard.X);

    //mov jugador dos, teclas
    ctrlW = juego.input.keyboard.addKey(Phaser.Keyboard.W);
    ctrlA = juego.input.keyboard.addKey(Phaser.Keyboard.A);
    ctrlS = juego.input.keyboard.addKey(Phaser.Keyboard.S);
    ctrlD = juego.input.keyboard.addKey(Phaser.Keyboard.D);


    /////////////////////////////////////////////////////////////////////////////////////

    



    nivel1.grupo = juego.add.group();
    nivel1.grupo.enableBody = true;
    nivel1.grupo.physicsBodyType = Phaser.Physics.P2JS;

    


    let sueloN1 = nivel1.grupo.create(0, juego.world.height -300, 'sueloN1');
    juego.physics.p2.enableBody(sueloN1);
    sueloN1.body.static = true;
    sueloN1.body.debug = true;
    
    

    sueloN1.body.clearShapes();
    sueloN1.body.loadPolygon('sueloN1Collisions', 'sueloN1');
    sueloN1.body.static = true;
    sueloN1.collideWorldBounds = true;
    sueloN1.body.x = 2250;
    sueloN1.body.y = juego.world.height + 25;
    nivel1.suelo = sueloN1;

    ////////////////////////////////////////////////////////////////////////////////////

    compuertas.grupo = juego.add.group();
    compuertas.grupo.enableBody = true;
    compuertas.grupo.physicsBodyType = Phaser.Physics.P2JS;

    let compuerta = compuertas.grupo.create(0, 0, 'compuertaCerrada');

    compuerta.body.static = true;
    compuerta.body.x = 4475;
    compuerta.body.y = juego.world.height - 500;
    compuertas.lista.push(compuerta);

    //////////////////////////////////////////////////////////////////////////////////

    cajasCableado.grupo = juego.add.group();
    cajasCableado.grupo.enableBody = true;
    cajasCableado.grupo.physicsBodyType = Phaser.Physics.P2JS;

    let cajaCableado = cajasCableado.grupo.create(0, 0, 'cajaCableado');

    cajaCableado.body.debug = false;
    cajaCableado.animations.frame = 0;
    cajaCableado.animations.add('caja_rota', [1, 2, 3], 10, true);
    cajaCableado.body.static = true;
    cajaCableado.body.setRectangle(23, 69, 15);
    cajaCableado.body.x = 2100;
    cajaCableado.body.y = juego.world.height - 210;
    cajasCableado.lista.push(cajaCableado);

    //////////////////////////////////////////////////////////////////////////////////

    tubos.grupo = juego.add.group();
    tubos.grupo.enableBody = true;
    tubos.grupo.physicsBodyType = Phaser.Physics.P2JS;

    let tubo = tubos.grupo.create(0, 0, 'tuboN1Completo');

    tubo.body.clearShapes();
    tubo.body.loadPolygon('tuboN1CompletoCollisions', 'tuboN1Completo');

    tubo.body.static = true;
    tubo.body.debug = true;
    tubo.body.x = 2150;
    tubo.body.y = juego.world.height - 800;
    tubo.body.collideWorldBounds = true;
    
    tubos.lista.push(tubo);

    /*plataformas.grupo = juego.add.group(); // Grupo de obj_plataforma.plataformas
    plataformas.grupo.enableBody = true; // Física disponible para objetos que colisionen con ellas
    plataformas.lista.push(plataformas.grupo.create(50, juego.world.height - 100, 'tierra')); // Plataformas
    plataformas.lista[(plataformas.lista.length - 1)].scale.setTo(2, 1);
    plataformas.lista[(plataformas.lista.length - 1)].body.immovable = true;
    plataformas.lista.push(plataformas.grupo.create(800, juego.world.height - 100, 'tierra'));
    plataformas.lista[(plataformas.lista.length - 1)].scale.setTo(1, 1);
    plataformas.lista[(plataformas.lista.length - 1)].body.immovable = true;
    plataformas.lista.push(plataformas.grupo.create(1500, juego.world.height, 'tierra'));
    plataformas.lista[(plataformas.lista.length - 1)].scale.setTo(1, 1);
    plataformas.lista[(plataformas.lista.length - 1)].body.immovable = true;
    plataformas.lista.push(plataformas.grupo.create(1800, juego.world.height - 100, 'tierra'));
    plataformas.lista[(plataformas.lista.length - 1)].scale.setTo(1, 1);
    plataformas.lista[(plataformas.lista.length - 1)].body.immovable = true;
    plataformas.lista.push(plataformas.grupo.create(2700, juego.world.height - 100, 'tierra'));
    plataformas.lista[(plataformas.lista.length - 1)].scale.setTo(1, 1);
    plataformas.lista[(plataformas.lista.length - 1)].body.immovable = true;
    plataformas.lista.push(plataformas.grupo.create(4200, juego.world.height - 100, 'tierra'));
    plataformas.lista[(plataformas.lista.length - 1)].scale.setTo(1, 1);
    plataformas.lista[(plataformas.lista.length - 1)].body.immovable = true;
    plataformas.lista.push(plataformas.grupo.create(3260, juego.world.height, 'tierra'));
    plataformas.lista[(plataformas.lista.length - 1)].scale.setTo(1, 1);
    plataformas.lista[(plataformas.lista.length - 1)].body.immovable = true;*/
    lasers = juego.add.group(); // Lasers
    lasers.enableBody = true;

    /*escaleras = juego.add.group(); // Escaleras
    escaleras.enableBody = true;
    //  Creamos tantas escaleras como sea necesario
    for (var i = 0; i < 30; i++) {
        var escalera = escaleras.create(100, (juego.world.height - 150 - 48 * i), 'escalera');
    }
    for (var i = 0; i < 2; i++) {
        //  Create a maescalera inside of the 'escaleras' group
        var escalera = escaleras.create(650, (juego.world.height - 150 - 48 * i), 'escalera');
    }
    for (var i = 0; i < 30; i++) {
        //  Create a maescalera inside of the 'escaleras' group
        var escalera = escaleras.create(4300, (juego.world.height - 150 - 48 * i), 'escalera');
    }*/

    /*for (var i = 0; i < obj_jugador.vidas; i++) {
        obj_jugador.corazones.push(juego.add.sprite(400 + (i * 50), 0, 'corazon')); // Corazones de vidas
        obj_jugador.corazones[obj_jugador.corazones.length - 1].fixedToCamera = true;
    }*/

    
    //Creacion jugador 2
    
    

    juego.input.gamepad.start();

    // To listen to buttons from a specific pad listen directly on that pad game.input.gamepad.padX, where X = pad 1-4
    pad1 = juego.input.gamepad.pad1;


    
    tankabaIA.jugador = juego.add.sprite(1500, juego.world.height - 225, 'cobaIA');
    juego.physics.p2.enableBody(tankabaIA.jugador);
    tankabaIA.jugador.body.setRectangle(80, 40);

    tankabaIA.jugador.body.collideWorldBounds = true;
    
    tankabaIA.jugador.body.fixedRotation = true;
    tankabaIA.jugador.body.mass = 1;
    //tankabaIA.jugador.body.clearShapes();
    //tankabaIA.jugador.body.loadPolygon('cajaCollisions', 'caja');
    tankabaIA.jugador.dynamic = true;
    tankabaIA.jugador.body.debug = false;
    tankabaIA.jugador.body.onBeginContact.add(evento, this);

    function evento(body, bodyB, shapeA, shapeB, equation){

        if (body){
            console.log(body.sprite.key);
            console.log(body.id);

        }else{
        
        result = 'You last hit: The wall :)';
        }

        if(body.sprite.key == 'cajaCableado' && tecla_accion.isDown){
            console.log('La mehor trazha du mundo');
            console.log(body.id);
            cajasCableado.lista[0].animations.play('caja_rota');

        }
    }

    tankabaIA2.jugador = juego.add.sprite(1500, juego.world.height - 300, 'cobaIA');
    juego.physics.p2.enableBody(tankabaIA2.jugador);
    tankabaIA2.jugador.body.setRectangle(80, 40);

    
    tankabaIA2.jugador.body.fixedRotation = true;
    tankabaIA2.jugador.body.mass = 1;
    
    tankabaIA2.jugador.dynamic = true;
    tankabaIA2.jugador.body.debug = true;
    
     // Seteamos los parámetros del obj_jugador.jugador, como su posición inicial
   /* tankabaIA.jugador.animations.add('left', [0, 1], 10, true); // Creamos la película de animaciones para el personaje
    tankabaIA.jugador.animations.add('right', [0, 1], 10, true);
    tankabaIA.jugador.animations.add('jump', [7], 10, true);
    tankabaIA.jugador.animations.add('climb', [4, 5, 6], 10, true);
    tankabaIA.jugador.animations.add('disparo_derecha', [2], 10, true);
    tankabaIA.jugador.animations.add('disparo_izquierda', [3], 10, true);*/


    // Movimiento Jugador 2

    /*juego.physics.arcade.enable(obj_jugador2.jugador); //  Debemos permitirle física al obj_jugador.jugador
    obj_jugador2.jugador.body.bounce.y = 0; //  Rebote del obj_jugador.jugador
    obj_jugador2.jugador.body.gravity.y = 500; // Su aceleración de gravedad
    obj_jugador2.jugador.body.collideWorldBounds = false; // Le permitimos colisionar con los límites del juego
    obj_jugador2.jugador.animations.add('left', [0, 1], 10, true); // Creamos la película de animaciones para el personaje
    obj_jugador2.jugador.animations.add('right', [0, 1], 10, true);
    obj_jugador2.jugador.animations.add('jump', [7], 10, true);
    obj_jugador2.jugador.animations.add('climb', [4, 5, 6], 10, true);
    obj_jugador2.jugador.animations.add('disparo_derecha', [2], 10, true);
    obj_jugador2.jugador.animations.add('disparo_izquierda', [3], 10, true);

    juego.physics.arcade.enable(obj_jugador3.jugador); //  Debemos permitirle física al obj_jugador.jugador
    obj_jugador3.jugador.body.bounce.y = 0; //  Rebote del obj_jugador.jugador
    obj_jugador3.jugador.body.gravity.y = 500; // Su aceleración de gravedad
    obj_jugador3.jugador.body.collideWorldBounds = false; // Le permitimos colisionar con los límites del juego
    obj_jugador3.jugador.animations.add('left', [0, 1], 10, true); // Creamos la película de animaciones para el personaje
    obj_jugador3.jugador.animations.add('right', [0, 1], 10, true);
    obj_jugador3.jugador.animations.add('jump', [7], 10, true);
    obj_jugador3.jugador.animations.add('climb', [4, 5, 6], 10, true);
    obj_jugador3.jugador.animations.add('disparo_derecha', [2], 10, true);
    obj_jugador3.jugador.animations.add('disparo_izquierda', [3], 10, true);*/

    

    rocas = juego.add.group(); // Rocas
    rocas.enableBody = true;
    for (var i = 0; i < 1; i++) {
        var roca = rocas.create(1100 + i * 70, juego.world.height - 300, 'roca');
        roca.body.gravity.y = 300;
        roca.body.bounce.y = 0;
        var entidad = {
            "roca": roca,
            "gravity_y": 300
        };
        lista_rocas.push(entidad);
    }
    for (var i = 0; i < 2; i++) {
        var roca = rocas.create(3000 + i * 800, juego.world.height - 300, 'roca');
        roca.body.gravity.y = 300;
        roca.body.bounce.y = 0;
        var entidad = {
            "roca": roca,
            "gravity_y": 300
        };
        lista_rocas.push(entidad);
    }


    cajas.grupo = juego.add.group();
    cajas.grupo.enableBody = true;
    cajas.grupo.physicsBodyType = Phaser.Physics.P2JS;
    //cajas.collisionGroup = juego.physics.p2.createCollisionGroup();

    //let caja = juego.add.sprite(2315, juego.world.height - 300, 'caja');
    let caja = cajas.grupo.create(2315, juego.world.height -300, 'caja');
    //caja.body.setCollisionGroup(cajas.collisionGroup);
    //caja.body.collides([cajas.collisionGroup, nivel1.collisionGroup]);

    juego.physics.p2.enableBody(caja);
    caja.body.clearShapes();
    caja.body.loadPolygon('cajaCollisions', 'caja');
    caja.scale.setTo(1, 1);
    caja.body.dynamic = true;
    caja.body.mass = 50;
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
    caja.body.debug = false;
    caja.body.collideWorldBounds = true;
    cajas.lista.push(caja);

    caja = cajas.grupo.create(1000, juego.world.height -240, 'caja');
 
    juego.physics.p2.enableBody(caja);
    caja.body.clearShapes();
    caja.body.loadPolygon('cajaCollisions', 'caja');
    caja.scale.setTo(1, 1);
    caja.body.static = false;
    caja.body.mass = 80;
    caja.body.debug = true;
    caja.body.collideWorldBounds = true;
    cajas.lista.push(caja);


    /*puas = juego.add.group(); // Puas
    puas.enableBody = true;
    for (var i = 0; i < 4; i++) {
        var pua = puas.create(1470 + i * 70, juego.world.height - 70, 'pua');
        var entidad = {
            "pua": pua
        };
        lista_puas.push(entidad);
    }
    for (var i = 0; i < 6; i++) {
        var pua = puas.create(3360 + i * 70, juego.world.height - 70, 'pua');
        var entidad = {
            "pua": pua
        };
        lista_puas.push(entidad);
    }
    for (var i = 0; i < 6; i++) {
        var pua = puas.create(4400 + i * 70, juego.world.height - 170, 'pua');
        var entidad = {
            "pua": pua
        };
        lista_puas.push(entidad);
    }*/


    cursores = juego.input.keyboard.createCursorKeys(); // Creamos un teclado  
    juego.input.keyboard.onUpCallback = function (e) {
        if (e.keyCode == Phaser.Keyboard.UP) {
            tankabaIA.contadorSaltos++;
        }
    };

    mensajes = juego.add.group(); // Mensajes
    mensajes.enableBody = true;
    for (var i = 0; i < 1; i++) {
        var mensaje = mensajes.create(4200, juego.world.height - 350, 'mensaje');
        mensaje.alpha = 0;
        var entidad = {
            "mensaje": mensaje,
            "posicion": 0,
            "gravity_y": 300
        };
        lista_mensajes.push(entidad);
    }

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