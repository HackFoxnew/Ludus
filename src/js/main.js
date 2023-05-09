
document.addEventListener("DOMContentLoaded", onStart);


// Main Function
function onStart () {
    
    // browser console init
    eruda.init();
    
    //libs status
    console.log("*Eruda " + eruda.version + " ok!");
    console.log("*PixiJS " + PIXI.VERSION + " ok!");

    
}