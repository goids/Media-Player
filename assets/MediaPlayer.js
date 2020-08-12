//Crearemos una clase en JS, como sabemos son prototipos
function MediaPlayer(config){
    this.media = config.el;
    this.plugins = config.plugins || [];
    
    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function(){
    this.plugins.forEach(plugin => {
        plugin.run(this);
    });
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