const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
let canvasWidth = 400;
let canvasHeight  = 400;
const girlSprite = new Image();
girlSprite.src = "assets/img/girl_walk.png";

const spriteWidth = 259.17;//251.5
const spriteHeight = 396;

let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrames = 15

function animate(){
    ctx.clearRect(0,0,canvasWidth, canvasHeight);
    let position = Math.floor(gameFrame/staggerFrames) % 7;
    frameX = spriteWidth * position;
    ctx.drawImage(girlSprite, frameX, frameY * spriteHeight, spriteWidth, spriteHeight, 100, 0, spriteWidth/4, spriteHeight/4);
    gameFrame++;
    requestAnimationFrame(animate)
}

animate();

