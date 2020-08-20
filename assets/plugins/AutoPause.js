class AutoPause{
    constructor(){
        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this);
    }

    run(player){
        this.player = player;
        const observer = new IntersectionObserver(this.handleIntersection, { // aqui se pasa mediante el bind(this), por que el this, hace referencia  
            threshold : this.threshold                                       // a la funcion del objeto, la cual es IntersectionObserver
        });

        observer.observe(player.media)
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
}

export default AutoPause;