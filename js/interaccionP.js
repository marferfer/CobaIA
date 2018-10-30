// Update
function updateP() {

    //console.log(tankabaIA.jugador.body.y);
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
            juegoPruebas.camera.follow(talibaIA.jugador);
        }else{
            juegoPruebas.camera.follow(tankabaIA.jugador);
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
            juegoPruebas.camera.follow(tankabaIA.jugador);
        }else{
            juegoPruebas.camera.follow(acrobaIA.jugador);
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

        tankabaIA.jugador.body.x = -120;
        tankabaIA.jugador.body.y = 0;
        tankabaIA.jugador.body.static = true;
        tankabaIA.muerta = false;
        tankabaIA.canImove = false;

        if(!acrobaIA.muerta){
            juegoPruebas.camera.follow(acrobaIA.jugador);
        }else{
            juegoPruebas.camera.follow(talibaIA.jugador);
        }
        
    }

    //Indicador

    // Pad "connected or not" indicator
    if (juegoPruebas.input.gamepad.supported && juegoPruebas.input.gamepad.active && pad1.connected)
    {
        indicator.animations.frame = 0;
    }
    else
    {
        indicator.animations.frame = 1;
    }

    for(let i = 0; i < ventiladores.lista.length; i++){
        
        let ventilador = ventiladores.lista[i];

        if(ventilador.posicion === "vertical"){

            if(tankabaIA.jugador.x >= ventilador.zona[0] && tankabaIA.jugador.x <= ventilador.zona[1] 
                && tankabaIA.jugador.y <= ventilador.zona[2] && tankabaIA.jugador.y >= ventilador.zona[3]){

                tankabaIA.jugador.body.moveUp(150);
            }
        }
    }

    if (tankabaIA.jugador.position.y > 1500) { // Muerte al caer
        reinicia();
    }

    if (ctrlR.isDown) { // Pase de nivel
        juegoPruebas.destroy();
        inicio();
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

        for (var i = 0; i < juegoPruebas.physics.p2.world.narrowphase.contactEquations.length; i++){

            var c = juegoPruebas.physics.p2.world.narrowphase.contactEquations[i];

            if (c.bodyA === cobaIA.jugador.body.data || c.bodyB === cobaIA.jugador.body.data){
                var d = p2.vec2.dot(c.normalA, yAxis); // Normal dot Y-axis
                if (c.bodyA === cobaIA.jugador.body.data) d *= -1;
                if (d > 0.5) result = true;
            }
        }
        
        return result;
    }

    if (!checkIfCanJump(tankabaIA)) {
        console.log(tankabaIA.jugador.body.angle + ', ' + (tankabaIA.jugador.body.angle >= 0.0 && tankabaIA.jugador.body.angle <= 45.0));
        //let timer =  juegoPruebas.time.events.add(1250, function(){tankabaIA.jugador.body.angle = 0;}, this, 0);
        //tankabaIA.jugador.body.angle = 0;
        tankabaIA.jugador.body.fixedRotation = true;
        if (!(tankabaIA.jugador.body.angle >= -45 && tankabaIA.jugador.body.angle <= 45) && tankabaIA.ultimo_sentido == 'derecha') {
            tankabaIA.jugador.body.angle = 0;
            console.log("hola");
        }
        else if (!(tankabaIA.jugador.body.angle >= 135 && tankabaIA.jugador.body.angle <= 225) && tankabaIA.ultimo_sentido == 'izquierda') {
            tankabaIA.jugador.body.angle = 0;
            console.log("hola");
        }
    }
    else {
        tankabaIA.jugador.body.fixedRotation = false;
    }
    
    if (cursores.left.isDown && tankabaIA.canImove)// Si presionamos LEFT
    {
        
        //createjs.Sound.play(paso);

        tankabaIA.jugador.body.moveLeft(350);
        tankabaIA.jugador.animations.play('movimientoIzquierda');
        tankabaIA.ultimo_sentido = 'izquierda';
    }
     else if (cursores.right.isDown && tankabaIA.canImove)
    {
        
        //createjs.Sound.play(paso);
        
        tankabaIA.jugador.body.moveRight(350);
        tankabaIA.jugador.animations.play('movimientoDerecha');
        tankabaIA.ultimo_sentido = 'derecha';

    } else {
        
        tankabaIA.jugador.animations.stop();

        if(tankabaIA.ultimo_sentido === "izquierda"){

            tankabaIA.jugador.frame = 30;

        }else{

            tankabaIA.jugador.frame = 0;
        }
    }   

    

    if (cursores.up.isDown && checkIfCanJump(tankabaIA) && tankabaIA.canImove) { // Si estamos presionando el botón UP y estamos colisionando con alguna plataforma o tal vez el contador de saltos es igual a 1 y además no hay colisión con las escaleras 
        

        tankabaIA.jugador.body.moveUp(300);

     
        //tankabaIA.jugador.animations.play('jump');
        createjs.Sound.play(salto);
    }


    tankabaIA.jugador.position.y += (tankabaIA.contadorEscaleras * 2);
    if (tankabaIA.contadorEscaleras != 0) {
        //tankabaIA.jugador.animations.play('climb');
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
        //juegoPruebas.autoStart();
        if (tankabaIA.muriendo == false) {
            tankabaIA.muriendo = true;
            createjs.Sound.play(perder);
        }
        setTimeout(function () {
            location.reload();
        }, 3000);

    }