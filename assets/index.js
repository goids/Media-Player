import MediaPlayer from './MediaPlayer.js';
import AuntoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const player = new MediaPlayer(
    {   
        el: video, 
        plugins: [
            new AuntoPlay()
        ]
    });
const button = document.querySelector('button');
const mute = document.querySelector('#mute');


button.onclick = () => player.activeVideo(); 
mute.onclick = () => player.activeSound();

/**
 * IIFE
 * Inmmediately-invoked function expressions, expresion funcional que se ejecutra inmediatamente
 * (function(){
 *    .... codigo
 * })();
 * CLOSURES o CLAUSURAS
 * Es una funcion interna que tiene acceso al alcance  de su funcion externa
 * gracias a los Closures podemos crear variables internas
 */


/*(function(){
    let color = 'red';

    function printColor(){
        console.log(color);
    }

    printColor();
 })();

 function makeColorPrinter(color){
    let colorMEssage = `The color is ${color}`;
    return function(){
        console.log(colorMEssage);
    }
 }

 let redColorPrinter = makeColorPrinter('red'); //Esta funcion se aceurda del valor de color, aunque la estemos llamndo desde afuera
 console.log(redColorPrinter()); //por eso obtenemos el resultado aquí

 function makeCounter(n){
    let count = n; //La variable count, logramos que fuera privada

    return {
        increase: function(){
            count += 1;
        },
        decrease: function(){
            count -= 1;
        },
        getCount: function(){
            return count;
        }
    }
 }

 let counter = makeCounter(5);
 console.log('The count is: ', counter.getCount());
 counter.increase();
 counter.increase();
 console.log('The count is: ', counter.getCount());
 counter.increase();
 console.log('The count is: ', counter.getCount());
 counter.decrease();
 counter.decrease();
 counter.decrease();
 console.log('The count is: ', counter.getCount());*/

 // Cuando se retorna una funcion o algún objeto o variable, debemos llamarla con los parentesis
 // En este caso, console.log(redColorPrinter());
 // Si la funcion no me retornara nada la llamamos de la siguiente manera
 // console.log(redColorPrinter);

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

// () ejecutamos una funcion, sin los parentesis solo la estamos llamando o pasando la funcion