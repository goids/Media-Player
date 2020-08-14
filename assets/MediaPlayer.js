//Crearemos una clase en JS, como sabemos son prototipos
function MediaPlayer(config){
    this.media = config.el;
    this.plugins = config.plugins || [];
    
    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function(){
    /**
     * Vamos a trabajar con Get y Set para saber que funcionalidades le queeremos pasar a nuestros plugins
     * En este caso solo nos interesa que el plugin autoplay, solo tenga la funcionadalida de Mute/Play
     */
    
    const player = {
        play: () => this.play(),
        pause: () => this.pause(),
        media: this.media,
        self: console.log(this), //this es MediaPlayer fuera del get
        get muted(){
            console.log(this); // this es el objeto player dentro de la funcion get, o sea es el objeto más cernado
            return this.media.muted;
        },
        set muted(bool){
            this.media.muted = bool;
            /** 
            * Esto se puede escribir más simple de la manera que lo teneemos arriba pero es algo similar 
            
            if (bool) {
                this.media.muted = true;
            } else {
                this.media.muted = false;
            }*/
        }
    }

    this.plugins.forEach(plugin => {
        plugin.run(player);
    });

    /*this.plugins.forEach(plugin => {
        plugin.run(this); // CON THIS ESTAMOS PASANDO TODAS LAS FUNCIONALIDADES AL PLUGIN
    });*/
}

MediaPlayer.prototype.play = function(){
    this.media.play();
}

MediaPlayer.prototype.pause = function(){
    this.media.pause();
}

MediaPlayer.prototype.activeVideo = function(){
    if(this.media.paused){
        this.play();
    }else if(this.media.played){
        this.pause();
    }
    //Ternario 
    //(this.media.paused) ? this.play() : this.pause();
}

MediaPlayer.prototype.mute = function(){
    this.media.muted = true;
}

MediaPlayer.prototype.unmute = function(){
    this.media.muted = false;
}

MediaPlayer.prototype.activeSound = function(){
    if(this.media.muted){
        this.unmute();
    }else{
        this.mute();
    }
}

export default MediaPlayer;