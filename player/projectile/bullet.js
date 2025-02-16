import { lastPressed } from "../../utils/controls.js";

export default class Bullet {
    constructor(x, y, angle) {
        this.x = x;
        this.y = y;
        this.shotAngle = angle;
        this.lastPressed = lastPressed;
        this.radius = 5;
    }
    update(){
        this.x+=5*Math.cos(this.shotAngle* Math.PI / 180);
        this.y+=5*Math.sin(this.shotAngle* Math.PI / 180);
    
    }
    draw(ctx){
        ctx.fillStyle = 'red';
        // ctx.fillRect(this.x-5, this.y-5, 10, 10);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}