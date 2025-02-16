export default class Enemy{
    constructor(x, y, width=50, height=50, game){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.game=game
        this.target=game.player
        this.ctx=this.game.ctx
        this.enemies=this.game.enemies
        this.bullets=this.game.bullets
        this.deltaPlayerX =(this.target.x + this.target.width/2 )- this.x;
        this.deltaPlayerY = (this.target.y + this.target.height/2 )- this.y;
        this.angle=0
        this.sx=0
        this.sy=0
    }
    update(){
        this.enemies=this.game.enemies
        this.bullets=this.game.bullets
        this.checkHit(this.bullets);
        this.deltaPlayerX =(this.target.x + this.target.width/2 )- this.x;
        this.deltaPlayerY = (this.target.y + this.target.height/2 )- this.y;
        this.angle = Math.atan2(this.deltaPlayerY, this.deltaPlayerX);
        this.sx+=0.4*Math.cos(this.angle)
        this.sy+=0.4*Math.sin(this.angle)
        this.x+=this.sx
        this.y+=this.sy
        this.sx=0.9*this.sx
        this.sy=0.9*this.sy
        this.checkOffscreen();
        if(Math.hypot(this.deltaPlayerX, this.deltaPlayerY)<100){
            this.deleteThis();
        }
        if(Math.hypot(this.deltaPlayerX, this.deltaPlayerY)<100){
            this.deleteThis();
        }
    }
    draw(ctx){
        ctx.save();
        ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
        ctx.fillStyle = 'red';
        ctx.rotate(this.angle);
        ctx.fillRect(0, 0, this.width, this.height);
        ctx.restore();
    }
    checkHit(bullets){
        bullets.forEach(bullet => {
            if(bullet.x<this.game.canvas.width && bullet.x>0 && bullet.y<this.game.canvas.height && bullet.y>0){
                const deltaX=bullet.x-this.x;
                const deltaY=bullet.y-this.y;
                if(Math.hypot(deltaX,deltaY)<this.width/2+bullet.radius){
                    this.deleteThis();
                }
                
            }

        })
    }
    checkOffscreen() {
        if (
            this.x + this.width < 0 || // left side
            this.x > this.game.canvas.width || // right side
            this.y + this.height < 0 || // top side
            this.y > this.game.canvas.height // bottom side
        ) {
            // Remove this enemy from the enemies array
            this.deleteThis();
        }
    }
    deleteThis(){
        const index = this.enemies.indexOf(this);
        if (index > -1) {
            this.enemies.splice(index, 1);
        }
    }
}