const girlSprite = new Image();
girlSprite.src = "assets/img/girl_walk.png";


class Girl {
    constructor() {
        this.originalWidth = 1509; // Original sprite width
        this.originalHeight = 396; // Original sprite height
        this.height = this.originalHeight;
        this.width = this.originalWidth;
        this.x = canvas.width; // Start x co-ord
        this.y = canvas.height // Start y co-ord
           }

    draw() {
        ctx.drawImage(
            //sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
            girlSprite,
            this.frameX * this.originalWidth, // Start x pos. on sprite sheet
            0, // Start y pos. on sprite sheet
            this.originalWidth, // Start width of single sprite
            this.originalHeight, // Start height
            this.x, // Destination x co-ord
            this.y, // Destination y co-ord
            this.width, // Destination width (width to be drawn)
            this.height // Destination height
        );
    }

    update() {
        this.x -= gameSpeed;
        if (endGame) { // Check for pause
            this.frameX = this.frameX;
        } else if (gameFrame % staggerFrames == 0) {
            // (number of sprites per animation) - 1
            if (this.frameX < 6) this.frameX++; // Update sprite
            else this.frameX = 0;
        }

        this.draw();
    }
}
const girl = new Girl();

