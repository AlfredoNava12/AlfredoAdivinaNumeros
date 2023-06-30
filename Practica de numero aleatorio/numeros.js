function adivinarNumAleatorio(){
    var numeroAleatorio = Math.floor((Math.random()*(101-1))+1);
    document.getElementById('resultado').innerHTML = 'Número aleatorio = ' + numeroAleatorio;
    var contador = 1;
    var respuesta = prompt('Introduzca un número del 1 al 100');
    while(Number(respuesta)!==numeroAleatorio && contador<30){
        if(respuesta<numeroAleatorio){
            respuesta = prompt('El número es mayor al que usted a introducido. Inténtelo de Nuevo');
        }else{
            respuesta = prompt('El número es menor al que usted a introducido. Inténtelo de Nuevo');
        }
        contador++;
        document.getElementById('contador').innerHTML = 'Intentos = ' + contador;
    }
    if(contador==30){
        alert('Has superado el número máximo de intentos. Perdiste el juego..!');
    }else{
        alert('Felicidades as acertado');
    }
    
}