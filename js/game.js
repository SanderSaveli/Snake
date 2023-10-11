import Berry from "./modules/Berry.js";
import config from "./modules/Сonfig.js";
import CanvasDrawer from "./modules/CanvasDrawer.js";
import Snake from "./modules/Snake.js";
import ScoreManager from "./modules/ScoreManager.js"; 
import ButtonManager from "./modules/ButtonManager.js";
import SetFieldSize from "./modules/Field.js";
import DirectionChanger from "./modules/DirectionChanger.js";

let gameOn = true;

var canvasDrawer;
var berry;
var snake;
var scoreManager;
var buttonManager;
var directionChanger;

function gameStart(){
    console.log(localStorage.getItem("fieldSize"));
    config.fieldSize = [localStorage.getItem("fieldSize"), localStorage.getItem("fieldSize")];
    SetFieldSize(config.fieldSize[0], config.fieldSize[1]);
    iniVars();
    update();
}
function update(){
    if(!gameOn){
        return;
    }
    snake.changeDirection(directionChanger.dir);
    snake.moveSnake();
    checkCollision();
    canvasDrawer.drawFrame(snake.body, berry);
    setTimeout(update, config.gameSpeed);
}


function gameEnd(){
    gameOn = false;
    buttonManager.setRestartMenuStatys(true);
}

function iniVars(){
    canvasDrawer = new CanvasDrawer("#a30000", "#f50505", "#55f505",config.cellSize);
    berry = new Berry(config.fieldSize);
    snake = new Snake(config.startSize, config.startPositon, config.startDir, config.fieldSize);
    scoreManager = new ScoreManager();
    buttonManager = new ButtonManager();
    directionChanger = new DirectionChanger();
}


function checkCollision(){
    for(let i =snake.body.length -1 ; i >0; i--){
        if(snake.checkCollisionWithHead([snake.body[i].x, snake.body[i].y])){
            gameEnd();
            return;
        }
    }
    if(snake.checkCollisionWithHead(berry.pos)){
        snake.addBodyElement();
        berry.randomiseBerry(snake.body);
        scoreManager.increaseScore();
    }
}

gameStart();