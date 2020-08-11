import MediaPlayer from './MediaPlayer.js';

const video = document.querySelector('video');
const player = new MediaPlayer({el: video});
const button = document.querySelector('button');


button.onclick = () => player.activeVideo(); 

/**
 * IIFE
 * Inmmediately-invoked function expressions
 * (function(){
 *    .... codigo
 * })();
 */

//CLASE ESCRITA CON CLAS CLASES EN JS DE ES6
      
/*class ReproductorDeVideo {
    constructor(config){
        this.video = config.el;
    }

    play(){
        this.video.play();
    }

    pause(){
        this.video.pause();
    }

    togglePlay(){
        if(this.video.paused){
        this.play();
        }else if(this.video.played){
        this.pause();
        }
    }
}

const videoPlay = new ReproductorDeVideo({el:video});
button.onclick = () => videoPlay.togglePlay();*/