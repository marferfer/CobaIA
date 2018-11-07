class Nivel{

    constructor(){
        this.siguiendo = "tankabaIA";
        this.fondo = null;
        this.suelo = null;
        this.grupo = [];
        this.collisionGroup = null;
        this.decorados = [];
    }
}

class CobaIA {

    constructor(){
        this.jugador = null;
        this.ultimo_sentido = 'derecha';
        this.muerta = false;
        this.canImove = true;
        this.chip = null;
        this.trepando = false;
        this.puedoTrepar = false;
        this.actor = "cobaIA";
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

class Ascensor extends Objetos{

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

class PlataformasBasic extends Objetos{

    constructor(){
        super();
    }
}

class Botones extends Objetos{
    
    constructor(){
        super();
    }
}

class Chips extends Objetos{

    constructor(){

        super();
    }
}

class PilaCadaveres extends Objetos{

    constructor(){
        super();
    }
}

class Rayos extends Objetos{

    constructor(){
        super();
    }
}

class Bobinas extends Objetos{

    constructor(){
        super();
    }
}

class Ventiladores extends Objetos{

    constructor(){
        super();
    }
}

var nivelJuego = 0;

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
ctrlR = null;
lasers = null;

 let tankabaIA = new TankabaIA();
 let acrobaIA = new AcrobaIA();
 let talibaIA = new TalibaIA();
 let plataformas = new Plataformas();
 let cajas = new Cajas();
 let nivel1 = new Nivel();
 let compuertas = new Compuertas();
 let tubos = new Tubos();
 let cajasCableado = new CajasCableado();
 let tankabaIA2 = new TankabaIA();
 let plataformasMoviles = new PlataformasMoviles();
 let plataformasBasic = new PlataformasBasic();
 let botones = new Botones();
 let chips = new Chips();
 let pilasCadaveres = new PilaCadaveres();
 let rayos = new Rayos();
 let bobinas = new Bobinas();
 let ventiladores = new Ventiladores();
 let ascensores = new Ascensor();
