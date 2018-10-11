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

    juego.stage.backgroundColor = '#736357';
    //juego.load.spritesheet('controller-indicator', 'assets/controller-indicator.png');

    juego.state.add("recarga", Phaser.Preload);
    //juego.load.image('ladrillos', 'assets/ladrillos.png');
    juego.load.image('mano', 'assets/mano.png');
    juego.load.image('tierra', 'assets/tierra.png');
    juego.load.image('tuboMid', 'assets/tuboMid.png');
    juego.load.image('escalera', 'assets/escalera.png');
    juego.load.image('corazon', 'assets/corazon.png');
    juego.load.image('posima', 'assets/posima.png');
    juego.load.image('pua', 'assets/puas.png');
    juego.load.image('roca', 'assets/roca.png');
    juego.load.image('caja', 'assets/caja.png');
    juego.load.image('arbol', 'assets/arbol.png');
    juego.load.image('platillo', 'assets/platillo.png');
    juego.load.image('laser_der', 'assets/laser_der.png');
    juego.load.image('laser_izq', 'assets/laser_izq.png');
    juego.load.image('circulo', 'assets/circulo.png');
    juego.load.image('mensaje', 'assets/mensaje.png');
    //juego.load.image('fondo', 'assets/fondo.png');
    juego.load.image('dkmnet', 'assets/dkmnet.png');
    juego.load.spritesheet('personaje', 'assets/personaje.png', 47, 73);
    juego.load.spritesheet('controller-indicator', 'assets/controller-indicator.png',16, 16);
    
}

function create() {
    juego.physics.startSystem(Phaser.Physics.ARCADE);
    //var fondo = juego.add.sprite(0, 0, 'fondo'); //Imagen de fondo
    //fondo.fixedToCamera = true; // Lo dejará fijo ante la cámara
    juego.add.sprite(0, 0, 'ladrillos');
    juego.world.setBounds(0, 0, 21000, 1384); // Establecemos los límites del juego completo

    tecla_laser = juego.input.keyboard.addKey(Phaser.Keyboard.E);

    //mov jugador dos, teclas
    ctrlW = juego.input.keyboard.addKey(Phaser.Keyboard.W);
    ctrlA = juego.input.keyboard.addKey(Phaser.Keyboard.A);
    ctrlS = juego.input.keyboard.addKey(Phaser.Keyboard.S);
    ctrlD = juego.input.keyboard.addKey(Phaser.Keyboard.D);

    /*obj_arbol.arbol_grupo = juego.add.group(); //  Grupo de obj_arbol.arbol
    obj_arbol.arbol_grupo.enableBody = true; // Física disponible para objetos que colisionen con ellas
    obj_arbol.arboles.push(obj_arbol.arbol_grupo.create(150, juego.world.height - 230, 'arbol')); // Arboles
    obj_arbol.arboles[(obj_arbol.arboles.length - 1)].scale.setTo(1, 1);
    obj_arbol.arboles[(obj_arbol.arboles.length - 1)].body.immovable = true;
    obj_arbol.arboles.push(obj_arbol.arbol_grupo.create(800, juego.world.height - 230, 'arbol'));
    obj_arbol.arboles[(obj_arbol.arboles.length - 1)].scale.setTo(1, 1);
    obj_arbol.arboles[(obj_arbol.arboles.length - 1)].body.immovable = true;
    obj_arbol.arboles.push(obj_arbol.arbol_grupo.create(1000, juego.world.height - 230, 'arbol'));
    obj_arbol.arboles[(obj_arbol.arboles.length - 1)].scale.setTo(1, 1);
    obj_arbol.arboles[(obj_arbol.arboles.length - 1)].body.immovable = true;
    obj_arbol.arboles.push(obj_arbol.arbol_grupo.create(1200, juego.world.height - 230, 'arbol'));
    obj_arbol.arboles[(obj_arbol.arboles.length - 1)].scale.setTo(1, 1);
    obj_arbol.arboles[(obj_arbol.arboles.length - 1)].body.immovable = true;*/

    obj_plataforma.plataforma_grupo = juego.add.group(); // Grupo de obj_plataforma.plataformas
    obj_plataforma.plataforma_grupo.enableBody = true; // Física disponible para objetos que colisionen con ellas
    obj_plataforma.plataformas.push(obj_plataforma.plataforma_grupo.create(50, juego.world.height - 100, 'tuboMid')); // Plataformas
    obj_plataforma.plataformas[(obj_plataforma.plataformas.length - 1)].scale.setTo(2, 1);
    obj_plataforma.plataformas[(obj_plataforma.plataformas.length - 1)].body.immovable = true;
    obj_plataforma.plataformas.push(obj_plataforma.plataforma_grupo.create(800, juego.world.height - 100, 'tierra'));
    obj_plataforma.plataformas[(obj_plataforma.plataformas.length - 1)].scale.setTo(1, 1);
    obj_plataforma.plataformas[(obj_plataforma.plataformas.length - 1)].body.immovable = true;
    obj_plataforma.plataformas.push(obj_plataforma.plataforma_grupo.create(1500, juego.world.height, 'tierra'));
    obj_plataforma.plataformas[(obj_plataforma.plataformas.length - 1)].scale.setTo(1, 1);
    obj_plataforma.plataformas[(obj_plataforma.plataformas.length - 1)].body.immovable = true;
    obj_plataforma.plataformas.push(obj_plataforma.plataforma_grupo.create(1800, juego.world.height - 100, 'tierra'));
    obj_plataforma.plataformas[(obj_plataforma.plataformas.length - 1)].scale.setTo(1, 1);
    obj_plataforma.plataformas[(obj_plataforma.plataformas.length - 1)].body.immovable = true;
    obj_plataforma.plataformas.push(obj_plataforma.plataforma_grupo.create(2700, juego.world.height - 100, 'tierra'));
    obj_plataforma.plataformas[(obj_plataforma.plataformas.length - 1)].scale.setTo(1, 1);
    obj_plataforma.plataformas[(obj_plataforma.plataformas.length - 1)].body.immovable = true;
    obj_plataforma.plataformas.push(obj_plataforma.plataforma_grupo.create(4200, juego.world.height - 100, 'tierra'));
    obj_plataforma.plataformas[(obj_plataforma.plataformas.length - 1)].scale.setTo(1, 1);
    obj_plataforma.plataformas[(obj_plataforma.plataformas.length - 1)].body.immovable = true;
    obj_plataforma.plataformas.push(obj_plataforma.plataforma_grupo.create(3260, juego.world.height, 'tierra'));
    obj_plataforma.plataformas[(obj_plataforma.plataformas.length - 1)].scale.setTo(1, 1);
    obj_plataforma.plataformas[(obj_plataforma.plataformas.length - 1)].body.immovable = true;



    /*obj_caja.caja_grupo = juego.add.group();//  Grupo de obj_caja.cajas
    obj_caja.caja_grupo.enableBody = true;//  Física disponible para objetos que colisionen con ellas
    obj_caja.cajas.push(obj_caja.caja_grupo.create(50, juego.world.height - 500, 'caja')); // Cajas
    obj_caja.cajas[(obj_caja.caja_grupo.length - 1)].scale.setTo(1, 1);
    obj_caja.cajas[(obj_caja.caja_grupo.length - 1)].body.immovable = true;
    obj_caja.cajas.push(obj_caja.caja_grupo.create(500, juego.world.height - 230, 'caja'));
    obj_caja.cajas[(obj_caja.caja_grupo.length - 1)].scale.setTo(1, 1);
    obj_caja.cajas[(obj_caja.caja_grupo.length - 1)].body.immovable = true;
    obj_caja.cajas.push(obj_caja.caja_grupo.create(200, 210, 'caja'));
    obj_caja.cajas[(obj_caja.caja_grupo.length - 1)].scale.setTo(1, 1);
    obj_caja.cajas[(obj_caja.caja_grupo.length - 1)].body.immovable = true;*/


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

    obj_jugador.jugador = juego.add.sprite(50, juego.world.height - 200, 'personaje');
    //Creacion jugador 2
    obj_jugador2.jugador = juego.add.sprite(300, juego.world.height - 200, 'personaje');

    obj_jugador3.jugador = juego.add.sprite(400, juego.world.height - 200, 'personaje');

    indicator = juego.add.sprite(20, juego.world.height - 780, 'controller-indicator');
    indicator.scale.x = indicator.scale.y = 2;
    indicator.animations.frame = 1;


    juego.input.gamepad.start();

    // To listen to buttons from a specific pad listen directly on that pad game.input.gamepad.padX, where X = pad 1-4
    pad1 = juego.input.gamepad.pad1;

    //juego.input.onDown.add(dump, this);

     // Seteamos los parámetros del obj_jugador.jugador, como su posición inicial
    juego.physics.arcade.enable(obj_jugador.jugador); //  Debemos permitirle física al obj_jugador.jugador
    obj_jugador.jugador.body.bounce.y = 0; //  Rebote del obj_jugador.jugador
    obj_jugador.jugador.body.gravity.y = 500; // Su aceleración de gravedad
    obj_jugador.jugador.body.collideWorldBounds = false; 
    // Le permitimos colisionar con los límites del juego
    obj_jugador.jugador.animations.add('left', [0, 1], 10, true); // Creamos la película de animaciones para el personaje
    obj_jugador.jugador.animations.add('right', [0, 1], 10, true);
    obj_jugador.jugador.animations.add('jump', [7], 10, true);
    obj_jugador.jugador.animations.add('climb', [4, 5, 6], 10, true);
    obj_jugador.jugador.animations.add('disparo_derecha', [2], 10, true);
    obj_jugador.jugador.animations.add('disparo_izquierda', [3], 10, true);

    // Movimiento Jugador 2

    juego.physics.arcade.enable(obj_jugador2.jugador); //  Debemos permitirle física al obj_jugador.jugador
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
    obj_jugador3.jugador.animations.add('disparo_izquierda', [3], 10, true);

    platillos = juego.add.group(); // Platillo
    platillos.enableBody = true;
    platillo = platillos.create(4500, juego.world.height - 350, 'platillo'); //  Creamos una platillo dentro del grupo platillos 2800
    jnPlatillo = {
        platillo: platillo,
        estado: false
    };

    /*circulos = juego.add.group(); // Circulos
    circulos.enableBody = true;
    for (var i = 0; i < 1; i++) {
        var circulo = circulos.create(((i * 70) - 70), juego.world.height - 600, 'circulo');
        var entidad = {
            "circulo": circulo,
            "posicion": 0,
            "gravity_y": 300
        };
        lista_circulos.push(entidad);
    }
    for (var i = 0; i < 1; i++) {
        var circulo = circulos.create(((i * 70) - 70), juego.world.height - 1000, 'circulo');
        var entidad = {
            "circulo": circulo,
            "posicion": 0,
            "gravity_y": 300
        };

        lista_circulos.push(entidad);
    }
    for (var i = 0; i < 1; i++) {
        var circulo = circulos.create(((i * 70) + 1070), juego.world.height - 100, 'circulo');
        var entidad = {
            "circulo": circulo,
            "posicion": 0,
            "gravity_y": 300
        };
        lista_circulos.push(entidad);
    }*/

    /*manos = juego.add.group(); // Manos
    manos.enableBody = true;
    for (var j = 0; j < 3; j++) {
        for (var i = 0; i < 4; i++) {
            var mano = manos.create(150 + i * 70, juego.world.height - 250, 'mano');
            mano.body.gravity.y = 300;
            mano.body.bounce.y = 1 + Math.random() * 0.6;
            var entidad = {
                "mano": mano,
                "posicion": 0,
                "gravity_y": 300
            };
            lista_manos.push(entidad);
        }
    }
    for (var j = 0; j < 3; j++) {
        for (var i = 0; i < 10; i++) {
            var mano = manos.create(700 + i * 70, juego.world.height - 250, 'mano');
            mano.body.gravity.y = 300;
            mano.body.bounce.y = 0.7 + Math.random() * 0.5;
            var entidad = {
                "mano": mano,
                "posicion": 0,
                "gravity_y": 300
            };
            lista_manos.push(entidad);
        }
    }
    for (var j = 0; j < 3; j++) {
        for (var i = 0; i < 9; i++) {
            var mano = manos.create(2000 + i * 70, juego.world.height - 250, 'mano');
            mano.body.gravity.y = 300;
            mano.body.bounce.y = 0.7 + Math.random() * 1;
            var entidad = {
                "mano": mano,
                "gravity_y": 300
            };
            lista_manos.push(entidad);
        }
        for (var i = 0; i < 9; i++) {
            var mano = manos.create(2500 + i * 70, juego.world.height - 250, 'mano');
            mano.body.gravity.y = 300;
            mano.body.bounce.y = 0.7 + Math.random() * 1;
            var entidad = {
                "mano": mano,
                "gravity_y": 300
            };
            lista_manos.push(entidad);
        }
    }*/

    imagenes = juego.add.group(); // Imagenes
    imagenes.enableBody = true;
    for (var i = 0; i < 1; i++) {
        var imagen = imagenes.create(3950 + i * 70, juego.world.height - 1000, 'dkmnet');
        //imagen.body.gravity.y = 300;
        //imagen.body.bounce.y = 0;
        var entidad = {
            "imagen": imagen,
            "gravity_y": 300
        };
        lista_imagenes.push(entidad);
    }

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

    cajas = juego.add.group();
    cajas.enableBody = true;
    for (var i = 0; i < 1; i++) {
        var caja = cajas.create(950 + i * 70, juego.world.height - 300, 'caja');
        caja.body.gravity.y = 300;
        caja.body.bounce.y = 0;
        var entidad = {
            "caja": caja,
            "gravity_y": 300
        };
        lista_cajas.push(entidad);
    }


    /*posimas = juego.add.group(); // Posimas
    posimas.enableBody = true;
    for (var i = 0; i < 5; i++) {
        var posima = posimas.create(300 + i * 70, juego.world.height - 300, 'posima');
        var entidad = {
            "posima": posima
        };
        lista_posimas.push(entidad);
    }
    for (var i = 0; i < 9; i++) {
        var posima = posimas.create(1000 + i * 70, juego.world.height - 300, 'posima');
        var entidad = {
            "posima": posima
        };
        lista_posimas.push(entidad);
    }
    for (var i = 0; i < 8; i++) {
        var posima = posimas.create(150 + i * 70, 100, 'posima');
        var entidad = {
            "posima": posima
        };
        lista_posimas.push(entidad);
    }*/

    /*vidas = juego.add.group(); // Vidas
    vidas.enableBody = true;
    for (var i = 0; i < 1; i++) {
        var vida = vidas.create(250, juego.world.height - 1220, 'corazon');
        var entidad = {
            "vida": vida
        };
        lista_vidas.push(entidad);
    }
    for (var i = 0; i < 1; i++) {
        var vida = vidas.create(2000, juego.world.height - 300, 'corazon');
        var entidad = {
            "vida": vida
        };
        lista_vidas.push(entidad);
    }*/


    puas = juego.add.group(); // Puas
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
    }


    cursores = juego.input.keyboard.createCursorKeys(); // Creamos un teclado  
    juego.input.keyboard.onUpCallback = function (e) {
        if (e.keyCode == Phaser.Keyboard.UP) {
            obj_jugador.contadorSaltos++;
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
    juego.camera.follow(obj_jugador2.jugador); // Le permitimos a la cámara del juego, seguir en todo momento al obj_jugador.jugador                
}