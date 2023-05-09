
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



class MiSprite extends PIXI.Sprite {
  constructor(texture) {
    super(texture);
    // Añadimos los atributos velocity y acceleration
    this.velocity = {x: 0, y: 0};
    this.acceleration = {x: 0, y: 0};
  }

  // Definimos el método setVelocity que recibe x y y como parámetro
  setVelocity(x, y) {
    // Asignamos los valores de los parámetros a los atributos velocity
    this.velocity.x = x;
    this.velocity.y = y;
  }

  // Definimos el método setAcceleration que recibe x y y como parámetro
  setAcceleration(x, y) {
    // Asignamos los valores de los parámetros a los atributos acceleration
    this.acceleration.x = x;
    this.acceleration.y = y;
  }

  // Definimos el método setSize que recibe width y height como parámetro
  setSize(width, height) {
    // Asignamos los valores de los parámetros a los atributos width y height
    this.width = width;
    this.height = height;
  }

  // Definimos el método setRotation que recibe angle como parámetro
  setRotation(angle) {
    // Asignamos el valor del parámetro al atributo rotation
    this.rotation = angle;
  }

  // Definimos el método setPosition que recibe x y y como parámetro
  setPosition(x, y) {
    // Asignamos los valores de los parámetros a los atributos x e y
    this.x = x;
    this.y = y;
  }

  // Definimos el método setAnchor que recibe x y y como parámetro
  setAnchor(x, y) {
    // Asignamos los valores de los parámetros al atributo anchor
    this.anchor.set(x, y);
  }

  // Definimos el método setTint que recibe color como parámetro
  setTint(color) {
    // Asignamos el valor del parámetro al atributo tint
    this.tint = color;
  }

  // Definimos el método setBlendMode que recibe mode como parámetro
  setBlendMode(mode) {
    // Asignamos el valor del parámetro al atributo blendMode
    this.blendMode = mode;
  }

  // Modificamos el método update para que el sprite se mueva según su velocidad y aceleración
  update(delta) {
    // Actualizamos la posición del sprite sumando la velocidad multiplicada por el delta
    this.x += this.velocity.x * delta;
    this.y += this.velocity.y * delta;
    // Actualizamos la velocidad del sprite sumando la aceleración multiplicada por el delta
    this.velocity.x += this.acceleration.x * delta;
    this.velocity.y += this.acceleration.y * delta;
  }
}




