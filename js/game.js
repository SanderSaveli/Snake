import Berry from "./modules/Berry.js";
import config from "./modules/config.js";
import ViewDrawer from "./modules/ViewDrawer.js";
import { bodyEl, Snake } from "./modules/Snake.js";

let score = 0;
let gameOn = true;

let menu = document.getElementById('restartMenu');
let scoreView = document.getElementById('score');

var viewDrawer = new ViewDrawer("#a30000", "#f50505", "#55f505",config.cellSize);
var berry = new Berry(config.fieldSize);
var snake = new Snake(config.startSize, config.startPositon, config.startDir, config.fieldSize);


function startGame(){
    score =0;
    scoreView.textContent = score;
    menu.classList.add("hide");
}


function changeDirection(e){
    if(e.code == "ArrowDown"){
        snake.changeDirection([0 ,1]);
    }
    if(e.code == "ArrowUp"){
        snake.changeDirection([0 ,-1]);
    }
    if(e.code == "ArrowLeft"){
        snake.changeDirection([-1 ,0]);
    }
    if(e.code == "ArrowRight"){
        snake.changeDirection([1 ,0]);
    }
}

function update(){
    if(!gameOn){
        return;
    }
    snake.moveSnake();
    checkCollision();
    viewDrawer.drawFrame(snake.body, berry);
    setTimeout(update, config.gameSpeed);
}


function gameEnd(){
    gameOn = false;
    menu.classList.remove("hide");
    console.log("end");
}

function checkCollision(){
    for(let i =snake.body.length -1 ; i >0; i--){
        if(snake.checkCollisionWithHead([snake.body[i].x, snake.body[i].y])){
            gameEnd();
            return;
        }
    }
    if(snake.checkCollisionWithHead(berry.pos)){
        snake.eatBerry();
        berry.randomiseBerry(snake.body);
        score++;
        scoreView.textContent = score;
    }
}

document.addEventListener("keyup", changeDirection);
startGame();
update();