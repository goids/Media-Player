class AutoPause{
    constructor(){
        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }

    run(player){
        this.player = player;
        const observer = new IntersectionObserver(this.handleIntersection, { // aqui se pasa mediante el bind(this), por que el this, hace referencia  
            threshold : this.threshold                                       // al objeto que llama la funcion, la cual es IntersectionObserver
        });

        observer.observe(player.media);

        // visibilitychange
        document.addEventListener('visibilitychange', this.handleVisibilityChange);
    }

    handleIntersection(entries){
        const entry = entries[0];
        
        const isVisible = entry.intersectionRatio >= this.threshold;

        if(isVisible){
            this.player.play();
        }else{
            this.player.pause();
        }          
    }

    handleVisibilityChange(){
        //this dentro de esta funcion sin el bind, no es la clase, es: #document
        let isVisible = document.visibilityState === 'visible';
        this.toggleVideo(isVisible);
    }

    /**
     * TIP
     * Hice la prueba con las arrow functions para evitar pasar el this por el metodo bind
     * this, dentro de la funcion arrow, termino siendo mi clase AutoPause
     * 
     * esta funcion es equivalente a la que tengo arriba que le paso el this por bind,
     * 
     * handleVisibilityChange = () =>{
            let isVisible = document.visibilityState === 'visible';
            console.log(this); //clase AutoPause
            this.toggleVideo(isVisible);
        }
     */

    toggleVideo(bool){
        (bool) ? this.player.play() : this.player.pause(); 
    }
}

export default AutoPause;