


function preload2() {

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// IMAGENES Y FISICAS  ///////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    juego2.state.add("recarga", Phaser.Preload);

    juego2.load.image('fondoN1', 'assets/Nivel1/fondo.png');
    juego2.load.image('plataformas', 'assets/Nivel1/plataformas.png');
    //juego2.load.image('sueloN1Parte2', 'assets/images/sueloN1Parte2.png');
    //juego2.load.image('sueloN1Parte3', 'assets/images/sueloN1Parte3.png');

    juego2.load.image('chip', 'assets/images/chip.png');
    juego2.load.image('tierra', 'assets/images/tierra.png');
    juego2.load.image('tuboMid', 'assets/images/tuboMid.png');
    juego2.load.image('caja', 'assets/images/caja.png');
    juego2.load.image('tuboN1Completo', 'assets/images/tuboN1Completo.png');
    juego2.load.image('cobaIA', 'assets/images/cobaIA.png');
    juego2.load.image('cable', 'assets/images/cable.png');
    juego2.load.image('frasco', 'assets/images/frasco.png');
    juego2.load.image('plataformaMovil', 'assets/images/plataformaMovil.png');
    juego2.load.image('boton', 'assets/images/boton.png');
    juego2.load.image('conexionTuboArriba', 'assets/images/conexionTuboArriba.png');
    juego2.load.image('conexionTuboDerecha', 'assets/images/conexionTuboDerecha.png');
    juego2.load.image('indicadorJ1', 'assets/images/J1 azul.png');
    juego2.load.image('indicadorJ2', 'assets/images/J2 rojo.png');
    juego2.load.image('indicadorJ3', 'assets/images/J3 rosa.png');
    juego2.load.image('pilaCadaveres', 'assets/images/pilaCadaveres.png');

    //juego.load.image('ventilador', 'assets/images/ventilador.png');

    juego2.load.image('ascensor','assets/nivel1/ascensor.png');

    juego2.load.spritesheet('compuerta', 'assets/images/compuerta.png', 125, 547);
    juego2.load.spritesheet('controller-indicator', 'assets/images/controller-indicator.png',16, 16);
    juego2.load.spritesheet('cajaCableado', 'assets/images/cajaCableado.png', 54 , 70);
    juego2.load.spritesheet('talibaIAmovimiento', 'assets/images/talibaIAmovimiento.png', 93, 51, 59, 6, 7);
    juego2.load.spritesheet('tankabaIAmovimiento', 'assets/images/tankabaIAmovimiento.png', 93, 59, 59, 6, 7);
    juego2.load.spritesheet('acrobaIAmovimiento', 'assets/images/acrobaIAmovimiento.png', 95, 51, 59, 2, 3);
    juego2.load.spritesheet('bobina', 'assets/images/bobina.png', 287, 49, 6, 0, 0);
    //juego.load.spritesheet('aire', 'assets/images/aire.png', 175, 295, 5, 0, 0);

    juego2.load.physics('sueloN1Parte1Collisions', 'assets/data/sueloN2Parte1.json');
    juego2.load.physics('cajaCollisions', 'assets/data/caja.json');
    juego2.load.physics('personajeCollisions', 'assets/data/personaje.json');
    juego2.load.physics('tuboN1CompletoCollisions', 'assets/data/tuboN1Completo.json');
    juego2.load.physics('pilaCadaveresCollisions', 'assets/data/pilaCadaveres.json');
    
}

function create2() {

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// FISICAS DEL MUNDO   ///////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    juego2.physics.startSystem(Phaser.Physics.P2JS); //activamos el motor de fisicas
    juego2.physics.p2.setImpactEvents(true);         //le decimos que detecte los eventos para las colisiones
    juego2.physics.p2.gravity.y = 600;               //ajustamos la gravedad
    juego2.world.setBounds(0, 0, 25000, 1384);        // Establecemos los límites del juego2 completo


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// NIVEL 1   /////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    niveljuego2 = 1;
    nivel1.fondo = juego2.add.sprite(0, -500, 'fondoN1');

    //Decorados que se ven detras del jugador
    /*nivel1.decorados[0] = juego2.add.image(1135, juego2.world.height - 650, 'frasco');
    nivel1.decorados[1] = juego2.add.image(820, juego2.world.height - 650, 'cable');*/

    nivel1.grupo = juego2.add.group();
    nivel1.grupo.enableBody = true;
    nivel1.grupo.physicsBodyType = Phaser.Physics.P2JS;

    let sueloN1 = nivel1.grupo.create(0, 0, 'plataformas');
    juego2.physics.p2.enableBody(sueloN1);

    sueloN1.body.clearShapes();
    sueloN1.body.loadPolygon('sueloN1Parte1Collisions', 'plataformas');
    sueloN1.body.static = true;
    //sueloN1.body.debug = true;
    
    sueloN1.body.x = 1750;
    sueloN1.body.y = 500;
    //sueloN1.scale.x = sueloN1.scale.y = 0.25;
   

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// TECLAS   //////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //tecla_laser = juego2.input.keyboard.addKey(Phaser.Keyboard.E);

    tecla_accion = juego2.input.keyboard.addKey(Phaser.Keyboard.X);

    //Movimiento de la TankabaIA
    cursores = juego2.input.keyboard.createCursorKeys();

    //Movimiento de la AcrobaIA
    ctrlW = juego2.input.keyboard.addKey(Phaser.Keyboard.W);
    ctrlA = juego2.input.keyboard.addKey(Phaser.Keyboard.A);
    ctrlS = juego2.input.keyboard.addKey(Phaser.Keyboard.S);
    ctrlD = juego2.input.keyboard.addKey(Phaser.Keyboard.D);

    //movimiento de la TalibaIA
    ctrlH = juego2.input.keyboard.addKey(Phaser.Keyboard.H);
    ctrlB = juego2.input.keyboard.addKey(Phaser.Keyboard.B);
    ctrlN = juego2.input.keyboard.addKey(Phaser.Keyboard.N);
    ctrlM = juego2.input.keyboard.addKey(Phaser.Keyboard.M);

    //Reinicio
    ctrlR = juego2.input.keyboard.addKey(Phaser.Keyboard.R);

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// INDICADORES   /////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    indicator = juego2.add.sprite(0, 0, 'controller-indicator');
    indicator.fixedToCamera = true;
    indicator.cameraOffset.x = 10; // Ubicamos el sprite contenedor de la cámara en las coordenadas 10, 10
    indicator.cameraOffset.y = 10;
    indicator.scale.x = indicator.scale.y = 2;
    indicator.animations.frame = 1; 
    
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// COMPUERTAS   //////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /*compuertas.grupo = juego2.add.group();
    compuertas.grupo.enableBody = true;
    compuertas.grupo.physicsBodyType = Phaser.Physics.P2JS;

    let compuerta = compuertas.grupo.create(0, 0, 'compuerta');

    compuerta.body.debug = true;
    compuerta.body.static = true;
    compuerta.pivot.y = 250;
    compuerta.body.setRectangle(75, 25);
    compuerta.animations.frame = 1;
    compuerta.body.x = 4475;
    compuerta.body.y = juego2.world.height - 500;
    compuertas.lista.push(compuerta);*/

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// CAJAS DE CABLEADO   ///////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    cajasCableado.grupo = juego2.add.group();
    cajasCableado.grupo.enableBody = true;
    cajasCableado.grupo.physicsBodyType = Phaser.Physics.P2JS;

    let cajaCableado = cajasCableado.grupo.create(790, juego2.world.height - 205, 'cajaCableado');
    cajaCableado.body.angle = 180;

    cajaCableado.body.debug = false;
    cajaCableado.animations.frame = 0;
    cajaCableado.animations.add('caja_rota', [1, 2, 3], 10, true);
    cajaCableado.body.static = true;
    cajaCableado.body.setRectangle(23, 69, 15);
    cajasCableado.lista.push(cajaCableado);

    console.log(cajaCableado.body.id);

    tubos.grupo = juego2.add.group();
    tubos.grupo.enableBody = true;
    tubos.grupo.physicsBodyType = Phaser.Physics.P2JS;

    let tubo = tubos.grupo.create(0, 0, 'tuboN1Completo');

    tubo.body.clearShapes();
    tubo.body.loadPolygon('tuboN1CompletoCollisions', 'tuboN1Completo');

    tubo.body.static = true;
    tubo.body.debug = true;
    tubo.body.x = 2150;
    tubo.body.y = juego2.world.height - 675;
    tubo.body.collideWorldBounds = true;
    
    tubos.lista.push(tubo);

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// BOTONES   /////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    botones.grupo = juego2.add.group();
    botones.grupo.enableBody = true;
    botones.grupo.physicsBodyType = Phaser.Physics.P2JS;

    let boton = botones.grupo.create(3348, 1175, 'boton');

    boton.body.setRectangle(61, 15, 0, -5);
    //boton.body.debug = true;
    boton.body.static = true;
    //boton.body.x = 2600;
    //boton.body.y = juego2.world.height - 275;

    botones.lista.push(boton);

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// PLATAFORMAS MOVILES   /////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /*plataformasMoviles.grupo = juego2.add.group();
    plataformasMoviles.grupo.enableBody = true;
    plataformasMoviles.grupo.physicsBodyType = Phaser.Physics.P2JS;

    let plataformaMovil = plataformasMoviles.grupo.create(0, 0, 'plataformaMovil');

    plataformaMovil.body.debug = true;
    plataformaMovil.body.static = true;
    plataformaMovil.pivot.x = 150;
    plataformaMovil.body.setRectangle(300, 25, -150);
    plataformaMovil.body.x = 3000;
    plataformaMovil.body.y = juego2.world.height - 460;
    plataformaMovil.body.collideWorldBounds = true;

    plataformasMoviles.lista.push(plataformaMovil);*/
   
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// CAJAS   ///////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    cajas.grupo = juego2.add.group();
    cajas.grupo.enableBody = true;
    cajas.grupo.physicsBodyType = Phaser.Physics.P2JS;

    //let caja = juego2.add.sprite(2315, juego2.world.height - 300, 'caja');
    let caja = cajas.grupo.create(2819, 430, 'caja');

    juego2.physics.p2.enableBody(caja);
    caja.body.clearShapes();
    caja.body.loadPolygon('cajaCollisions', 'caja');
    caja.scale.setTo(1, 1);
    caja.body.dynamic = true;
    caja.body.mass = 80;
    caja.body.debug = false;
    caja.body.collideWorldBounds = true;
    cajas.lista.push(caja);



    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// CHIPS   ///////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /*chips.grupo = juego2.add.group();
    chips.grupo.enableBody = true;
    chips.grupo.physicsBodyType = Phaser.Physics.P2JS;

    let chip = chips.grupo.create(0, 0, 'chip'); //AcrobaIA

    chip.cobaIA = "acrobaIA";
    chip.body.setRectangle(10, 10);
    chip.body.debug = true;
    chip.body.static = true;        //Se deja static y apartado para que no se vea hasta que sea necesario.

    chip.body.x = 0;
    chip.body.y = -100;

    chips.lista[0] = chip;

    chip = chips.grupo.create(0, 0, 'chip'); //TalibaIA

    chip.cobaIA = "talibaIA";
    chip.body.setRectangle(10, 10);
    chip.body.debug = true;
    chip.body.static = true;        //Se deja static y apartado para que no se vea hasta que sea necesario.

    chip.body.x = 0;
    chip.body.y = -100;

    chips.lista[1] = chip;

    chip = chips.grupo.create(0, 0, 'chip'); //TankabaIA

    chip.cobaIA = "tankabaIA";
    chip.body.setRectangle(10, 10);
    chip.body.debug = true;
    chip.body.static = true;        //Se deja static y apartado para que no se vea hasta que sea necesario.

    chip.body.x = 0;
    chip.body.y = -100;

    chips.lista[2] = chip;*/

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// PILAS DE CADAVERES   //////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    pilasCadaveres.grupo = juego2.add.group();
    pilasCadaveres.grupo.enableBody = true;
    pilasCadaveres.grupo.physicsBodyType = Phaser.Physics.P2JS;

    let pilaCadaveres = pilasCadaveres.grupo.create(0, 0, 'pilaCadaveres');

    pilaCadaveres.body.clearShapes();
    pilaCadaveres.body.loadPolygon('pilaCadaveresCollisions', 'pilaCadaveres');

    //pilaCadaveres.body.debug = true;
    pilaCadaveres.body.static = true;
    
    pilaCadaveres.body.x = 150;
    pilaCadaveres.body.y = juego2.world.height - 200;
    pilaCadaveres.scale.setTo(2,1.5);

    pilasCadaveres.lista.push(pilaCadaveres);

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// BOBINAS   /////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /*bobinas.grupo = juego2.add.group();
    bobinas.grupo.enableBody = true;
    bobinas.grupo.physicsBodyType = Phaser.Physics.P2JS;

    let bobina = bobinas.grupo.create(0, 0, 'bobina');

    bobina.body.setRectangle(220, 10);

    bobina.body.debug = true;
    bobina.body.static = true;
    //pilaCadaveres.pivot.x = 150;
    //pilaCadaveres.body.setRectangle(300, 25, -150);
    bobina.body.x = 200;
    bobina.body.y = juego2.world.height - 260;

    bobina.animations.add('bobina_encendida', [1, 2, 3, 4, 5], 30, true);
    bobina.animations.play('bobina_encendida');

    bobinas.lista.push(bobina);*/

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// VENTILADORES   /////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /*ventiladores.grupo = juego2.add.group();
    ventiladores.grupo.enableBody = true;
    ventiladores.grupo.physicsBodyType = Phaser.Physics.P2JS;

    let ventilador = ventiladores.grupo.create(0, 0, 'ventilador');

    ventilador.body.setRectangle(154, 44);

    ventilador.body.debug = true;
    ventilador.body.static = true;

    ventilador.body.x = 16500;
    ventilador.body.y = juego2.world.height-100;

    ventilador.zona = [ventilador.body.x - 88, ventilador.body.x + 88, ventilador.body.y - 22, ventilador.body.y - 300];
    ventilador.posicion = "vertical";

    ventiladores.lista.push(ventilador);*/


    /*let aire = juego2.add.image(ventilador.zona[0], ventilador.zona[3], 'aire');

    aire.animations.add('aire_funciona', [0, 1, 2, 3, 4], 30, true);
    aire.animations.play('aire_funciona');*/

    


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ascensores.grupo = juego2.add.group();
    ascensores.grupo.enableBody = true;
    ascensores.grupo.physicsBodyType = Phaser.Physics.P2JS;



    let ascensor = ascensores.grupo.create(1582, juego2.world.height - 255, 'ascensor');

    //ascensor.body.debug = true;
    ascensor.body.static = true;
    ascensor.direccion = "subiendo";
    console.log(ascensor.body.id);
    
    //ascensor.body.setRectangle(300, 25, -150);
    /*ascensor.body.x = 3000;
    ascensor.body.y = juego2.world.height - 460;*/
    //ascensor.body.collideWorldBounds = true;

    ascensores.lista.push(ascensor);

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    

    juego2.input.gamepad.start();

    // To listen to buttons from a specific pad listen directly on that pad game.input.gamepad.padX, where X = pad 1-4
    pad1 = juego2.input.gamepad.pad1;


    

    //juego2.physics.p2.enableBody(paseNivel);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////// TANKABAIA   ///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    tankabaIA.jugador = juego2.add.sprite(100, juego2.world.height - 825, 'tankabaIAmovimiento');
    tankabaIA.jugador.scale.setTo(1.3, 1.3);
    juego2.physics.p2.enableBody(tankabaIA.jugador);
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

    //indicadorJ1 = juego2.add.sprite(2100, juego2.world.height - 225, 'indicadorJ1');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////// ACROBAIA   ////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    acrobaIA.jugador = juego2.add.sprite(700, juego2.world.height - 300, 'acrobaIAmovimiento');
    juego2.physics.p2.enableBody(acrobaIA.jugador);
    acrobaIA.jugador.body.setRectangle(80, 33);
    
    acrobaIA.jugador.body.fixedRotation = true;
    acrobaIA.jugador.body.mass = 1;

    acrobaIA.jugador.dynamic = true;
    acrobaIA.jugador.body.debug = true;

    acrobaIA.jugador.animations.add('movimientoDerecha', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
                                                            20, 21, 22, 23, 24, 25, 26, 27, 28], 60, true);
    acrobaIA.jugador.animations.add('movimientoIzquierda', [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46,
                                                             47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58], 60, true);

    acrobaIA.jugador.body.onBeginContact.add(colisionInicialAcrobaIA, this);
    acrobaIA.jugador.body.onEndContact.add(colisionFinalAcrobaIA, this);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////// TALIBAIA   ////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    talibaIA.jugador = juego2.add.sprite(700, juego2.world.height - 300, 'talibaIAmovimiento');
    juego2.physics.p2.enableBody(talibaIA.jugador);
    talibaIA.jugador.body.setRectangle(80, 40);
    
    talibaIA.jugador.body.fixedRotation = true;
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
/////////DECORADOS POR DELANTE DEL JUGADOR  ///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //nivel1.decorados[2] = juego2.add.image(1610, juego2.world.height - 490, 'conexionTuboArriba');
    //nivel1.decorados[3] = juego2.add.image(1634, juego2.world.height - 1043, 'conexionTuboDerecha');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function stopPlataforma(i){
        plataformasMoviles.lista[i].body.rotateRight(0);
    }

    function cambiarDirAscensor(estado){
       //console.log("ENTRA");
       var velocidad = -125;
       if(estado==="subiendo"){
        ascensores.lista[0].direccion = "bajando";
       }

       if(estado==="bajando"){
        velocidad = 125;
        ascensores.lista[0].direccion = "subiendo";
       }
        ascensores.lista[0].body.moveUp(velocidad);
        //ascensores.lista[0].body.moveUp(0);

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
            let timer =  juego2.time.events.add(1250, stopPlataforma, this, 0);
            plataformasMoviles.lista[0].body.rotateRight(25);      

        }

        if(body.sprite.key === 'boton'){

            //animacion de boton presionado
            //plataformasMoviles.lista[0].body.rotateRight(25);
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
                //plataformasMoviles.lista[0].body.rotateRight(0);
                //stopPlataforma(0);
            }
        }
    }

    function colisionInicialAcrobaIA(body, bodyB, shapeA, shapeB, equation){


        if(body.sprite.key === 'cajaCableado' && tecla_accion.isDown){  

            cajasCableado.lista[0].animations.play('caja_rota');
            let timer =  juego2.time.events.add(1250, stopPlataforma, this, 0);
            plataformasMoviles.lista[0].body.rotateRight(25);      

        }

        if(body.sprite.key === 'boton'){

            //animacion de boton presionado
            plataformasMoviles.lista[0].body.rotateRight(25);
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
            }
        }
    }

    function colisionInicialTalibaIA(body, bodyB, shapeA, shapeB, equation){


        if(body.sprite.key === 'cajaCableado' && tecla_accion.isDown){  
            if(body.id=== 10){
                cajasCableado.lista[0].animations.play('caja_rota');
                //ascensores.lista[0].body.moveUp(75);

                let timer =  juego2.time.events.loop(1250, cambiarDirAscensor, this, ascensores.lista[0].direccion);
                //ascensores.lista[0].body.moveUp(125);

                /*if(ascensores.lista[0].body.y>1078){
                    ascensores.lista[0].body.y;    
                }
                if(ascensores.lista[0].body.y<209){
                    ascensores.lista[0].body.moveDown(75);
                }*/
            }
        }

        if(body.sprite.key === 'boton'){

            //animacion de boton presionado
            plataformasMoviles.lista[0].body.rotateRight(25);
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
                plataformasMoviles.lista[0].body.rotateRight(0);
                //stopPlataforma(0);
            }
        }
    }

     // Creamos un teclado  
    juego2.input.keyboard.onUpCallback = function (e) {
        if (e.keyCode == Phaser.Keyboard.UP) {
            tankabaIA.contadorSaltos++;
        }
    };

    /*puntajeTexto = juego2.add.text(100, 16, 'puntaje: 0 disparos: ' + obj_jugador.cantidad_disparos, {fontSize: '20px', fill: 'red'});// Creamos el texto y lo agregamos como hijo del objeto sprite con addChild
    sprite.addChild(puntajeTexto);*/
    juego2.camera.follow(tankabaIA.jugador); // Le permitimos a la cámara del juego2, seguir en todo momento al obj_jugador.jugador    

    juego2.physics.p2.updateBoundsCollisionGroup();

    juego2.camera.follow(tankabaIA.jugador);
}