export default class DirectionChanger{
    constructor(){
        this.inputHandler = this.changeDirection.bind(this);
        document.addEventListener("keyup", this.inputHandler);
        this.dir = [0, -1];
    }
    changeDirection(e){
        let keys = {
            "ArrowDown": [0,1], 
            "ArrowUp": [0 ,-1],
            "ArrowLeft": [-1 ,0],
            "ArrowRight": [1 ,0],
        }
        let code = e.code;
        this.dir = keys[code];
    }
}