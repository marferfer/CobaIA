class CobaIA {

    constructor(){
        this.muriendo = false;
        this.musica_diabolica = false;
        this.jugador = null;
        this.vidas = 3;
        this.retrasa_paso = 0;
        this.corazones = [];
        this.inmortal = false;
        this.tiempo_inmortalidad = 0;
        this.tolerancia_vida = 100;
        this.tiempo_disparo = 0;
        this.tolerancia_disparo = 10;
        this.cantidad_disparos = 5;
        this.lasers_der = [];
        this.lasers_izq = [];
        this.puntaje = 0;
        this.contadorSaltos = 0;
        this.colisionEscalera = false;
        this.contadorEscaleras = 0;
        this.ultimo_sentido = 'derecha';
    }
};

class TankabaIA extends CobaIA{

    constructor(){
        super();
    }

};

class TalibaIA extends CobaIA{

    constructor(){
        super();
    }
};

class AcrobaIA extends CobaIA{

    constructor(){
        super();
    }
};

class Objetos {

    constructor(){

        this.grupo = null;
        this.lista = [];
    }
};

class Plataformas extends Objetos {

    constructor(){
        super();
    }
};

class Cajas extends Objetos{

    constructor(){
        super();
    }
};

class Suelos extends Objetos{

    constructor(){
        super();
    }
};


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

circulos = null; // Potenciales enemigos
lista_circulos = []; // Arreglo de lista_circulos

tecla_laser = null;
ctrlW = null;
ctrlA = null;
ctrlS = null;
ctrlD = null;
lasers = null;

 let tankabaIA = new TankabaIA();
 let plataformas = new Plataformas();
 let cajas = new Cajas();
 let suelos = new Suelos();
