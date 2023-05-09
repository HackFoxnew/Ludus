
document.addEventListener("DOMContentLoaded", onStart);


function onStart () {
    
    // browser console
    eruda.init();
    
    // libs status
    console.log("*Eruda " + eruda.version + " ok!");
    console.log("*PixiJS " + PIXI.VERSION + " ok!");
    
}