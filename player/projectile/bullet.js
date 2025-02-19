import { lastPressed } from "../../utils/controls.js";
export default class Bullet {
    constructor(x, y, angle, game) {
        this.x = x;
        this.y = y;
        this.shotAngle = angle;
        this.lastPressed = lastPressed;
        this.radius = 5;
        this.game=game
        this.sx=0
        this.sy=0
        this.id=this.game.bullets.indexOf(this);
        
        this.sx=5*Math.cos(this.shotAngle* Math.PI / 180);
        this.sy=5*Math.sin(this.shotAngle* Math.PI / 180);

    }
    update(){
        this.id=this.game.bullets.indexOf(this);
        this.sx+=Math.cos(this.shotAngle* Math.PI / 180);
        this.sy+=Math.sin(this.shotAngle* Math.PI / 180);
        this.x+=this.sx;
        this.y+=this.sy;
        this.sx=0.9*this.sx;
        this.sy=0.9*this.sy;
    }
    draw(ctx){
        ctx.fillStyle = 'blue';
        // ctx.fillRect(this.x-5, this.y-5, 10, 10);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
    destroy(){
        const index = this.id;
        this.game.bullets.splice(index, 1);
    }
}