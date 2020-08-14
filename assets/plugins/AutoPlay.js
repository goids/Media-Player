function AutoPlay(){}

AutoPlay.prototype.run = function(player){
    //player.mute(); // ya no podemos aplicar el player.muted() directamente
    if (!player.muted) { //Los set lo llamamos asignandole un valor
        player.muted = true; //como es un setter de nuestra propiedades virtuales, vamos a pasarle true de esta manera, ya que a los set se les pasa parametros de esta manera
    }
    player.play();
    player.self;
}

export default AutoPlay;