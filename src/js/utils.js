/* UTILIDADES GENERALES */


function isLandascape() {
  //TRUE si ancho mayor que el alto
  return window.innerWidth > window.innerHeight;

}

/*
* param{id} etiqueta html id
*
* return objeto con las cordenadas donde se toco
* posicion.x/y
*/
function setPosition(id) {
  const elemento = document.getElementById(id);
  // Crear una variable para guardar la posición
  const posicion = {x: 0, y: 0};


  elemento.addEventListener("touchstart", function(e) {

    let click = e.touches[0];
  
    posicion.x = clikc.pageX;
    posicion.y = click.pageY;
  });

  return posicion;
}


/* FUNCIONES POR HACER */

/*
* Cargador de asset
* Mas funciones para interactivdad con el raton etc
* Filtros
* Exprites
* */
