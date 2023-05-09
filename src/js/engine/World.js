
class World {
  // El constructor toma por parámetro el ancho y el alto del mundo
  constructor(width, height) {
    // Creamos el contenedor de pixi
    this.container = new PIXI.Container();
    // Creamos el ticker de pixi
    this.ticker = new PIXI.Ticker();
    // Ajustamos el tamaño del contenedor al ancho y alto del mundo
    this.container.width = width;
    this.container.height = height;
  }

  // Un método para añadir objetos al contenedor
  add(object) {
    this.container.addChild(object);
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


