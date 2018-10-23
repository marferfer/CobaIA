class Nivel{

    constructor(){

        this.fondo = null;
        this.suelo = null;
        this.grupo = [];
        this.collisionGroup = null;
    }
}

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
        this.collisionGroup = null;
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
        this.collisionGroup = null;
        this.lista = [];
    }

    getCollisionGroup(){

        return this.collisionGroup;
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

class Compuertas extends Objetos{

    constructor(){
        super();
    }
}

class Tubos extends Objetos{

    constructor(){
        super();
    }
}

class CajasCableado extends Objetos{

    constructor(){
        super();
    }
}

class PlataformasMoviles extends Objetos{

    constructor(){
        super();
    }
}

cursores = null; // Eventos de teclado

escaleras = null; // Imagenes que pueden permitirnos subir

puntajeTexto = null; // Texto que muestra el puntaje acumulado

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
 let nivel1 = new Nivel();
 let compuertas = new Compuertas();
 let tubos = new Tubos();
 let decorados = [];
 let cajasCableado = new CajasCableado();
 let tankabaIA2 = new TankabaIA();
 let plataformasMoviles = new PlataformasMoviles();
