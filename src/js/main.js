
let renderer;
document.addEventListener("DOMContentLoaded", onStart);


// Main Function
function onStart () {
    
    // browser console init
    eruda.init();
    
    //libs status
    console.log("*Eruda " + eruda.version + " ok!");
    console.log("*PixiJS " + PIXI.VERSION + " ok!");
    
    // create game renderer
    renderer = new PIXI.Renderer({
        width: canvasWidth,
        height: canvasHeight,
        backgroundColor: 0x00ccff,
        view: document.getElementById("game-renderer"),
    });
    
}