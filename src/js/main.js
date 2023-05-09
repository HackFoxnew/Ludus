
document.addEventListener("DOMContentLoaded", onStart);

// browser console init
funtion ErudaInit(){
   eruda.init();
   CheckLib();
}

//libs status
funtion CheckLib(){

    console.log("*Eruda " + eruda.version + " ok!");
    console.log("*PixiJS " + PIXI.VERSION + " ok!");
}

//Main Funtion
function onStart () {
    
  ErudaInit();
    
    
    
    
}