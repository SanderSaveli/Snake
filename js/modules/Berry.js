export default class Berry{
    constructor(fieldSize){
        this.fieldSize = fieldSize
        this.randomiseBerry([]);
    }
    randomiseBerry(notValidPos){
        this.pos = [this.#getRandomInt(this.fieldSize[0]), this.#getRandomInt(this.fieldSize[1])]
        notValidPos.forEach(element => {
            if(element.x === this.pos[0] && element.y === this.pos[1]){
                this.randomiseBerry(notValidPos);
            }
        });
    }
    #getRandomInt(max){
        return Math.floor(Math.random()* max);
    }
}