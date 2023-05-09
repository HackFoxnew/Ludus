
class World {
    
    constructor(width, height) {
        // Creamos el contenedor y ticker de pixi
        const container = new PIXI.Container();
        const layer = new PIXI.Container();
        const ticker = new PIXI.Ticker();
        
        // Ajustamos el tamaño del contenedor al ancho y alto del mundo
        container.width = width;
        container.height = height;
        container.addChild(layer);
        
        // Añadir tick
        ticker.add(delay => {
            this.update(delta);
            renderer.render(container);
        });
        
        this.container = container;
        this.layer = layer;
        this.ticker = ticker;
    }

    // Un método para añadir objetos al contenedor
    add(object) {
        this.layer.addChild(object);
    }

    // Un método para iniciar el ticker
    start() {
        this.ticker.start();
    }

    // Un método para detener el ticker
    stop() {
        this.ticker.stop();
    }

    // Un método para actualizar el mundo en cada tick
    update(delta) {
        // Logica
    }
}


