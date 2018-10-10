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

obj_jugador3 = {
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

 