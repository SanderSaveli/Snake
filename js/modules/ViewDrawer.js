export default class ViewDrawer{
    constructor(bodyColor, headColor, berryColor, cellSize){
        this.bodyColor = bodyColor;
        this.headColor = headColor;
        this.berryColor = berryColor;
        this.cellSize = cellSize;
        this.#findCanvas();
    }
    drawFrame(snake, berry){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.#drawBerry(berry);
        this.#drawSnake(snake);
    }
    #drawSnake(snake){
        for(let i =snake.length-1 ; i >= 0; i--){
            let element = snake[i];
            if(i == 0){
                this.ctx.fillStyle = this.headColor;
            }
            else{
                this.ctx.fillStyle = this.bodyColor;
            }
            this.ctx.fillRect(element.x* this.cellSize, element.y* this.cellSize, this.cellSize, this.cellSize);
        }
    }
    
    #drawBerry(berry){
        this.ctx.fillStyle = this.berryColor;
        this.ctx.fillRect(berry.pos[0] * this.cellSize ,berry.pos[1] * this.cellSize, this.cellSize, this.cellSize)
    } 
    
    #findCanvas(){
        this.canvas = document.getElementById('mainCanvas');
        this.ctx = this.canvas.getContext('2d');
    }
}
