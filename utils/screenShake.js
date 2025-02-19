import {getRandomArbitrary} from './misc.js'
export default class ScreenShake{
    constructor(intensity, decay, duration, game){
        this.game=game;
        this.shakeX=0
        this.shakeY=0
        this.decay=decay
        this.intensity=intensity
        this.effects=this.game.effects
        for(let i=0;i<duration;i++){
            this.shakeX+=getRandomArbitrary(-intensity,intensity)
            this.shakeY+=getRandomArbitrary(-intensity,intensity)
        }
    }
    update(){
        this.shakeX=this.shakeX*this.decay
        this.shakeY=this.shakeY*this.decay
        if(this.shakeX<0.03&&this.shakeY<0.03){
            this.destroy()
        }
    }
    destroy(){
        this.effects.splice(this.effects.indexOf(this),1)
    }
}