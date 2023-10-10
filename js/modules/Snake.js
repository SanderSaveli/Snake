export class Snake{
    constructor(stratSize, startPosition, direction, fielsSize){
        this.fieldSize = fielsSize;
        this._dir = direction;
        this.#createSnake(stratSize, startPosition);
    }

    #createSnake(startSize, startPositon){
        this.body = [];
        for(let i = 0; i <startSize; i++){
            let el = { x: startPositon[0], y:startPositon[1]-i };
            this.body.push(el);
        }
        this.moveSnake();
    }
    moveSnake(){
        let curr = this.body.pop();
        let pos = this.#fitWithinBoundaries(
            [this.body[0].x + this._dir[0], this.body[0].y + this._dir[1]]);
        curr.x = pos[0];
        curr.y = pos[1];
        this.body.unshift(curr);
        this.lastEl = [curr.x, curr.y];
    }
    changeDirection(dir){
        if(this._dir[0] + dir[0] !=0 ||this._dir[1] + dir[1] !=0){
            this._dir = dir;
        }
    }
    checkCollisionWithHead(pos){
        if(this.body[0].x == pos[0] && this.body[0].y == pos[1]){
            return true;
        }
        return false;
    }
    eatBerry(){
        this.body.push({ x: this.lastEl[0], y:this.lastEl[1] });
    }

    #fitWithinBoundaries(position){
        if(position[0]  <0){
            return [this.fieldSize[0] -1, position[1]];
        }
        if(position[0]  >=  this.fieldSize[0]){
            return [0, position[1]];
        }
        if(position[1]  <0){
            return [position[0], this.fieldSize[1] -1];
        }
        if(position[1]  >= this.fieldSize[1]){
            return [position[0],0];
        }
        return position;
    }
}

export class bodyEl{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    getGridCoordinate(){
        return [this.x*config.cellSize, this.y*config.cellSize ];
    }
}