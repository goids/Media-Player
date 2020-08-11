//Crearemos una clase en JS, como sabemos son prototipos
function MediaPlayer(config){
    this.media = config.el
}

MediaPlayer.prototype.play = function(){
    this.media.play();
}

MediaPlayer.prototype.pause = function(){
    this.media.pause();
}

MediaPlayer.prototype.activeVideo = function(){
    if(this.media.paused){
        this.media.play();
    }else if(this.media.played){
        this.media.pause();
    }
    //Ternario 
    //(this.media.paused) ? this.media.play() : this.media.pause();
}

export default MediaPlayer;