// Update
function update() {


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // REINICIAR VARIABLES  ///////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

    tankabaIA.colisionEscalera = false; 
    tankabaIA.contadorEscaleras = 0;

    tankabaIA.jugador.body.velocity.x = 0; //  Reseteamos la velocidad en x. Esto nos permitirá evitar que se acelere (suelo de hielo)
    if(!tankabaIA.canImove){
        tankabaIA.jugador.body.velocity.y = 0;
        tankabaIA.jugador.body.setZeroVelocity();
        tankabaIA.jugador.body.setZeroForce();
    }

    acrobaIA.jugador.body.velocity.x = 0;
    if(!acrobaIA.canImove){
        acrobaIA.jugador.body.velocity.y = 0;
        acrobaIA.jugador.body.setZeroVelocity();
        acrobaIA.jugador.body.setZeroForce();
    }

    talibaIA.jugador.body.velocity.x = 0;
    if(!talibaIA.canImove){
        talibaIA.jugador.body.velocity.y = 0;
        talibaIA.jugador.body.setZeroVelocity();
        talibaIA.jugador.body.setZeroForce();
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////// COBAIAS MUERTAS  ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if(acrobaIA.muerta){

        chips.lista[0].body.static = false;
        chips.lista[0].body.x = acrobaIA.jugador.body.x - 15;
        chips.lista[0].body.y = acrobaIA.jugador.body.y;

        if(acrobaIA.chip === "tankabaIA"){

            chips.lista[2].body.static = false;
            chips.lista[2].body.x = acrobaIA.jugador.body.x - 15;
            chips.lista[2].body.y = acrobaIA.jugador.body.y;

            acrobaIA.chip = null;

        }else if(acrobaIA.chip === "talibaIA"){

            chips.lista[1].body.static = false;
            chips.lista[1].body.x = acrobaIA.jugador.body.x - 15;
            chips.lista[1].body.y = acrobaIA.jugador.body.y;

            acrobaIA.chip = null;

        }else{
            ;
        }

        acrobaIA.jugador.body.x = -120;
        acrobaIA.jugador.body.y = 0;
        acrobaIA.jugador.body.static = true;
        acrobaIA.muerta = false;
        acrobaIA.canImove = false;

        if(!talibaIA.muerta){
            juego.camera.follow(talibaIA.jugador);
        }else{
            juego.camera.follow(tankabaIA.jugador);
        }
        
    }

    if(talibaIA.muerta){

        chips.lista[1].body.static = false;
        chips.lista[1].body.x = talibaIA.jugador.body.x - 15;
        chips.lista[1].body.y = talibaIA.jugador.body.y;

        if(talibaIA.chip === "tankabaIA"){

            chips.lista[2].body.static = false;
            chips.lista[2].body.x = talibaIA.jugador.body.x - 15;
            chips.lista[2].body.y = talibaIA.jugador.body.y;

            talibaIA.chip = null;

        }else if(talibaIA.chip === "acrobaIA"){

            chips.lista[0].body.static = false;
            chips.lista[0].body.x = talibaIA.jugador.body.x - 15;
            chips.lista[0].body.y = talibaIA.jugador.body.y;

            talibaIA.chip = null;
            
        }else{
            ;
        }

        talibaIA.jugador.body.x =  -120;
        talibaIA.jugador.body.y = 0;
        talibaIA.jugador.body.static = true;
        talibaIA.muerta = false;
        talibaIA.canImove = false;

        if(!tankabaIA.muerta){
            juego.camera.follow(tankabaIA.jugador);
        }else{
            juego.camera.follow(acrobaIA.jugador);
        }

    }

    if(tankabaIA.muerta){

        chips.lista[2].body.static = false;
        chips.lista[2].body.x = tankabaIA.jugador.body.x - 15;
        chips.lista[2].body.y = tankabaIA.jugador.body.y;

        if(tankabaIA.chip === "acrobaIA"){

            chips.lista[0].body.static = false;
            chips.lista[0].body.x = acrobaIA.jugador.body.x - 15;
            chips.lista[0].body.y = acrobaIA.jugador.body.y;

            tankabaIA.chip = null;

        }else if(tankabaIA.chip === "talibaIA"){

            chips.lista[1].body.static = false;
            chips.lista[1].body.x = acrobaIA.jugador.body.x - 15;
            chips.lista[1].body.y = acrobaIA.jugador.body.y;

            tankabaIA.chip = null;
            
        }else{
            ;
        }

        tankabaIA.jugador.body.x = 50;
        talibaIA.jugador.body.y = 0;
        tankabaIA.jugador.body.static = true;
        tankabaIA.muerta = false;
        tankabaIA.canImove = false;

        if(!acrobaIA.muerta){
            juego.camera.follow(acrobaIA.jugador);
        }else{
            juego.camera.follow(talibaIA.jugador);
        }
        
    }

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


    if (tankabaIA.jugador.position.y > 1500) { // Muerte al caer
        reinicia();
    }

    if (ctrlR.isDown) { // Pase de nivel
        juego.destroy();
        inicio();
    }

    if (tankabaIA.inmortal && tankabaIA.tiempo_inmortalidad < tankabaIA.tolerancia_vida) {
        tankabaIA.tiempo_inmortalidad++;
        if (tankabaIA.tiempo_inmortalidad % 5 == 0) {
            tankabaIA.jugador.alpha = 0;
        } else {
            tankabaIA.jugador.alpha = 1;
        }
        if (tankabaIA.tiempo_inmortalidad == tankabaIA.tolerancia_vida) {
            tankabaIA.vidas--;
            tankabaIA.inmortal = false;
            tankabaIA.tiempo_inmortalidad = 0;
            tankabaIA.jugador.alpha = 1;
        }
    }

    // Controls
    /*if (pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_LEFT) || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -0.1)
    {
        tankabaIA3.jugador.x-=5;
        tankabaIA3.jugador.animations.play('left');
        tankabaIA3.ultimo_sentido = 'izquierda';
    }
    else if (pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_RIGHT) || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1)
    {
        tankabaIA3.jugador.x+=5;
        tankabaIA3.jugador.animations.play('right');
        tankabaIA3.ultimo_sentido = 'derecha';
    }

    if (pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_UP) || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) < -0.1)
    {
        tankabaIA3.jugador.y-=5;
        tankabaIA3.jugador.animations.play('jump');
    }*/
    /*else if (pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_DOWN) || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) > 0.1)
    {
        tankabaIA.jugador.y+=5;
    }*/

    /*if (pad1.justPressed(Phaser.Gamepad.XBOX360_A))
    {
        tankabaIA.jugador.angle += 5;
    }

    if (pad1.justReleased(Phaser.Gamepad.XBOX360_B))
    {
        tankabaIA.jugador.scale.x += 0.01;
        tankabaIA.jugador.scale.y = tankabaIA.jugador.scale.x;
    }*/


    // Pad derecho controles

    /*if (pad1.connected)
    {
        var rightStickX = pad1.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_X);
        var rightStickY = pad1.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_Y);

        if (rightStickX)
        {
            tankabaIA.jugador.x += rightStickX * 10;
        }

        if (rightStickY)
        {
            tankabaIA.jugador.y += rightStickY * 10;
        }
    }*/
    
    function checkIfCanJump(cobaIA) {

        var yAxis = p2.vec2.fromValues(0, 1);
        var result = false;

        for (var i = 0; i < juego.physics.p2.world.narrowphase.contactEquations.length; i++){

            var c = juego.physics.p2.world.narrowphase.contactEquations[i];

            if (c.bodyA === cobaIA.jugador.body.data || c.bodyB === cobaIA.jugador.body.data){
                var d = p2.vec2.dot(c.normalA, yAxis); // Normal dot Y-axis
                if (c.bodyA === cobaIA.jugador.body.data) d *= -1;
                if (d > 0.5) result = true;
            }
        }
        
        return result;
    }

    if (tecla_laser.isUp) {
        tankabaIA.tiempo_disparo = 0;
    }
    if (tecla_laser.isDown && tankabaIA.tiempo_disparo < tankabaIA.tolerancia_disparo && tankabaIA.cantidad_disparos > 0) {
        tankabaIA.tiempo_disparo++;
        var ajuste = 25;
        if (tankabaIA.ultimo_sentido == 'derecha') {
            //tankabaIA.jugador.animations.play('disparo_derecha');
            if (tankabaIA.tiempo_disparo == 1) {
                tankabaIA.cantidad_disparos--;
                var jnLaser = {
                    distancia: 0,
                    distancia_max: 20,
                    laser: lasers.create(tankabaIA.jugador.position.x + 2 * ajuste, tankabaIA.jugador.position.y + ajuste, 'laser_der')
                };
                tankabaIA.lasers_der.push(jnLaser);
                var instance = createjs.Sound.play(disparo);
                instance.volume = 0.15;
            }
        } else {
            //tankabaIA.jugador.animations.play('disparo_izquierda');
            if (tankabaIA.tiempo_disparo == 1) {
                tankabaIA.cantidad_disparos--;
                var jnLaser = {
                    distancia: 0,
                    distancia_max: 20,
                    laser: lasers.create(tankabaIA.jugador.position.x - ajuste, tankabaIA.jugador.position.y + ajuste, 'laser_izq')
                };
                tankabaIA.lasers_izq.push(jnLaser);
                var instance = createjs.Sound.play(disparo);
                instance.volume = 0.15;
            }
        }
        actualiza_informacion();
    } else if (cursores.left.isDown && tankabaIA.canImove)// Si presionamos LEFT
    {
        
        //createjs.Sound.play(paso);

        tankabaIA.jugador.body.moveLeft(350);
        if(checkIfCanJump(tankabaIA)){
            tankabaIA.jugador.animations.play('movimientoIzquierda');
            tankabaIA.ultimo_sentido = 'izquierda';
        }
    }
     else if (cursores.right.isDown && tankabaIA.canImove)
    {
        
        //createjs.Sound.play(paso);
        
        tankabaIA.jugador.body.moveRight(350);

        if(checkIfCanJump(tankabaIA)){
            tankabaIA.jugador.animations.play('movimientoDerecha');
            tankabaIA.ultimo_sentido = 'derecha';
        }

    } else if (tankabaIA.contadorEscaleras != 0) {// Si el contador de escaleras es <> de cero, quiere decir que estamos escalando
        //tankabaIA.jugador.animations.play('climb');// Animamos la escalada
    } else {
        
        tankabaIA.jugador.animations.stop();

        if(tankabaIA.ultimo_sentido === "derecha"){

            tankabaIA.jugador.frame = 0;

        }else{

            tankabaIA.jugador.frame = 30;
        }
    }   

    

    if (cursores.up.isDown && checkIfCanJump(tankabaIA) && tankabaIA.canImove) { // Si estamos presionando el botón UP y estamos colisionando con alguna plataforma o tal vez el contador de saltos es igual a 1 y además no hay colisión con las escaleras 
        

        tankabaIA.jugador.body.moveUp(300);

     
        //tankabaIA.jugador.animations.play('jump');
        createjs.Sound.play(salto);
        if (tankabaIA.contadorSaltos == 1) {
            tankabaIA.contadorSaltos = 2;
        }
    }

    

    if (tankabaIA.contadorEscaleras < -1) {
        tankabaIA.contadorEscaleras = -1;
    }
    tankabaIA.jugador.position.y += (tankabaIA.contadorEscaleras * 2);
    if (tankabaIA.contadorEscaleras != 0) {
        //tankabaIA.jugador.animations.play('climb');
    }
    for (var i = 0; i < tankabaIA.lasers_der.length; i++) {
        var laserAux = tankabaIA.lasers_der[i].laser;
        tankabaIA.lasers_der[i].distancia++;
        laserAux.position.x += 5;
        if (tankabaIA.lasers_der[i].distancia == tankabaIA.lasers_der[i].distancia_max) {
            tankabaIA.lasers_der[i].laser.kill();
        }
    }
    for (var i = 0; i < tankabaIA.lasers_izq.length; i++) {
        var laserAux = tankabaIA.lasers_izq[i].laser;
        tankabaIA.lasers_izq[i].distancia++;
        laserAux.position.x -= 5;
        if (tankabaIA.lasers_izq[i].distancia == tankabaIA.lasers_izq[i].distancia_max) {
            tankabaIA.lasers_izq[i].laser.kill();
        }
    }


    ///////////////////////////////////////////////////////controles AcrobaIA

    if(ctrlW.isDown && checkIfCanJump(acrobaIA) && acrobaIA.canImove){

        acrobaIA.jugador.body.moveUp(300);

    }else if(ctrlA.isDown && acrobaIA.canImove){

        acrobaIA.jugador.body.moveLeft(300);
        if(checkIfCanJump(acrobaIA)){
            acrobaIA.jugador.animations.play('movimientoIzquierda');
            acrobaIA.ultimo_sentido = "izquierda";
        }

    }else if(ctrlD.isDown && acrobaIA.canImove){

        acrobaIA.jugador.body.moveRight(300);
        if(checkIfCanJump(acrobaIA)){
            acrobaIA.jugador.animations.play('movimientoDerecha');
            acrobaIA.ultimo_sentido = "derecha";
        }

    }else{

        acrobaIA.jugador.animations.stop();
        if(acrobaIA.ultimo_sentido === "derecha"){
            
            acrobaIA.jugador.frame = 0;

        }else{

            acrobaIA.jugador.frame = 30;
        }
        
    }

    ///////////////////////////////////////////////////////controles talibaIA

    if(ctrlH.isDown && checkIfCanJump(talibaIA) && talibaIA.canImove){

        talibaIA.jugador.body.moveUp(300);

    }else if(ctrlB.isDown && talibaIA.canImove){

        talibaIA.jugador.body.moveLeft(300);
        if(checkIfCanJump(talibaIA)){
            talibaIA.jugador.animations.play('movimientoIzquierda');
            talibaIA.ultimo_sentido = "izquierda";
        }

    }else if(ctrlM.isDown && talibaIA.canImove){

        talibaIA.jugador.body.moveRight(300);
        if(checkIfCanJump(talibaIA)){
            talibaIA.jugador.animations.play('movimientoDerecha');
            talibaIA.ultimo_sentido = "derecha";
        }

    }else{

        talibaIA.jugador.animations.stop();
        if(talibaIA.ultimo_sentido === "derecha"){
            
            talibaIA.jugador.frame = 0;    
        }else{

            talibaIA.jugador.frame = 30;
        }
        
    }
}

function reinicia() {
        //juego.autoStart();
        if (tankabaIA.muriendo == false) {
            tankabaIA.muriendo = true;
            createjs.Sound.play(perder);
        }
        setTimeout(function () {
            location.reload();
        }, 3000);

    }