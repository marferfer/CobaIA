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


    if (tankabaIA.jugador.position.y > 1500) { // Muerte al caer
        reinicia();
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


    tankabaIA.colisionEscalera = false; // Reiniciamos variables
    tankabaIA.contadorEscaleras = 0;
    tankabaIA.jugador.body.velocity.x = 0; //  Reseteamos la velocidad del tankabaIA.jugador en x, esto nos permitirá evitar que se acelere
  
    juego.physics.arcade.collide(rocas, plataformas.grupo);
    juego.physics.arcade.collide(plataformas.grupo, rocas);

    
    if (!tankabaIA.colisionEscalera) { // Si no hay colisión con las escaleras, entonces reestablecemos la gravedad
        tankabaIA.jugador.body.gravity.y = 500;
    } else {// Si hay colisión con las escaleras, entonces la gravedad la llevamos a cero, por lo tanto, el tankabaIA.jugador no caerá, dando la sensación de estar suspendido en uno de sus escalones
        tankabaIA.jugador.body.velocity.y = 0;
    }
    if (tecla_laser.isUp) {
        tankabaIA.tiempo_disparo = 0;
    }
    if (tecla_laser.isDown && tankabaIA.tiempo_disparo < tankabaIA.tolerancia_disparo && tankabaIA.cantidad_disparos > 0) {
        tankabaIA.tiempo_disparo++;
        var ajuste = 25;
        if (tankabaIA.ultimo_sentido == 'derecha') {
            tankabaIA.jugador.animations.play('disparo_derecha');
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
            tankabaIA.jugador.animations.play('disparo_izquierda');
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
    } else if (cursores.left.isDown)// Si presionamos LEFT
    {
        /*tankabaIA.retrasa_paso++;
         if (tankabaIA.retrasa_paso % 10 == 0) {
         paso.volume = 0.0
         createjs.Sound.play(paso);
         }*/
        //  Lo movemos a la izquierda
        tankabaIA.jugador.body.moveLeft(350);

        tankabaIA.jugador.animations.play('left');
        tankabaIA.ultimo_sentido = 'izquierda';
    }
     else if (cursores.right.isDown)// Si presionamos RIGHT
    {
        /*tankabaIA.retrasa_paso++;
         if (tankabaIA.retrasa_paso % 10 == 0) {
         paso.volume = 0.0;
         createjs.Sound.play(paso);
         }*/
        //  Move to the right
        tankabaIA.jugador.body.moveRight(350);

        tankabaIA.jugador.animations.play('right');
        tankabaIA.ultimo_sentido = 'derecha';
    } else if (tankabaIA.contadorEscaleras != 0) {// Si el contador de escaleras es <> de cero, quiere decir que estamos escalando
        tankabaIA.jugador.animations.play('climb');// Animamos la escalada
    } else {
        //  No estamos precionando ninguna tecla
        tankabaIA.jugador.animations.stop();
        tankabaIA.jugador.frame = 1;
    }
    if (cursores.up.isDown && (tankabaIA.jugador.body.touching.down || tankabaIA.contadorSaltos == 1) && !tankabaIA.colisionEscalera) { // Si estamos presionando el botón UP y estamos colisionando con alguna plataforma o tal vez el contador de saltos es igual a 1 y además no hay colisión con las escaleras 
        tankabaIA.jugador.body.velocity.y = -250;
        tankabaIA.jugador.animations.play('jump');
        createjs.Sound.play(salto);
        if (tankabaIA.contadorSaltos == 1) {
            tankabaIA.contadorSaltos = 2;
        }
    }

    /*if (tankabaIA.jugador.body.touching.down) { // Si el tankabaIA.jugador toca una plataforma el contador de saltos se setea en cero otra vez
        tankabaIA.contadorSaltos = 0;
    }*/

    if (tankabaIA.contadorEscaleras < -1) {
        tankabaIA.contadorEscaleras = -1;
    }
    tankabaIA.jugador.position.y += (tankabaIA.contadorEscaleras * 2);
    if (tankabaIA.contadorEscaleras != 0) {
        tankabaIA.jugador.animations.play('climb');
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
}