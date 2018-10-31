

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
    //juego.load.image('sueloN1Parte2', 'assets/images/sueloN1Parte2.png');
    //juego.load.image('sueloN1Parte3', 'assets/images/sueloN1Parte3.png');


    juego.load.image('chip', 'assets/images/chip.png');
    juego.load.image('tierra', 'assets/images/tierra.png');
    juego.load.image('tuboMid', 'assets/images/tuboMid.png');
    juego.load.image('caja', 'assets/images/caja.png');
    juego.load.image('tuboN1Completo', 'assets/images/tuboN1Completo.png');
    juego.load.image('cable', 'assets/images/cable.png');
    juego.load.image('frasco', 'assets/images/frasco.png');

    juego.load.image('mesaOrdenador', 'assets/Nivel0/mesaLab.png');
    juego.load.image('urna', 'assets/Nivel0/urnaLaboratorio.png');

    juego.load.image('plataformaMovil', 'assets/images/plataformaMovil.png');
    juego.load.image('plataformaBasic', 'assets/images/plataformaBasic.png');
    juego.load.image('boton', 'assets/images/boton.png');
    juego.load.image('conexionTuboArriba', 'assets/images/conexionTuboArriba.png');
    juego.load.image('conexionTuboDerecha', 'assets/images/conexionTuboDerecha.png');
    /*juego.load.image('indicadorJ1', 'assets/indicadorJ1.png');
    juego.load.image('indicadorJ2', 'assets/indicadorJ2.png');
    juego.load.image('indicadorJ3', 'assets/indicadorJ3.png');*/
    juego.load.image('pilaCadaveres', 'assets/images/pilaCadaveres.png');
    juego.load.image('baseTrepar', 'assets/images/baseParaTrepar.png');
    juego.load.image('compuertaParteSuperior', 'assets/images/compuertaParteSuperior.png');

    juego.load.image('ventilador', 'assets/images/ventilador.png');
    

    juego.load.image('ascensor','assets/nivel1/ascensor.png');

    juego.load.spritesheet('compuerta', 'assets/images/compuerta.png', 125, 547);
    //juego.load.spritesheet('personaje', 'assets/images/personaje.png', 47, 73);
    juego.load.spritesheet('controller-indicator', 'assets/images/controller-indicator.png',16, 16);
    juego.load.spritesheet('cajaCableado', 'assets/images/cajaCableado.png', 54 , 70);
    juego.load.spritesheet('talibaIAmovimiento', 'assets/images/talibaIAmovimiento.png', 93, 51, 59, 6, 7);
    juego.load.spritesheet('tankabaIAmovimiento', 'assets/images/tankabaIAmovimiento.png', 93, 59, 59, 6, 7);
    juego.load.spritesheet('acrobaIAmovimiento', 'assets/images/acrobaIAmovimiento.png', 95, 51, 59, 2, 3);
    juego.load.spritesheet('bobina', 'assets/images/bobina.png', 287, 49, 6, 0, 0);
    juego.load.spritesheet('aire', 'assets/images/aire.png', 175, 295, 5, 0, 0);

    juego.load.physics('sueloN1Parte1Collisions', 'assets/data/sueloN1Parte1.json');
    //juego.load.physics('sueloN1Parte2Collisions', 'assets/data/sueloN1Parte2.json');
    //juego.load.physics('sueloN1Parte3Collisions', 'assets/data/sueloN1Parte3.json');
    juego.load.physics('cajaCollisions', 'assets/data/caja.json');
    juego.load.physics('personajeCollisions', 'assets/data/personaje.json');
    juego.load.physics('tuboN1CompletoCollisions', 'assets/data/tuboN1Completo.json');
    juego.load.physics('pilaCadaveresCollisions', 'assets/data/pilaCadaveres.json');
    
}

function create() {

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// FISICAS DEL MUNDO   ///////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    juego.physics.startSystem(Phaser.Physics.P2JS); //activamos el motor de fisicas
    juego.physics.p2.setImpactEvents(true);         //le decimos que detecte los eventos para las colisiones
    juego.physics.p2.gravity.y = 600;               //ajustamos la gravedad
    juego.world.setBounds(0, 0, 25000, 1384);        // Establecemos los límites del juego completo


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// NIVEL 1   /////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    niveljuego = 1;
    nivel1.fondo = juego.add.sprite(0, 0, 'fondoN1');

    //Decorados que se ven detras del jugador
    nivel1.decorados[0] = juego.add.image(1135, juego.world.height - 650, 'frasco');
    nivel1.decorados[1] = juego.add.image(820, juego.world.height - 650, 'cable');

    nivel1.grupo = juego.add.group();
    nivel1.grupo.enableBody = true;
    nivel1.grupo.physicsBodyType = Phaser.Physics.P2JS;

    let sueloN1 = nivel1.grupo.create(0, juego.world.height -300, 'sueloN1Parte1');
    juego.physics.p2.enableBody(sueloN1);

    sueloN1.body.clearShapes();
    sueloN1.body.loadPolygon('sueloN1Parte1Collisions', 'sueloN1Parte1');
    sueloN1.body.static = true;
    //sueloN1.body.debug = true;
    
    sueloN1.body.x = 5900;
    sueloN1.body.y = juego.world.height - 655;    

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// TECLAS   //////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //tecla_laser = juego.input.keyboard.addKey(Phaser.Keyboard.E);

    tecla_accion = juego.input.keyboard.addKey(Phaser.Keyboard.X);

    //Movimiento de la TankabaIA
    cursores = juego.input.keyboard.createCursorKeys();

    //Movimiento de la AcrobaIA
    ctrlW = juego.input.keyboard.addKey(Phaser.Keyboard.W);
    ctrlA = juego.input.keyboard.addKey(Phaser.Keyboard.A);
    ctrlS = juego.input.keyboard.addKey(Phaser.Keyboard.S);
    ctrlD = juego.input.keyboard.addKey(Phaser.Keyboard.D);
    ctrlQ = juego.input.keyboard.addKey(Phaser.Keyboard.Q);

    //movimiento de la TalibaIA
    ctrlH = juego.input.keyboard.addKey(Phaser.Keyboard.H);
    ctrlB = juego.input.keyboard.addKey(Phaser.Keyboard.B);
    ctrlN = juego.input.keyboard.addKey(Phaser.Keyboard.N);
    ctrlM = juego.input.keyboard.addKey(Phaser.Keyboard.M);

    //Reinicio
    ctrlR = juego.input.keyboard.addKey(Phaser.Keyboard.R);

    //Cambio de camara
    ctrlT = juego.input.keyboard.addKey(Phaser.Keyboard.T);
    ctrlY = juego.input.keyboard.addKey(Phaser.Keyboard.Y);
    ctrlU = juego.input.keyboard.addKey(Phaser.Keyboard.U);

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// INDICADORES   /////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    indicator = juego.add.sprite(0, 0, 'controller-indicator');
    indicator.fixedToCamera = true;
    indicator.cameraOffset.x = 10; // Ubicamos el sprite contenedor de la cámara en las coordenadas 10, 10
    indicator.cameraOffset.y = 10;
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
    
    compuerta.body.setRectangle(50, 500);
    compuerta.animations.frame = 1;
    compuerta.body.x = 2820;
    compuerta.body.y = 700;
    compuertas.lista.push(compuerta);

    //COMPUERTA 2

    compuerta = compuertas.grupo.create(6774, 1085, 'compuerta');

    compuerta.body.debug = true;
    compuerta.body.static = true;
    compuerta.body.setRectangle(50, 500);
    compuerta.animations.frame = 0;
    compuertas.lista.push(compuerta);

    //COMPUERTA 3

    compuerta = compuertas.grupo.create(10450, 760, 'compuerta');

    compuerta.body.debug = true;
    compuerta.body.static = true;
    compuerta.body.setRectangle(50, 500);
    compuerta.animations.frame = 1;
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
    cajaCableado.body.x = 2770;
    cajaCableado.body.y = juego.world.height - 70;

    cajasCableado.lista.push(cajaCableado);


    // CAJA DE CABLEADO 2

    cajaCableado = cajasCableado.grupo.create(3655, 800, 'cajaCableado');

    cajaCableado.body.debug = false;
    cajaCableado.body.angle = 180;
    cajaCableado.animations.frame = 0;
    cajaCableado.animations.add('caja_rota', [1, 2, 3], 10, true);
    cajaCableado.body.static = true;
    cajaCableado.body.setRectangle(23, 69, 15);
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
    //tubo.body.debug = true;
    tubo.body.x = 1550;
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
    //boton.body.debug = true;
    boton.body.static = true;
    boton.body.x = 2447;
    boton.body.y = 480;

    botones.lista.push(boton);

    // BOTON 2

    boton = botones.grupo.create(0, 0, 'boton');

    boton.body.setRectangle(61, 15, 0, -5);
    //boton.body.debug = true;
    //console.log(boton.body.id); //id: 14
    boton.body.static = true;
    boton.body.angle = 90;
    boton.body.x = 2843;
    boton.body.y = 1311;

    botones.lista.push(boton);

    // BOTON 3

    boton = botones.grupo.create(0, 0, 'boton');

    boton.body.setRectangle(61, 15, 0, -5);
    //boton.body.debug = true;
    //console.log(boton.body.id); //id: 
    boton.body.static = true;
    boton.body.x = 6200;
    boton.body.y = 750;

    botones.lista.push(boton);

    // BOTON 4

    boton = botones.grupo.create(0, 0, 'boton');

    boton.body.setRectangle(61, 15, 0, -5);
    //boton.body.debug = true;
    //console.log(boton.body.id); //id: 
    boton.body.static = true;
    boton.body.x = 5825;
    boton.body.y = 1371;

    botones.lista.push(boton);

    // BOTON 5

    boton = botones.grupo.create(0, 0, 'boton');

    boton.body.setRectangle(61, 15, 0, -5);
    //boton.body.debug = true;
    //console.log(boton.body.id); //id: 
    boton.body.static = true;
    boton.body.x = 32960;
    boton.body.y = 1331;

    botones.lista.push(boton);

    // BOTON 6

    boton = botones.grupo.create(0, 0, 'boton');

    boton.body.setRectangle(61, 15, 0, -5);
    //boton.body.debug = true;
    //console.log(boton.body.id); //id: 
    boton.body.static = true;
    boton.body.x = 42960;
    boton.body.y = 1331;

    botones.lista.push(boton);

    // BOTON 7 zona 3

    boton = botones.grupo.create(7805, 1346, 'boton');

    boton.body.setRectangle(61, 15, 0, -5);
    //boton.body.debug = true;
    //console.log(boton.body.id); //id: 
    boton.body.static = true;
    /*boton.body.x = 52960;
    boton.body.y = 1331;*/

    botones.lista.push(boton);

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// PLATAFORMAS MOVILES   /////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    plataformasMoviles.grupo = juego.add.group();
    plataformasMoviles.grupo.enableBody = true;
    plataformasMoviles.grupo.physicsBodyType = Phaser.Physics.P2JS;

    let plataformaMovil = plataformasMoviles.grupo.create(0, 0, 'plataformaMovil');

    //plataformaMovil.body.debug = true;
    plataformaMovil.body.static = true;
    plataformaMovil.pivot.x = 150;
    plataformaMovil.body.setRectangle(300, 25, -150);
    plataformaMovil.body.x = 2440;
    plataformaMovil.body.y = juego.world.height - 402;
    plataformaMovil.body.collideWorldBounds = true;

    plataformasMoviles.lista.push(plataformaMovil);

    // PLAT 2

    plataformaMovil = plataformasMoviles.grupo.create(0, 0, 'plataformaMovil');

    //plataformaMovil.body.debug = true;
    plataformaMovil.body.static = true;
    plataformaMovil.pivot.x = 150;
    plataformaMovil.body.setRectangle(300, 25, -150);
    plataformaMovil.body.x = 3595;
    plataformaMovil.body.y = 605;

    plataformasMoviles.lista.push(plataformaMovil);

    //PLAT 3

    plataformaMovil = plataformasMoviles.grupo.create(6190, 810, 'plataformaMovil');

    //plataformaMovil.body.debug = true;
    plataformaMovil.body.static = true;
    plataformaMovil.pivot.x = 150;
    plataformaMovil.body.setRectangle(300, 25, -150);

    plataformasMoviles.lista.push(plataformaMovil);

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// PLATAFORMAS BASIC   /////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    plataformasBasic.grupo = juego.add.group();
    plataformasBasic.grupo.enableBody = true;
    plataformasBasic.grupo.physicsBodyType = Phaser.Physics.P2JS;

    let plataformaBasic = plataformasBasic.grupo.create(0, 0, 'plataformaBasic');

    plataformaMovil.body.debug = false;
    plataformaBasic.body.static = true;
    plataformaBasic.body.setRectangle(26, 302);
    plataformaBasic.body.x = 4726;
    plataformaBasic.body.y = 1303;
    //console.log(plataformaBasic.body.id);

    plataformasBasic.lista.push(plataformaBasic);

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// ASCENSORES   /////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    

    //ASCENSOR 2

    plataformaBasic = plataformasBasic.grupo.create(0, 0, 'plataformaBasic');

    //plataformaMovil.body.debug = true;
    plataformaBasic.body.static = true;
    plataformaBasic.body.setRectangle(26, 302);
    plataformaBasic.body.angle = 90;
    plataformaBasic.body.x = 5472;
    plataformaBasic.body.y = 1300;
    plataformaBasic.scale.setTo(1, 4);
    plataformaBasic.pos = 1300;
    plataformaBasic.incremento = 2;
    //console.log(plataformaBasic.body.id); //id: 16
    plataformaBasic.body.collideWorldBounds = true;

    plataformasBasic.lista.push(plataformaBasic);
   
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// CAJAS   ///////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    cajas.grupo = juego.add.group();
    cajas.grupo.enableBody = true;
    cajas.grupo.physicsBodyType = Phaser.Physics.P2JS;
    //cajas.collisionGroup = juego.physics.p2.createCollisionGroup();

    //let caja = juego.add.sprite(2315, juego.world.height - 300, 'caja');
    let caja = cajas.grupo.create(480, juego.world.height -300, 'caja');
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

    //CAJA 2

    caja = cajas.grupo.create(3400, 525, 'caja');
    //caja.body.setCollisionGroup(cajas.collisionGroup);
    //caja.body.collides([cajas.collisionGroup, nivel1.collisionGroup]);
 
    juego.physics.p2.enableBody(caja);
    caja.body.clearShapes();
    caja.body.loadPolygon('cajaCollisions', 'caja');
    caja.scale.setTo(1, 1);
    caja.body.static = false;
    caja.body.mass = 100;
    //caja.body.debug = true;

    cajas.lista.push(caja);

    //CAJA 3

    caja = cajas.grupo.create(6000, 1300, 'caja');
 
    juego.physics.p2.enableBody(caja);
    caja.body.clearShapes();
    caja.body.loadPolygon('cajaCollisions', 'caja');
    caja.scale.setTo(1, 1);
    caja.body.static = false;
    caja.body.mass = 100;
    //caja.body.debug = true;
    caja.body.collideWorldBounds = true;


    cajas.lista.push(caja);


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// CHIPS   ///////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    chips.grupo = juego.add.group();
    chips.grupo.enableBody = true;
    chips.grupo.physicsBodyType = Phaser.Physics.P2JS;

    let chip = chips.grupo.create(0, 0, 'chip'); //AcrobaIA

    chip.cobaIA = "acrobaIA";
    chip.body.setRectangle(10, 10);
    //chip.body.debug = true;
    chip.body.static = true;        //Se deja static y apartado para que no se vea hasta que sea necesario.

    chip.body.x = 0;
    chip.body.y = -100;

    chips.lista[0] = chip;

    chip = chips.grupo.create(0, 0, 'chip'); //TalibaIA

    chip.cobaIA = "talibaIA";
    chip.body.setRectangle(10, 10);
    //chip.body.debug = true;
    chip.body.static = true;        //Se deja static y apartado para que no se vea hasta que sea necesario.

    chip.body.x = 0;
    chip.body.y = -100;

    chips.lista[1] = chip;

    chip = chips.grupo.create(0, 0, 'chip'); //TankabaIA

    chip.cobaIA = "tankabaIA";
    chip.body.setRectangle(10, 10);
    //chip.body.debug = true;
    chip.body.static = true;        //Se deja static y apartado para que no se vea hasta que sea necesario.

    chip.body.x = 0;
    chip.body.y = -100;

    chips.lista[2] = chip;

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// PILAS DE CADAVERES   //////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    pilasCadaveres.grupo = juego.add.group();
    pilasCadaveres.grupo.enableBody = true;
    pilasCadaveres.grupo.physicsBodyType = Phaser.Physics.P2JS;

    let pilaCadaveres = pilasCadaveres.grupo.create(6960, 1300, 'pilaCadaveres');

    pilaCadaveres.body.clearShapes();
    pilaCadaveres.body.loadPolygon('pilaCadaveresCollisions', 'pilaCadaveres');

    //pilaCadaveres.body.debug = true;
    pilaCadaveres.body.static = true;
    

    /*pilaCadaveres.body.x = 18800;
    pilaCadaveres.body.y = juego.world.height - 260;*/

    //pilaCadaveres.body.x = 800;
    //pilaCadaveres.body.y = juego.world.height - 260;


    pilasCadaveres.lista.push(pilaCadaveres);

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// BOBINAS   /////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    bobinas.grupo = juego.add.group();
    bobinas.grupo.enableBody = true;
    bobinas.grupo.physicsBodyType = Phaser.Physics.P2JS;

    let bobina = bobinas.grupo.create(8900, 940, 'bobina');

    bobina.body.setRectangle(220, 10);

    //bobina.body.debug = true;
    bobina.body.static = true;
    bobina.body.angle = 90;
    //pilaCadaveres.pivot.x = 150;
    //pilaCadaveres.body.setRectangle(300, 25, -150);

    //bobina.body.x = 12000;
    //bobina.body.y = juego.world.height - 1260;


    bobina.animations.add('bobina_encendida', [1, 2, 3, 4, 5], 30, true);
    bobina.animations.play('bobina_encendida');

    bobinas.lista.push(bobina);

    //BOBINA 2

    bobina = bobinas.grupo.create(9404, 830, 'bobina');
    //bobina.body.angle = 90;

    bobina.body.setRectangle(220, 10);

    //bobina.body.debug = true;
    bobina.body.static = true;
    //pilaCadaveres.pivot.x = 150;
    //pilaCadaveres.body.setRectangle(300, 25, -150);

    //bobina.body.x = 12000;
    //bobina.body.y = juego.world.height - 260;

    //bobina.body.x = 1200;
    //bobina.body.y = juego.world.height - 260;


    bobina.animations.add('bobina_encendida', [1, 2, 3, 4, 5], 30, true);
    bobina.animations.play('bobina_encendida');

    bobinas.lista.push(bobina);  

    //BOBINA 3

    bobina = bobinas.grupo.create(9684, 830, 'bobina');
    //bobina.body.angle = 90;

    bobina.body.setRectangle(220, 10);

    //bobina.body.debug = true;
    bobina.body.static = true;
    //pilaCadaveres.pivot.x = 150;
    //pilaCadaveres.body.setRectangle(300, 25, -150);

    //bobina.body.x = 12000;
    //bobina.body.y = juego.world.height - 260;
    //bobina.body.x = 1200;
    //bobina.body.y = juego.world.height - 260;

    bobina.animations.add('bobina_encendida', [1, 2, 3, 4, 5], 30, true);
    bobina.animations.play('bobina_encendida');

    bobinas.lista.push(bobina);  

    //BOBINA 4

    bobina = bobinas.grupo.create(7474, 1250, 'bobina');
    bobina.body.angle = 90;

    bobina.body.setRectangle(220, 10);

    //bobina.body.debug = true;
    bobina.body.static = true;
    //pilaCadaveres.pivot.x = 150;
    //pilaCadaveres.body.setRectangle(300, 25, -150);
    //bobina.body.x = 1200;
    //bobina.body.y = juego.world.height - 260;

    bobina.animations.add('bobina_encendida', [1, 2, 3, 4, 5], 30, true);
    bobina.animations.play('bobina_encendida');

    bobinas.lista.push(bobina);    

    //BOBINA 5

    bobina = bobinas.grupo.create(7324, 1050, 'bobina');

    bobina.body.setRectangle(220, 10);

    //bobina.body.debug = true;
    bobina.body.static = true;
    //pilaCadaveres.pivot.x = 150;
    //pilaCadaveres.body.setRectangle(300, 25, -150);
    /*bobina.body.x = 2200;
    bobina.body.y = juego.world.height - 260;*/

    bobina.animations.add('bobina_encendida', [1, 2, 3, 4, 5], 30, true);
    bobina.animations.play('bobina_encendida');

    bobinas.lista.push(bobina);   

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// VENTILADORES   ////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    ventiladores.grupo = juego.add.group();
    ventiladores.grupo.enableBody = true;
    ventiladores.grupo.physicsBodyType = Phaser.Physics.P2JS;

    let ventilador = ventiladores.grupo.create(0, 0, 'ventilador');

    ventilador.body.setRectangle(154, 44);
    //ventilador.body.debug = true;
    ventilador.body.static = true;

    ventilador.body.x = 3992;
    ventilador.body.y = 1139;

    ventilador.zona = [ventilador.body.x - 88, ventilador.body.x + 88, ventilador.body.y - 22, ventilador.body.y - 300];
    ventilador.posicion = "vertical";

    ventiladores.lista.push(ventilador);


    let aire = juego.add.image(ventilador.zona[0], ventilador.zona[3], 'aire');
    aire.animations.add('aire_funciona', [0, 1, 2, 3, 4], 30, true);
    aire.animations.play('aire_funciona');

    //VENT UP 2

    ventilador = ventiladores.grupo.create(7308, 1336, 'ventilador');

    ventilador.body.setRectangle(154, 44);
    //ventilador.body.debug = true;
    ventilador.body.static = true;

    ventilador.zona = [ventilador.body.x - 88, ventilador.body.x + 88, ventilador.body.y - 22, ventilador.body.y - 300];
    ventilador.posicion = "vertical";

    ventiladores.lista.push(ventilador);


    aire = juego.add.image(ventilador.zona[0], ventilador.zona[3], 'aire');
    aire.animations.add('aire_funciona', [0, 1, 2, 3, 4], 30, true);
    aire.animations.play('aire_funciona');

    
    /////////////////ventilador horizontal derecha

    ventilador = ventiladores.grupo.create(8547, 930, 'ventilador');

    ventilador.body.setRectangle(154, 44);
    //ventilador.body.debug = true;
    ventilador.body.static = true;
    ventilador.body.angle = -90;

    ventilador.zona = [ventilador.body.x + 22, ventilador.body.x + 300, ventilador.body.y + 88, ventilador.body.y - 88];

    ventilador.posicion = "horizontal_derecha";

    ventiladores.lista.push(ventilador);

    aire = juego.add.image(ventilador.zona[0], ventilador.zona[2], 'aire');

    aire.angle = -90;
    aire.animations.add('aire_funciona', [0, 1, 2, 3, 4], 30, true);
    aire.animations.play('aire_funciona');


    ///////////ventilador horizontal izquierda

    ventilador = ventiladores.grupo.create(0, 0, 'ventilador');

    ventilador.body.setRectangle(154, 44);
    //ventilador.body.debug = true;
    ventilador.body.static = true;
    ventilador.body.x = 4639;
    ventilador.body.y = 1075;
    ventilador.body.angle = -90;

    ventilador.zona = [ventilador.body.x - 300, ventilador.body.x - 22, ventilador.body.y + 88, ventilador.body.y - 88];

    ventilador.posicion = "horizontal_izquierda";

    ventiladores.lista.push(ventilador);

    aire = juego.add.image(ventilador.zona[0], ventilador.zona[2], 'aire');

    aire.angle = -90;
    aire.animations.add('aire_funciona', [0, 1, 2, 3, 4], 30, true);
    aire.animations.play('aire_funciona');

    //VENT IZQ 2

    ventilador = ventiladores.grupo.create(0, 0, 'ventilador');

    ventilador.body.setRectangle(154, 44);
    //ventilador.body.debug = true;
    ventilador.body.static = true;
    ventilador.body.x = 6270;
    ventilador.body.y = 680;
    ventilador.body.angle = -90;

    ventilador.zona = [ventilador.body.x - 300, ventilador.body.x - 22, ventilador.body.y + 88, ventilador.body.y - 88];

    ventilador.posicion = "horizontal_izquierda";

    ventiladores.lista.push(ventilador);

    aire = juego.add.image(ventilador.zona[0], ventilador.zona[2], 'aire');

    aire.angle = -90;
    aire.animations.add('aire_funciona', [0, 1, 2, 3, 4], 30, true);
    aire.animations.play('aire_funciona');

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////    /////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    

    juego.input.gamepad.start();

    // To listen to buttons from a specific pad listen directly on that pad game.input.gamepad.padX, where X = pad 1-4
    pad1 = juego.input.gamepad.pad1;
    pad2 = juego.input.gamepad.pad2;
    pad3 = juego.input.gamepad.pad3;

    //paseNivel = juego.add.sprite(3000, juego.world.height - 205, 'ascensor');

    //juego.physics.p2.enableBody(paseNivel);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////// BASE PARA TREPAR ////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    baseTrepar = juego.add.sprite(0, 0, 'baseTrepar');
    juego.physics.p2.enableBody(baseTrepar);
    //baseTrepar.physicsBodyType = Phaser.Physics.P2JS;

    baseTrepar.body.setRectangle(80, 2);

    //baseTrepar.body.debug = true;
    baseTrepar.body.static = true;

    baseTrepar.body.x = 50;
    baseTrepar.body.y = juego.world.height-100;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////// TANKABAIA   ///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //tankabaIA.jugador = juego.add.sprite(11200, juego.world.height - 225, 'tankabaIAmovimiento');

    //Cambiar 340, juego.world.height - 225
    tankabaIA.jugador = juego.add.sprite(6884, juego.world.height - 425, 'tankabaIAmovimiento');

    tankabaIA.jugador.scale.setTo(1.3, 1.3);
    juego.physics.p2.enableBody(tankabaIA.jugador);
    tankabaIA.jugador.body.setRectangle(95, 60);

    tankabaIA.jugador.body.collideWorldBounds = true;
    
    //tankabaIA.jugador.body.fixedRotation = true;
    tankabaIA.jugador.body.mass = 100;
    //tankabaIA.jugador.body.clearShapes();
    //tankabaIA.jugador.body.loadPolygon('cajaCollisions', 'caja');
    tankabaIA.jugador.dynamic = true;
    tankabaIA.jugador.body.debug = false;

    tankabaIA.jugador.animations.add('movimientoDerecha', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
                                                            20, 21, 22, 23, 24, 25, 26, 27, 28], 60, true);
    tankabaIA.jugador.animations.add('movimientoIzquierda', [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46,
                                                             47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58], 60, true);

    tankabaIA.jugador.body.onBeginContact.add(colisionInicialTankabaIA, this);
    tankabaIA.jugador.body.onEndContact.add(colisionFinalTankabaIA, this);

    //indicadorJ1 = juego.add.sprite(2100, juego.world.height - 225, 'indicadorJ1');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////// ACROBAIA   ////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    acrobaIA.jugador = juego.add.sprite(220, juego.world.height - 300, 'acrobaIAmovimiento');
    juego.physics.p2.enableBody(acrobaIA.jugador);
    acrobaIA.jugador.body.setRectangle(80, 33);
    
    //acrobaIA.jugador.body.fixedRotation = true;
    acrobaIA.jugador.body.mass = 1;
    //acrobaIA.jugador.body.allowGravity = false;

    acrobaIA.jugador.dynamic = true;
    acrobaIA.jugador.body.debug = false;

    acrobaIA.jugador.animations.add('movimientoDerecha', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
                                                            20, 21, 22, 23, 24, 25, 26, 27, 28], 60, true);
    acrobaIA.jugador.animations.add('movimientoIzquierda', [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46,
                                                             47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58], 60, true);

    acrobaIA.jugador.body.onBeginContact.add(colisionInicialAcrobaIA, this);
    acrobaIA.jugador.body.onEndContact.add(colisionFinalAcrobaIA, this);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////// TALIBAIA   ////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    talibaIA.jugador = juego.add.sprite(100, juego.world.height - 300, 'talibaIAmovimiento');
    juego.physics.p2.enableBody(talibaIA.jugador);
    talibaIA.jugador.body.setRectangle(80, 40);
    
    talibaIA.jugador.body.fixedRotation = false;
    talibaIA.jugador.body.mass = 5;
    
    talibaIA.jugador.dynamic = true;
    talibaIA.jugador.body.debug = false  ;
    
    //animaciones
    talibaIA.jugador.animations.add('movimientoDerecha', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
                                                            20, 21, 22, 23, 24, 25, 26, 27, 28], 60, true);
    talibaIA.jugador.animations.add('movimientoIzquierda', [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46,
                                                             47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58], 60, true);

    talibaIA.jugador.body.onBeginContact.add(colisionInicialTalibaIA, this);
    talibaIA.jugador.body.onEndContact.add(colisionFinalTalibaIA, this);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////ULTIMOS OBJETOS  ///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //ASCENSOR 2

    plataformaBasic = plataformasBasic.grupo.create(0, 0, 'plataformaBasic');

    //plataformaMovil.body.debug = true;
    plataformaBasic.body.static = true;
    plataformaBasic.body.setRectangle(26, 302);
    plataformaBasic.body.angle = 90;
    plataformaBasic.body.x = 8686;
    plataformaBasic.body.y = 1327;
    plataformaBasic.scale.setTo(1, 3);
    plataformaBasic.pos = 1300;
    plataformaBasic.incremento = 2;
    //console.log(plataformaBasic.body.id); //id: 16
    plataformaBasic.body.collideWorldBounds = true;

    plataformasBasic.lista.push(plataformaBasic);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////DECORADOS POR DELANTE DEL JUGADOR  ///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    nivel1.decorados[2] = juego.add.image(1000, juego.world.height - 490, 'conexionTuboArriba');
    nivel1.decorados[3] = juego.add.image(1035, juego.world.height - 1043, 'conexionTuboDerecha');

    nivel1.decorados[4] = juego.add.image(2800, 420, 'compuertaParteSuperior');
    nivel1.decorados[5] = juego.add.image(6750, 800, 'compuertaParteSuperior');
    nivel1.decorados[6] = juego.add.image(10430, 475, 'compuertaParteSuperior');




    nivel1.decorados[7] = juego.add.image(1835, juego.world.height - 535, 'urna');
    nivel1.decorados[8] = juego.add.image(2935, juego.world.height - 225, 'mesaOrdenador');


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
        }


        if(body.sprite.key === 'cajaCableado' && tecla_accion.isDown){  

            //console.log(body.id);
            cajasCableado.lista[0].animations.play('caja_rota');
            let timer =  juego.time.events.add(1250, stopPlataforma, this, 0);
            plataformasMoviles.lista[0].body.rotateRight(25);      

        }

        if(body.sprite.key === 'boton'){
            if(body.id == 14) {
                plataformasBasic.lista[0].body.y = 0;
            }
            //animacion de boton presionado
            if(body.id == 16) {
                plataformasMoviles.lista[0].body.rotateRight(25);
            }
            if(body.id === 18){
                let timer =  juego.time.events.add(1250, stopPlataforma, this, 2);
                plataformasMoviles.lista[2].body.rotateRight(-25);
            }
        }

        if(body.sprite.key === 'bobina'){

            tankabaIA.muerta = true;

        }



        if(body.sprite.key === 'chip'){                 //si choca con un chip
            
            if(body.sprite.cobaIA === "acrobaIA" && tankabaIA.chip === null){      //si es de acrobaIA
                
                tankabaIA.chip = "acrobaIA";            //lo guardamos
                body.sprite.visible = false;            //desaparecemos sl sprite del chip
                body.destroy();                         //destruimos el chip en si mismo


                chip = chips.grupo.create(0, 0, 'chip'); //lo volvemos a crear en un lugar que no moleste
                chip.cobaIA = "acrobaIA";
                chip.body.setRectangle(10, 10);
                chip.body.debug = true;
                chip.body.static = true;
                chip.body.x = 0;
                chip.body.y = -100;
                chips.lista[0] = chip;

            }else if(body.sprite.cobaIA === "talibaIA" && tankabaIA.chip === null){

                tankabaIA.chip = "talibaIA";            //lo guardamos
                body.sprite.visible = false;            //desaparecemos sl sprite del chip
                body.destroy();                         //destruimos el chip en si mismo


                chip = chips.grupo.create(0, 0, 'chip'); //lo volvemos a crear en un lugar que no moleste
                chip.cobaIA = "talibaIA";
                chip.body.setRectangle(10, 10);
                chip.body.debug = true;
                chip.body.static = true;
                chip.body.x = 0;
                chip.body.y = -100;
                chips.lista[1] = chip;

            }else{  //si ya tengo un chip de otra cobaIA no hago nada
                ;
            }
        }

        if(body.sprite !== null){

            if(body.sprite.key === 'pilaCadaveres'){ //zona de resurreccion

                if(tankabaIA.chip === "acrobaIA"){

                    acrobaIA.jugador.body.x = tankabaIA.jugador.body.x + 50;
                    acrobaIA.jugador.body.y = tankabaIA.jugador.body.y + 50;
                    acrobaIA.jugador.body.static = false;
                    acrobaIA.canImove = true;

                    tankabaIA.chip = null;

                }else if(tankabaIA.chip === "talibaIA"){

                    talibaIA.jugador.body.x = tankabaIA.jugador.body.x + 50;
                    talibaIA.jugador.body.y = tankabaIA.jugador.body.y + 50;
                    talibaIA.jugador.body.static = false;
                    talibaIA.canImove = true;

                    tankabaIA.chip = null;

                }else{  //el chip esta vacio
                    ;
                }
            }
        }
    }

    function colisionFinalTankabaIA(body, bodyB, shapeA, shapeB, equation){

        if(body.sprite !== null){

            if(body.sprite.key === 'boton'){
                if(body.id == 14) {
                    plataformasBasic.lista[0].body.y = 1303;
                }
                plataformasMoviles.lista[0].body.rotateRight(0);
                plataformasMoviles.lista[2].body.rotateRight(0);
                //stopPlataforma(0);
            }
        }
    }

    function colisionInicialAcrobaIA(body, bodyB, shapeA, shapeB, equation){


        if(body.sprite.key === 'cajaCableado' && tecla_accion.isDown){  

            cajasCableado.lista[0].animations.play('caja_rota');
            let timer =  juego.time.events.add(1250, stopPlataforma, this, 0);
            plataformasMoviles.lista[0].body.rotateRight(25);      

        }

        if(body.sprite.key === 'tuboN1Completo'){  

            acrobaIA.puedoTrepar = true;    

        }

        else {

            acrobaIA.puedoTrepar = false;

        }

        if(body.sprite.key === 'boton'){

            if(body.id === 16){
                plataformasMoviles.lista[0].body.rotateRight(-25);
            }
            if(body.id === 18){
                let timer =  juego.time.events.add(1250, stopPlataforma, this, 2);
                plataformasMoviles.lista[2].body.rotateRight(-25);
            }
        }

        if(body.sprite.key === 'bobina'){

            acrobaIA.muerta = true;
        }


        if(body.sprite.key === 'chip'){                 //si choca con un chip
            
            if(body.sprite.cobaIA === "tankabaIA" && acrobaIA.chip === null){      //si es de acrobaIA
                
                acrobaIA.chip = "tankabaIA";            //lo guardamos
                body.sprite.visible = false;            //desaparecemos sl sprite del chip
                body.destroy();                         //destruimos el chip en si mismo


                chip = chips.grupo.create(0, 0, 'chip'); //lo volvemos a crear en un lugar que no moleste
                chip.cobaIA = "tankabaIA";
                chip.body.setRectangle(10, 10);
                chip.body.debug = true;
                chip.body.static = true;
                chip.body.x = 0;
                chip.body.y = -100;
                chips.lista[2] = chip;

            }else if(body.sprite.cobaIA === "talibaIA" && acrobaIA.chip === null){

                acrobaIA.chip = "talibaIA";             //lo guardamos
                body.sprite.visible = false;            //desaparecemos sl sprite del chip
                body.destroy();                         //destruimos el chip en si mismo


                chip = chips.grupo.create(0, 0, 'chip'); //lo volvemos a crear en un lugar que no moleste
                chip.cobaIA = "talibaIA";
                chip.body.setRectangle(10, 10);
                chip.body.debug = true;
                chip.body.static = true;
                chip.body.x = 0;
                chip.body.y = -100;
                chips.lista[1] = chip;

            }else{  //si ya tengo un chip de otra cobaIA no hago nada
                ;
            }
        }

        if(body.sprite !== null){

            if(body.sprite.key === 'pilaCadaveres'){ //zona de resurreccion

                if(acrobaIA.chip === "tankabaIA"){

                    tankabaIA.jugador.body.x = acrobaIA.jugador.body.x + 50;
                    tankabaIA.jugador.body.y = acrobaIA.jugador.body.y + 50;
                    tankabaIA.jugador.body.static = false;
                    tankabaIA.canImove = true;

                    acrobaIA.chip = null;

                }else if(acrobaIA.chip === "talibaIA"){

                    talibaIA.jugador.body.x = acrobaIA.jugador.body.x + 50;
                    talibaIA.jugador.body.y = acrobaIA.jugador.body.y + 50;
                    talibaIA.jugador.body.static = false;
                    talibaIA.canImove = true;

                    acrobaIA.chip = null;

                }else{  //el chip esta vacio
                    ;
                }
            }
        }
    }

    function colisionFinalAcrobaIA(body, bodyB, shapeA, shapeB, equation){

        if(body.sprite !== null){

            if(body.sprite.key === 'boton'){
                plataformasMoviles.lista[0].body.rotateRight(0);
                //stopPlataforma(0);
                plataformasMoviles.lista[2].body.rotateRight(0);
            }
        }
    }

    function colisionInicialTalibaIA(body, bodyB, shapeA, shapeB, equation){


        if(body.sprite.key === 'cajaCableado' && tecla_accion.isDown){  

            if(body.id === 13){
                compuertas.lista[0].frame = 1;
                compuertas.lista[0].body.setRectangle(100, 25);
                compuertas.lista[0].pivot.y = +250;
                compuertas.lista[0].body.y += 250; 
            
            }else if(body.id === 14){

                let timer =  juego.time.events.add(1250, stopPlataforma, this, 1);
                plataformasMoviles.lista[1].body.rotateRight(-25);

            }else{
                ;
            }    

        }

        if(body.sprite.key === 'boton'){

            if(body.id === 18){
                let timer =  juego.time.events.add(1250, stopPlataforma, this, 2);
                plataformasMoviles.lista[2].body.rotateRight(-25);
            }
        }

        if(body.sprite.key === 'bobina'){

            talibaIA.muerta = true;
        }

        if(body.sprite.key === 'chip'){                 //si choca con un chip
            
            if(body.sprite.cobaIA === "tankabaIA" && talibaIA.chip === null){ 
                
                talibaIA.chip = "tankabaIA";            //lo guardamos
                body.sprite.visible = false;            //desaparecemos sl sprite del chip
                body.destroy();                         //destruimos el chip en si mismo


                chip = chips.grupo.create(0, 0, 'chip'); //lo volvemos a crear en un lugar que no moleste
                chip.cobaIA = "tankabaIA";
                chip.body.setRectangle(10, 10);
                chip.body.debug = true;
                chip.body.static = true;
                chip.body.x = 0;
                chip.body.y = -100;
                chips.lista[2] = chip;

            }else if(body.sprite.cobaIA === "acrobaIA" && talibaIA.chip === null){

                talibaIA.chip = "acrobaIA";            //lo guardamos
                body.sprite.visible = false;            //desaparecemos sl sprite del chip
                body.destroy();                         //destruimos el chip en si mismo


                chip = chips.grupo.create(0, 0, 'chip'); //lo volvemos a crear en un lugar que no moleste
                chip.cobaIA = "acrobaIA";
                chip.body.setRectangle(10, 10);
                chip.body.debug = true;
                chip.body.static = true;
                chip.body.x = 0;
                chip.body.y = -100;
                chips.lista[0] = chip;

            }else{  //si ya tengo un chip de otra cobaIA no hago nada
                ;
            }
        }

        if(body.sprite !== null){

            if(body.sprite.key === 'pilaCadaveres'){ //zona de resurreccion

                if(talibaIA.chip === "tankabaIA"){

                    tankabaIA.jugador.body.x = talibaIA.jugador.body.x + 50;
                    tankabaIA.jugador.body.y = talibaIA.jugador.body.y + 50;
                    tankabaIA.jugador.body.static = false;
                    tankabaIA.canImove = true;

                    talibaIA.chip = null;

                }else if(talibaIA.chip === "acrobaIA"){

                    acrobaIA.jugador.body.x = talibaIA.jugador.body.x + 50;
                    acrobaIA.jugador.body.y = talibaIA.jugador.body.y + 50;
                    acrobaIA.jugador.body.static = false;
                    acrobaIA.canImove = true;

                    talibaIA.chip = null;

                }else{  //el chip esta vacio
                    ;
                }
            }
        }
    }

    function colisionFinalTalibaIA(body, bodyB, shapeA, shapeB, equation){

       if(body.sprite !== null){

            if(body.sprite.key === 'boton'){
                plataformasMoviles.lista[2].body.rotateRight(0);
                //stopPlataforma(0);
            }
        }
    }

     // Creamos un teclado  
    juego.input.keyboard.onUpCallback = function (e) {
        if (e.keyCode == Phaser.Keyboard.UP) {
            tankabaIA.contadorSaltos++;
        }
    };

    /*puntajeTexto = juego.add.text(100, 16, 'puntaje: 0 disparos: ' + obj_jugador.cantidad_disparos, {fontSize: '20px', fill: 'red'});// Creamos el texto y lo agregamos como hijo del objeto sprite con addChild
    sprite.addChild(puntajeTexto);*/
    juego.camera.follow(tankabaIA.jugador); // Le permitimos a la cámara del juego, seguir en todo momento al obj_jugador.jugador    

    juego.physics.p2.updateBoundsCollisionGroup();

    juego.camera.follow(tankabaIA.jugador);
}