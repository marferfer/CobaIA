function inicio() {
                juego = new Phaser.Game(1920, 800, Phaser.AUTO, '', {preload: preload, create: create, update: update, render: render});

                obj_jugador = {
                    "muriendo": false,
                    "musica_diabolica": false,
                    "jugador": null,
                    "vidas": 3,
                    "retrasa_paso": 0,
                    "corazones": [],
                    "inmortal": false,
                    "tiempo_inmortalidad": 0,
                    "tolerancia_vida": 100,
                    "tiempo_disparo": 0,
                    "tolerancia_disparo": 10,
                    "cantidad_disparos": 5,
                    "lasers_der": [],
                    "lasers_izq": [],
                    "puntaje": 0,
                    "contadorSaltos": 0,
                    "colisionEscalera": false,
                    "contadorEscaleras": 0,
                    "ultimo_sentido": 'derecha'
                };

                obj_jugador2 = {
                    "muriendo": false,
                    "musica_diabolica": false,
                    "jugador": null,
                    "vidas": 3,
                    "retrasa_paso": 0,
                    "corazones": [],
                    "inmortal": false,
                    "tiempo_inmortalidad": 0,
                    "tolerancia_vida": 100,
                    "tiempo_disparo": 0,
                    "tolerancia_disparo": 10,
                    "cantidad_disparos": 5,
                    "lasers_der": [],
                    "lasers_izq": [],
                    "puntaje": 0,
                    "contadorSaltos": 0,
                    "colisionEscalera": false,
                    "contadorEscaleras": 0,
                    "ultimo_sentido": 'derecha'
                };

                /*obj_jugador3 = {
                    "muriendo": false,
                    "musica_diabolica": false,
                    "jugador": null,
                    "vidas": 3,
                    "retrasa_paso": 0,
                    "corazones": [],
                    "inmortal": false,
                    "tiempo_inmortalidad": 0,
                    "tolerancia_vida": 100,
                    "tiempo_disparo": 0,
                    "tolerancia_disparo": 10,
                    "cantidad_disparos": 5,
                    "lasers_der": [],
                    "lasers_izq": [],
                    "puntaje": 0,
                    "contadorSaltos": 0,
                    "colisionEscalera": false,
                    "contadorEscaleras": 0,
                    "ultimo_sentido": 'derecha'
                };*/

                //obj_jugador2 = obj_jugador;

                /*function Obj_Jugar {
                    constructor(){

                    }
                    let muriendo: false;
                    let jugador: null;
                    let vidas: 1;
                    "retrasa_paso": 0,
                    "corazones": [],
                    "inmortal": false,
                    "tiempo_inmortalidad": 0,
                    "tolerancia_vida": 100,
                    "tiempo_disparo": 0,
                    "tolerancia_disparo": 10,
                    "cantidad_disparos": 5,
                    "lasers_der": [],
                    "lasers_izq": [],
                    "puntaje": 0,
                    "contadorSaltos": 0,
                    "colisionEscalera": false,
                    "contadorEscaleras": 0,
                    "ultimo_sentido": 'derecha'
                }*/

                obj_plataforma = {
                    plataforma_grupo: null,
                    plataformas: []
                };

                
                //indicator = null;
                cursores = null; // Eventos de teclado

                escaleras = null; // Imagenes que pueden permitirnos subir

                puntajeTexto = null; // Texto que muestra el puntaje acumulado

                manos = null; // Potenciales enemigos
                lista_manos = []; // Arreglo de lista_manos

                cont_desp = 0;
                cont_desp_circulo = 0;

                cont_desp_plat = 0;

                posimas = null; // Pósimas
                lista_posimas = []; // Arreglo de lista_posimas

                puas = null; // Puas
                lista_puas = []; // Arreglo de puas

                rocas = null; // Rocas
                lista_rocas = []; // Arreglo de rocas

                imagenes = null; // Rocas
                lista_imagenes = []; // Arreglo de rocas

                obj_caja = {
                    caja_grupo: null,
                    cajas: []
                };

                obj_arbol = {
                    arbol_grupo: null,
                    arboles: []
                };

                circulos = null; // Potenciales enemigos
                lista_circulos = []; // Arreglo de lista_circulos

                tecla_laser = null;
                ctrlW = null;
                ctrlA = null;
                ctrlS = null;
                ctrlD = null;
                lasers = null;

                function preload() {
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
                    obj_plataforma.plataformas.push(obj_plataforma.plataforma_grupo.create(50, juego.world.height - 100, 'tierra')); // Plataformas
                    obj_plataforma.plataformas[(obj_plataforma.plataformas.length - 1)].scale.setTo(1, 1);
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
                    puntajeTexto = juego.add.text(100, 16, 'puntaje: 0 disparos: ' + obj_jugador.cantidad_disparos, {fontSize: '20px', fill: 'red'});// Creamos el texto y lo agregamos como hijo del objeto sprite con addChild
                    sprite.addChild(puntajeTexto);
                    sprite.cameraOffset.x = 10; // Ubicamos el sprite contenedor de la cámara en las coordenadas 10, 10
                    sprite.cameraOffset.y = 10;
                    juego.camera.follow(obj_jugador2.jugador); // Le permitimos a la cámara del juego, seguir en todo momento al obj_jugador.jugador                
                }

                /*function dump() {

                    console.log(pad1._axes[0]);
                    console.log(pad1._rawPad.axes[0]);

                }*/

                // Update
                function update() {

                    //Indicador

                    // Pad "connected or not" indicator
                    if (juego.input.gamepad.supported && juego.input.gamepad.active && pad1.connected)
                    {
                        indicator.animations.frame = 0;
                    }
                    else
                    {
                        indicator.animations.frame = 1;
                    }


                    if (obj_jugador.jugador.position.y > 1500) { // Muerte al caer
                        reinicia();
                    }
                    if (obj_jugador.inmortal && obj_jugador.tiempo_inmortalidad < obj_jugador.tolerancia_vida) {
                        obj_jugador.tiempo_inmortalidad++;
                        if (obj_jugador.tiempo_inmortalidad % 5 == 0) {
                            obj_jugador.jugador.alpha = 0;
                        } else {
                            obj_jugador.jugador.alpha = 1;
                        }
                        if (obj_jugador.tiempo_inmortalidad == obj_jugador.tolerancia_vida) {
                            obj_jugador.vidas--;
                            obj_jugador.inmortal = false;
                            obj_jugador.tiempo_inmortalidad = 0;
                            obj_jugador.jugador.alpha = 1;
                        }
                    }

                    // Controls
                    if (pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_LEFT) || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -0.1)
                    {
                        obj_jugador.jugador.x-=5;
                    }
                    else if (pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_RIGHT) || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1)
                    {
                        obj_jugador.jugador.x+=5;
                    }

                    if (pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_UP) || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) < -0.1)
                    {
                        obj_jugador.jugador.y-=5;
                    }
                    /*else if (pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_DOWN) || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) > 0.1)
                    {
                        obj_jugador.jugador.y+=5;
                    }*/

                    /*if (pad1.justPressed(Phaser.Gamepad.XBOX360_A))
                    {
                        obj_jugador.jugador.angle += 5;
                    }

                    if (pad1.justReleased(Phaser.Gamepad.XBOX360_B))
                    {
                        obj_jugador.jugador.scale.x += 0.01;
                        obj_jugador.jugador.scale.y = obj_jugador.jugador.scale.x;
                    }*/


                    // Pad derecho controles

                    /*if (pad1.connected)
                    {
                        var rightStickX = pad1.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_X);
                        var rightStickY = pad1.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_Y);

                        if (rightStickX)
                        {
                            obj_jugador.jugador.x += rightStickX * 10;
                        }

                        if (rightStickY)
                        {
                            obj_jugador.jugador.y += rightStickY * 10;
                        }
                    }*/


                    obj_jugador.colisionEscalera = false; // Reiniciamos variables
                    obj_jugador.contadorEscaleras = 0;
                    obj_jugador.jugador.body.velocity.x = 0; //  Reseteamos la velocidad del obj_jugador.jugador en x, esto nos permitirá evitar que se acelere
                    juego.physics.arcade.collide(obj_jugador.jugador, obj_plataforma.plataformas);// Hacemos colisionar al obj_jugador.jugador con las obj_plataforma.plataformas
                    juego.physics.arcade.collide(obj_jugador.jugador, obj_caja.cajas);// Hacemos colisionar al obj_jugador.jugador con las obj_caja.cajas                    
                    juego.physics.arcade.collide(manos, obj_plataforma.plataformas);// Lo mismo hacemos con las manos
                    juego.physics.arcade.collide(manos, rocas);
                    juego.physics.arcade.collide(posimas, obj_plataforma.plataformas);// Lo mismo hacemos con las posimas                    
                    juego.physics.arcade.collide(rocas, obj_plataforma.plataformas);// Lo mismo hacemos con las rocas
                    juego.physics.arcade.collide(rocas, obj_jugador.jugador);

                    //Juggador 2 colisiones
                    obj_jugador2.colisionEscalera = false; // Reiniciamos variables
                    obj_jugador2.contadorEscaleras = 0;
                    obj_jugador2.jugador.body.velocity.x = 0; //  Reseteamos la velocidad del obj_jugador.jugador en x, esto nos permitirá evitar que se acelere
                    juego.physics.arcade.collide(obj_jugador2.jugador, obj_plataforma.plataformas);// Hacemos colisionar al obj_jugador.jugador con las obj_plataforma.plataformas
                    juego.physics.arcade.collide(obj_jugador2.jugador, obj_caja.cajas);// Hacemos colisionar al obj_jugador.jugador con las obj_caja.cajas                    
                    juego.physics.arcade.collide(manos, obj_plataforma.plataformas);// Lo mismo hacemos con las manos
                    juego.physics.arcade.collide(manos, rocas);
                    juego.physics.arcade.collide(posimas, obj_plataforma.plataformas);// Lo mismo hacemos con las posimas                    
                    juego.physics.arcade.collide(rocas, obj_plataforma.plataformas);// Lo mismo hacemos con las rocas
                    juego.physics.arcade.collide(rocas, obj_jugador2.jugador);
                    //juego.physics.arcade.overlap(obj_jugador.jugador, escaleras, collectEscaleras, null, this);// Evaluamos la colisión con las escaleras
                    //juego.physics.arcade.overlap(obj_jugador.jugador, imagenes, collectIluminati_escaleras, null, this);// Evaluamos la colisión con las escaleras
                    if (!obj_jugador.colisionEscalera) { // Si no hay colisión con las escaleras, entonces reestablecemos la gravedad
                        obj_jugador.jugador.body.gravity.y = 500;
                    } else {// Si hay colisión con las escaleras, entonces la gravedad la llevamos a cero, por lo tanto, el obj_jugador.jugador no caerá, dando la sensación de estar suspendido en uno de sus escalones
                        obj_jugador.jugador.body.velocity.y = 0;
                    }
                    if (tecla_laser.isUp) {
                        obj_jugador.tiempo_disparo = 0;
                    }
                    if (tecla_laser.isDown && obj_jugador.tiempo_disparo < obj_jugador.tolerancia_disparo && obj_jugador.cantidad_disparos > 0) {
                        obj_jugador.tiempo_disparo++;
                        var ajuste = 25;
                        if (obj_jugador.ultimo_sentido == 'derecha') {
                            obj_jugador.jugador.animations.play('disparo_derecha');
                            if (obj_jugador.tiempo_disparo == 1) {
                                obj_jugador.cantidad_disparos--;
                                var jnLaser = {
                                    distancia: 0,
                                    distancia_max: 20,
                                    laser: lasers.create(obj_jugador.jugador.position.x + 2 * ajuste, obj_jugador.jugador.position.y + ajuste, 'laser_der')
                                };
                                obj_jugador.lasers_der.push(jnLaser);
                                var instance = createjs.Sound.play(disparo);
                                instance.volume = 0.15;
                            }
                        } else {
                            obj_jugador.jugador.animations.play('disparo_izquierda');
                            if (obj_jugador.tiempo_disparo == 1) {
                                obj_jugador.cantidad_disparos--;
                                var jnLaser = {
                                    distancia: 0,
                                    distancia_max: 20,
                                    laser: lasers.create(obj_jugador.jugador.position.x - ajuste, obj_jugador.jugador.position.y + ajuste, 'laser_izq')
                                };
                                obj_jugador.lasers_izq.push(jnLaser);
                                var instance = createjs.Sound.play(disparo);
                                instance.volume = 0.15;
                            }
                        }
                        actualiza_informacion();
                    } else if (cursores.left.isDown)// Si presionamos LEFT
                    {
                        /*obj_jugador.retrasa_paso++;
                         if (obj_jugador.retrasa_paso % 10 == 0) {
                         paso.volume = 0.0
                         createjs.Sound.play(paso);
                         }*/
                        //  Lo movemos a la izquierda
                        obj_jugador.jugador.body.velocity.x = -150;

                        obj_jugador.jugador.animations.play('left');
                        obj_jugador.ultimo_sentido = 'izquierda';
                    }
                     else if (cursores.right.isDown)// Si presionamos RIGHT
                    {
                        /*obj_jugador.retrasa_paso++;
                         if (obj_jugador.retrasa_paso % 10 == 0) {
                         paso.volume = 0.0;
                         createjs.Sound.play(paso);
                         }*/
                        //  Move to the right
                        obj_jugador.jugador.body.velocity.x = 150;

                        obj_jugador.jugador.animations.play('right');
                        obj_jugador.ultimo_sentido = 'derecha';
                    } else if (obj_jugador.contadorEscaleras != 0) {// Si el contador de escaleras es <> de cero, quiere decir que estamos escalando
                        obj_jugador.jugador.animations.play('climb');// Animamos la escalada
                    } else {
                        //  No estamos precionando ninguna tecla
                        obj_jugador.jugador.animations.stop();
                        obj_jugador.jugador.frame = 1;
                    }
                    if (cursores.up.isDown && (obj_jugador.jugador.body.touching.down || obj_jugador.contadorSaltos == 1) && !obj_jugador.colisionEscalera) { // Si estamos presionando el botón UP y estamos colisionando con alguna plataforma o tal vez el contador de saltos es igual a 1 y además no hay colisión con las escaleras 
                        obj_jugador.jugador.body.velocity.y = -250;
                        obj_jugador.jugador.animations.play('jump');
                        createjs.Sound.play(salto);
                        if (obj_jugador.contadorSaltos == 1) {
                            obj_jugador.contadorSaltos = 2;
                        }
                    }

                    if (obj_jugador.jugador.body.touching.down) { // Si el obj_jugador.jugador toca una plataforma el contador de saltos se setea en cero otra vez
                        obj_jugador.contadorSaltos = 0;
                    }

                    if (obj_jugador.contadorEscaleras < -1) {
                        obj_jugador.contadorEscaleras = -1;
                    }
                    obj_jugador.jugador.position.y += (obj_jugador.contadorEscaleras * 2);
                    if (obj_jugador.contadorEscaleras != 0) {
                        obj_jugador.jugador.animations.play('climb');
                    }
                    for (var i = 0; i < obj_jugador.lasers_der.length; i++) {
                        var laserAux = obj_jugador.lasers_der[i].laser;
                        obj_jugador.lasers_der[i].distancia++;
                        laserAux.position.x += 5;
                        if (obj_jugador.lasers_der[i].distancia == obj_jugador.lasers_der[i].distancia_max) {
                            obj_jugador.lasers_der[i].laser.kill();
                        }
                    }
                    for (var i = 0; i < obj_jugador.lasers_izq.length; i++) {
                        var laserAux = obj_jugador.lasers_izq[i].laser;
                        obj_jugador.lasers_izq[i].distancia++;
                        laserAux.position.x -= 5;
                        if (obj_jugador.lasers_izq[i].distancia == obj_jugador.lasers_izq[i].distancia_max) {
                            obj_jugador.lasers_izq[i].laser.kill();
                        }
                    }

                    //////////////////////////////////////////////////////////////////
                    //////////////////// JUGADOR 2 CONDICIONES ///////////////////////
                    //////////////////////////////////////////////////////////////////

                    if (!obj_jugador2.colisionEscalera) { // Si no hay colisión con las escaleras, entonces reestablecemos la gravedad
                        obj_jugador2.jugador.body.gravity.y = 500;
                    } else {// Si hay colisión con las escaleras, entonces la gravedad la llevamos a cero, por lo tanto, el obj_jugador.jugador no caerá, dando la sensación de estar suspendido en uno de sus escalones
                        obj_jugador2.jugador.body.velocity.y = 0;
                    }
                    if (tecla_laser.isUp) {
                        obj_jugador2.tiempo_disparo = 0;
                    }
                    if (tecla_laser.isDown && obj_jugador2.tiempo_disparo < obj_jugador2.tolerancia_disparo && obj_jugador2.cantidad_disparos > 0) {
                        obj_jugador2.tiempo_disparo++;
                        var ajuste = 25;
                        if (obj_jugador2.ultimo_sentido == 'derecha') {
                            obj_jugador2.jugador.animations.play('disparo_derecha');
                            if (obj_jugador2.tiempo_disparo == 1) {
                                obj_jugador2.cantidad_disparos--;
                                var jnLaser = {
                                    distancia: 0,
                                    distancia_max: 20,
                                    laser: lasers.create(obj_jugador2.jugador.position.x + 2 * ajuste, obj_jugador2.jugador.position.y + ajuste, 'laser_der')
                                };
                                obj_jugador2.lasers_der.push(jnLaser);
                                var instance = createjs.Sound.play(disparo);
                                instance.volume = 0.15;
                            }
                        } else {
                            obj_jugador2.jugador.animations.play('disparo_izquierda');
                            if (obj_jugador2.tiempo_disparo == 1) {
                                obj_jugador2.cantidad_disparos--;
                                var jnLaser = {
                                    distancia: 0,
                                    distancia_max: 20,
                                    laser: lasers.create(obj_jugador2.jugador.position.x - ajuste, obj_jugador2.jugador.position.y + ajuste, 'laser_izq')
                                };
                                obj_jugador2.lasers_izq.push(jnLaser);
                                var instance = createjs.Sound.play(disparo);
                                instance.volume = 0.15;
                            }
                        }
                        actualiza_informacion();
                    } else if (ctrlA.isDown)// Si presionamos LEFT
                    {
                        /*obj_jugador.retrasa_paso++;
                         if (obj_jugador.retrasa_paso % 10 == 0) {
                         paso.volume = 0.0
                         createjs.Sound.play(paso);
                         }*/
                        //  Lo movemos a la izquierda
                        obj_jugador2.jugador.body.velocity.x = -150;

                        obj_jugador2.jugador.animations.play('left');
                        obj_jugador2.ultimo_sentido = 'izquierda';
                    } else if (ctrlD.isDown)// Si presionamos RIGHT
                    {
                        /*obj_jugador.retrasa_paso++;
                         if (obj_jugador.retrasa_paso % 10 == 0) {
                         paso.volume = 0.0;
                         createjs.Sound.play(paso);
                         }*/
                        //  Move to the right
                        obj_jugador2.jugador.body.velocity.x = 150;

                        obj_jugador2.jugador.animations.play('right');
                        obj_jugador2.ultimo_sentido = 'derecha';
                    } else if (obj_jugador2.contadorEscaleras != 0) {// Si el contador de escaleras es <> de cero, quiere decir que estamos escalando
                        obj_jugador2.jugador.animations.play('climb');// Animamos la escalada
                    } else {
                        //  No estamos precionando ninguna tecla
                        obj_jugador2.jugador.animations.stop();
                        obj_jugador2.jugador.frame = 1;
                    }
                    if (ctrlW.isDown && (obj_jugador2.jugador.body.touching.down || obj_jugador2.contadorSaltos == 1) && !obj_jugador2.colisionEscalera) { // Si estamos presionando el botón UP y estamos colisionando con alguna plataforma o tal vez el contador de saltos es igual a 1 y además no hay colisión con las escaleras 
                        obj_jugador2.jugador.body.velocity.y = -250;
                        obj_jugador2.jugador.animations.play('jump');
                        createjs.Sound.play(salto);
                        if (obj_jugador2.contadorSaltos == 1) {
                            obj_jugador2.contadorSaltos = 2;
                        }
                    }

                    if (obj_jugador2.jugador.body.touching.down) { // Si el obj_jugador.jugador toca una plataforma el contador de saltos se setea en cero otra vez
                        obj_jugador2.contadorSaltos = 0;
                    }

                    if (obj_jugador2.contadorEscaleras < -1) {
                        obj_jugador2.contadorEscaleras = -1;
                    }
                    obj_jugador2.jugador.position.y += (obj_jugador2.contadorEscaleras * 2);
                    if (obj_jugador2.contadorEscaleras != 0) {
                        obj_jugador2.jugador.animations.play('climb');
                    }
                    for (var i = 0; i < obj_jugador2.lasers_der.length; i++) {
                        var laserAux = obj_jugador2.lasers_der[i].laser;
                        obj_jugador2.lasers_der[i].distancia++;
                        laserAux.position.x += 5;
                        if (obj_jugador2.lasers_der[i].distancia == obj_jugador2.lasers_der[i].distancia_max) {
                            obj_jugador2.lasers_der[i].laser.kill();
                        }
                    }
                    for (var i = 0; i < obj_jugador2.lasers_izq.length; i++) {
                        var laserAux = obj_jugador2.lasers_izq[i].laser;
                        obj_jugador2.lasers_izq[i].distancia++;
                        laserAux.position.x -= 5;
                        if (obj_jugador2.lasers_izq[i].distancia == obj_jugador2.lasers_izq[i].distancia_max) {
                            obj_jugador2.lasers_izq[i].laser.kill();
                        }
                    }

                    cont_desp_circulo += 0.025; // Mover circulos
                    for (var i = 0; i < lista_circulos.length; i++) {
                        lista_circulos[i].circulo.body.position.x += 5 * Math.sin(cont_desp_circulo);
                        //lista_circulos[i].circulo.angle+=1;
                    }

                    cont_desp += (0.0125 + Math.random() * 0.00125); // Mover enemigos
                    for (var i = 0; i < lista_manos.length; i++) {
                        lista_manos[i].mano.body.position.x += Math.sin(cont_desp);
                    }

                    cont_desp_plat += 0.0355; // Mover platillo
                    if (!jnPlatillo.estado) {
                        platillo.body.position.y += Math.sin(cont_desp_plat);
                    } else {
                        platillo.body.position.y -= 2;
                        platillo.body.position.x += 50 * Math.cos(cont_desp_plat);
                        if (platillo.body.position.y < 1000) {
                            lista_mensajes[0].mensaje.alpha = 1;
                            setTimeout(function () {
                                reinicia_inmediato();
                            }, 3000);
                        }
                    }

                    // Funsiones al colisionar 
                    /*juego.physics.arcade.overlap(lasers, manos, collectlasermano, null, this);
                    juego.physics.arcade.overlap(obj_jugador.jugador, manos, collectmano, null, this);
                    juego.physics.arcade.overlap(obj_jugador.jugador, posimas, collectposima, null, this);
                    juego.physics.arcade.overlap(obj_jugador.jugador, puas, collectpuas, null, this);
                    juego.physics.arcade.overlap(obj_jugador.jugador, platillos, collectplatillo, null, this);
                    juego.physics.arcade.overlap(obj_jugador.jugador, circulos, collectcirculos, null, this);
                    juego.physics.arcade.overlap(obj_jugador.jugador, vidas, collectvidas, null, this);*/
                }

                function render() { // Render
                    //juego.debug.cameraInfo(juego.camera, 32, 32);
                    //juego.debug.spriteCoords(obj_jugador.jugador, 32, 500);
                }

                /*function collectvidas(jugador, vida) {
                    createjs.Sound.play(risa);
                    vida.kill();
                    obj_jugador.vidas++;
                    var indice = obj_jugador.vidas - 1;
                    obj_jugador.corazones[indice] = juego.add.sprite(400 + (indice * 50), 0, 'corazon'); // Corazones de vidas
                    obj_jugador.corazones[indice].fixedToCamera = true;
                }

                function collectplatillo(jugador, platillo) {
                    jnPlatillo.estado = true;
                    jugador.kill();
                }

                function collectpuas(jugador, pua) {
                    if (!obj_jugador.inmortal) {
                        try {
                            obj_jugador.corazones[obj_jugador.vidas - 1].visible = false;
                        } catch (err) {
                            console.log('desbordamiento');
                        }
                        if (obj_jugador.vidas == 0) {
                            reinicia_inmediato();
                        }
                        obj_jugador.inmortal = true;
                        obj_jugador.tiempo_inmortalidad = 0;
                    }
                }

                function collectcirculos(jugador, pua) {
                    if (!obj_jugador.inmortal) {
                        createjs.Sound.play(dolor);
                        try {
                            obj_jugador.corazones[obj_jugador.vidas - 1].visible = false;
                        } catch (err) {
                            console.log('desbordamiento');
                        }
                        if (obj_jugador.vidas == 0) {
                            reinicia_inmediato();
                        }
                        obj_jugador.inmortal = true;
                        obj_jugador.tiempo_inmortalidad = 0;
                    }
                }

                function collectlasermano(laser, mano) {
                    createjs.Sound.play(muerte_malo);
                    mano.kill();
                }

                function collectposima(jugador, posima) {
                    createjs.Sound.play(posion);
                    obj_jugador.cantidad_disparos++;
                    posima.kill();
                    actualiza_informacion();
                }

                function collectmano(jugador, mano) {
                    // Si los pies del obj_jugador.jugador tocan la parte superior de la mano
                    if ((jugador.position.y + jugador.height) <= mano.position.y) {
                        createjs.Sound.play(muerte_malo);
                        // Removes the mano from the screen
                        mano.kill();
                        lista_manos[0].mano.body.bounce.y = 0;

                        //  Actualizamos e incrementamos el puntaje
                        obj_jugador.puntaje += 10;
                        actualiza_informacion();
                        jugador.body.velocity.y = -250;
                        obj_jugador.contadorSaltos = 0;
                    } else if (!obj_jugador.inmortal) {
                        try {
                            obj_jugador.corazones[obj_jugador.vidas - 1].visible = false;
                        } catch (err) {
                            console.log('desbordamiento');

                        }
                        if (obj_jugador.vidas == 0) {
                            reinicia_inmediato();
                        }
                        obj_jugador.inmortal = true;
                        obj_jugador.tiempo_inmortalidad = 0;
                        //console.log(obj_jugador.vidas);
                        createjs.Sound.play(pierde_vida);
                    }
                }

                function collectEscaleras(jugador, escalera) {
                    // 
                    if ((jugador.position.y + jugador.height) > escalera.position.y) {
                        obj_jugador.colisionEscalera = true;
                        jugador.body.gravity.y = 0;
                        if (cursores.up.isDown && (jugador.position.y + jugador.height) >= (escalera.position.y))
                        {
                            obj_jugador.contadorEscaleras--;
                        }
                        if (cursores.up.isDown && (jugador.position.y + jugador.height) >= (escalera.position.y) && (jugador.position.y + jugador.height) <= (escalera.position.y + 5))
                        {
                            obj_jugador.colisionEscalera = false;
                        }
                        if (cursores.down.isDown && (jugador.position.y + jugador.height) <= (escalera.position.y + escalera.height))
                        {
                            obj_jugador.contadorEscaleras++;
                        }
                    }
                }


                function collectIluminati_escaleras(jugador, escalera) {
                    if ((jugador.position.y + jugador.height) > escalera.position.y) {
                        if (obj_jugador.musica_diabolica == false && jugador.position.y > 400) {
                            obj_jugador.musica_diabolica = true;
                            createjs.Sound.play(maldad);
                            setTimeout(function () {
                                createjs.Sound.play(maldad_2, {interrupt: createjs.Sound.INTERRUPT_ANY, loop: -1});
                                createjs.Sound.play(maldad_3, {interrupt: createjs.Sound.INTERRUPT_ANY, loop: -1});
                                setTimeout(function () {
                                    createjs.Sound.play(maldad_4);
                                    document.getElementById("payaso").style.removeProperty('display');
                                }, 1000);
                            }, 3000);
                            instance.volume = 0;
                        }
                        obj_jugador.colisionEscalera = true;
                        jugador.body.gravity.y = 0;
                        if (cursores.up.isDown && (jugador.position.y + jugador.height) >= (escalera.position.y))
                        {
                            obj_jugador.contadorEscaleras--;
                        }
                        if (cursores.up.isDown && (jugador.position.y + jugador.height) >= (escalera.position.y) && (jugador.position.y + jugador.height) <= (escalera.position.y + 5))
                        {
                            obj_jugador.colisionEscalera = false;
                        }
                        if (cursores.down.isDown && (jugador.position.y + jugador.height) <= (escalera.position.y + escalera.height))
                        {
                            obj_jugador.contadorEscaleras++;
                        }
                    }
                }*/

                function actualiza_informacion() {
                    puntajeTexto.text = 'puntaje: ' + obj_jugador.puntaje + ' disparos: ' + obj_jugador.cantidad_disparos;
                }

                function reinicia_inmediato() {
                    location.reload();
                }

                function reinicia() {
                    //juego.autoStart();
                    if (obj_jugador.muriendo == false) {
                        obj_jugador.muriendo = true;
                        createjs.Sound.play(perder);
                    }
                    setTimeout(function () {
                        location.reload();
                    }, 3000);

                }
            }