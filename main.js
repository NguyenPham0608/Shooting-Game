const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// Imports:
import ScreenShake from './utils/screenShake.js';
import Player from './player/player.js';
import Enemy from './player/enemy.js';
import { getRandomArbitrary } from './utils/misc.js';


export default class Game{
    constructor(){
        this.bullets=[]
        this.enemies=[]
        this.effects=[]
        this.canvas=canvas
        this.ctx=ctx
        this.player = new Player(100,100,100,100,this);
        this.player.draw(ctx);
        this.shakeX=0
        this.shakeY=0
        this.effects.push(new ScreenShake(2,-0.95,5,this))
        this.spawnInterval=3
    }
}
const game=new Game();

function animate(t=0) {
    
    // spawnEnemy(getRandomArbitrary(0,canvas.width),getRandomArbitrary(0,canvas.height),50,50,game);
    
    if(t%game.spawnInterval===0){
        randomizeEnemy(20,20)
    }

    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    game.player.update();
    game.player.draw(ctx);
    game.bullets.forEach(bullet => {
        bullet.update();
        bullet.draw(ctx);
    })
    game.enemies.forEach(enemy => {
        enemy.update();
        enemy.draw(ctx);
    })
    game.effects.forEach(effect => {
        effect.update();
        game.shakeX=effect.shakeX;
        game.shakeY=effect.shakeY;
        console.log(effect.shakeX,effect.shakeY);

    })

}

function spawnEnemy(x,y,w,h){
    game.enemies.push(new Enemy(x,y,w,h,game));
}

function randomizeEnemy(w, h) {
    // Randomly choose the spawn direction (top, bottom, left, right)
    const spawnDirection = Math.floor(Math.random() * 4); // 0 = top, 1 = bottom, 2 = left, 3 = right
    
    let x, y;
    
    // Use the parameters w (width) and h (height)
    const width = w;
    const height = h;
    
    switch (spawnDirection) {
        case 0: // Spawn off the top
            x = getRandomArbitrary(0, game.canvas.width - width);
            y = -height; // Just above the screen
            break;
        case 1: // Spawn off the bottom
            x = getRandomArbitrary(0, game.canvas.width - width);
            y = game.canvas.height; // Just below the screen
            break;
        case 2: // Spawn off the left
            x = -width; // Just left of the screen
            y = getRandomArbitrary(0, game.canvas.height - height);
            break;
        case 3: // Spawn off the right
            x = game.canvas.width; // Just right of the screen
            y = getRandomArbitrary(0, game.canvas.height - height);
            break;
    }

    // Create a new enemy and push it to the enemies array
    spawnEnemy(x, y, width, height);
}

animate();
