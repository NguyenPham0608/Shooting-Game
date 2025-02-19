import {left, right, up, down, space} from './../utils/controls.js';
import Game from './../main.js';
import Bullet from './projectile/bullet.js';
import ScreenShake from '../utils/screenShake.js'; 
export default class Player{
    constructor(x, y, width, height, game){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.game=game
        this.ctx=this.game.ctx
        this.angle=0
        this.shootInterval=2
        this.time=0
    }
    update(){
        this.time++;
        if(left){
            this.angle -= 1;
        }
        if(right){
            this.angle += 1;
        }
        if(up){
            this.y -= 5;
        }
        if(down){
            this.y += 5;
        }
        if(space){
            if(this.time%this.shootInterval===0){
                this.game.effects.push(new ScreenShake(2,-0.95,5,this.game));
                this.game.bullets.push(new Bullet(this.x+this.width/2, this.y+this.height/2, this.angle, this.game));

            }
        }
    }
    draw(ctx){
        ctx.save();
        ctx.translate(this.x + this.game.shakeX + this.width / 2, this.y + this.game.shakeY + this.height / 2);
        ctx.rotate(this.angle* Math.PI / 180);
        ctx.fillStyle = 'lime';
        ctx.fillRect(- this.width / 2, - this.height / 2, this.width, this.height);
        ctx.restore();
    }
}