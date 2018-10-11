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
        obj_jugador3.jugador.x-=5;
        obj_jugador3.jugador.animations.play('left');
        obj_jugador3.ultimo_sentido = 'izquierda';
    }
    else if (pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_RIGHT) || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1)
    {
        obj_jugador3.jugador.x+=5;
        obj_jugador3.jugador.animations.play('right');
        obj_jugador3.ultimo_sentido = 'derecha';
    }

    if (pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_UP) || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) < -0.1)
    {
        obj_jugador3.jugador.y-=5;
        obj_jugador3.jugador.animations.play('jump');
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
    //juego.physics.arcade.collide(obj_jugador.jugador, obj_caja.cajas);// Hacemos colisionar al obj_jugador.jugador con las obj_caja.cajas                    
    juego.physics.arcade.collide(manos, obj_plataforma.plataformas);// Lo mismo hacemos con las manos
    juego.physics.arcade.collide(manos, rocas);
    juego.physics.arcade.collide(posimas, obj_plataforma.plataformas);// Lo mismo hacemos con las posimas                    
    juego.physics.arcade.collide(rocas, obj_plataforma.plataformas);// Lo mismo hacemos con las rocas
    juego.physics.arcade.collide(rocas, obj_jugador.jugador);
    juego.physics.arcade.collide(cajas, obj_plataforma.plataformas);
    juego.physics.arcade.collide(cajas, obj_jugador.jugador);

    //Juggador 2 colisiones
    obj_jugador2.colisionEscalera = false; // Reiniciamos variables
    obj_jugador2.contadorEscaleras = 0;
    obj_jugador2.jugador.body.velocity.x = 0; //  Reseteamos la velocidad del obj_jugador.jugador en x, esto nos permitirá evitar que se acelere
    juego.physics.arcade.collide(obj_jugador2.jugador, obj_plataforma.plataformas);// Hacemos colisionar al obj_jugador.jugador con las obj_plataforma.plataformas
    //juego.physics.arcade.collide(obj_jugador2.jugador, obj_caja.cajas);// Hacemos colisionar al obj_jugador.jugador con las obj_caja.cajas                    
    juego.physics.arcade.collide(manos, obj_plataforma.plataformas);// Lo mismo hacemos con las manos
    juego.physics.arcade.collide(manos, rocas);
    juego.physics.arcade.collide(posimas, obj_plataforma.plataformas);// Lo mismo hacemos con las posimas                    
    juego.physics.arcade.collide(rocas, obj_plataforma.plataformas);// Lo mismo hacemos con las rocas
    juego.physics.arcade.collide(rocas, obj_jugador2.jugador);
    juego.physics.arcade.collide(cajas, obj_plataforma.plataformas);
    juego.physics.arcade.collide(cajas, obj_jugador2.jugador);

    //Juggador 3 colisiones
    obj_jugador3.colisionEscalera = false; // Reiniciamos variables
    obj_jugador3.contadorEscaleras = 0;
    obj_jugador3.jugador.body.velocity.x = 0; //  Reseteamos la velocidad del obj_jugador.jugador en x, esto nos permitirá evitar que se acelere
    juego.physics.arcade.collide(obj_jugador3.jugador, obj_plataforma.plataformas);// Hacemos colisionar al obj_jugador.jugador con las obj_plataforma.plataformas
    //juego.physics.arcade.collide(obj_jugador3.jugador, obj_caja.cajas);// Hacemos colisionar al obj_jugador.jugador con las obj_caja.cajas                    
    juego.physics.arcade.collide(manos, obj_plataforma.plataformas);// Lo mismo hacemos con las manos
    juego.physics.arcade.collide(manos, rocas);
    juego.physics.arcade.collide(posimas, obj_plataforma.plataformas);// Lo mismo hacemos con las posimas                    
    juego.physics.arcade.collide(rocas, obj_plataforma.plataformas);// Lo mismo hacemos con las rocas
    juego.physics.arcade.collide(rocas, obj_jugador3.jugador);
    juego.physics.arcade.collide(cajas, obj_plataforma.plataformas);
    juego.physics.arcade.collide(cajas, obj_jugador3.jugador);
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

    //////////////////////////////////////////////////////////////////
    //////////////////// JUGADOR 3 CONDICIONES ///////////////////////
    //////////////////////////////////////////////////////////////////

    if (!obj_jugador3.colisionEscalera) { // Si no hay colisión con las escaleras, entonces reestablecemos la gravedad
        obj_jugador3.jugador.body.gravity.y = 500;
    } else {// Si hay colisión con las escaleras, entonces la gravedad la llevamos a cero, por lo tanto, el obj_jugador.jugador no caerá, dando la sensación de estar suspendido en uno de sus escalones
        obj_jugador3.jugador.body.velocity.y = 0;
    }
    if (tecla_laser.isUp) {
        obj_jugador3.tiempo_disparo = 0;
    }
    if (tecla_laser.isDown && obj_jugador3.tiempo_disparo < obj_jugador3.tolerancia_disparo && obj_jugador2.cantidad_disparos > 0) {
        obj_jugador3.tiempo_disparo++;
        var ajuste = 25;
        if (obj_jugador3.ultimo_sentido == 'derecha') {
            obj_jugador3.jugador.animations.play('disparo_derecha');
            if (obj_jugador3.tiempo_disparo == 1) {
                obj_jugador3.cantidad_disparos--;
                var jnLaser = {
                    distancia: 0,
                    distancia_max: 20,
                    laser: lasers.create(obj_jugador3.jugador.position.x + 2 * ajuste, obj_jugador3.jugador.position.y + ajuste, 'laser_der')
                };
                obj_jugador3.lasers_der.push(jnLaser);
                var instance = createjs.Sound.play(disparo);
                instance.volume = 0.15;
            }
        } else {
            obj_jugador3.jugador.animations.play('disparo_izquierda');
            if (obj_jugador3.tiempo_disparo == 1) {
                obj_jugador3.cantidad_disparos--;
                var jnLaser = {
                    distancia: 0,
                    distancia_max: 20,
                    laser: lasers.create(obj_jugador3.jugador.position.x - ajuste, obj_jugador3.jugador.position.y + ajuste, 'laser_izq')
                };
                obj_jugador3.lasers_izq.push(jnLaser);
                var instance = createjs.Sound.play(disparo);
                instance.volume = 0.15;
            }
        }
        actualiza_informacion();
    }

    if (obj_jugador3.jugador.body.touching.down) { // Si el obj_jugador.jugador toca una plataforma el contador de saltos se setea en cero otra vez
        obj_jugador3.contadorSaltos = 0;
    }

    if (obj_jugador3.contadorEscaleras < -1) {
        obj_jugador3.contadorEscaleras = -1;
    }
    obj_jugador3.jugador.position.y += (obj_jugador3.contadorEscaleras * 2);
    if (obj_jugador3.contadorEscaleras != 0) {
        obj_jugador3.jugador.animations.play('climb');
    }
    for (var i = 0; i < obj_jugador3.lasers_der.length; i++) {
        var laserAux = obj_jugador3.lasers_der[i].laser;
        obj_jugador3.lasers_der[i].distancia++;
        laserAux.position.x += 5;
        if (obj_jugador3.lasers_der[i].distancia == obj_jugador3.lasers_der[i].distancia_max) {
            obj_jugador3.lasers_der[i].laser.kill();
        }
    }
    for (var i = 0; i < obj_jugador3.lasers_izq.length; i++) {
        var laserAux = obj_jugador3.lasers_izq[i].laser;
        obj_jugador3.lasers_izq[i].distancia++;
        laserAux.position.x -= 5;
        if (obj_jugador3.lasers_izq[i].distancia == obj_jugador3.lasers_izq[i].distancia_max) {
            obj_jugador3.lasers_izq[i].laser.kill();
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