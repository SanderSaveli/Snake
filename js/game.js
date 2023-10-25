import Berry from "./modules/Berry.js";
import config from "./modules/Сonfig.js";
import CanvasDrawer from "./modules/CanvasDrawer.js";
import Snake from "./modules/Snake.js";
import ScoreManager from "./modules/ScoreManager.js"; 
import ButtonManager from "./modules/ButtonShower.js";
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
    console.log("gg");
    config.fieldSize = [localStorage.getItem("fieldSize"), localStorage.getItem("fieldSize")];
    config.gameSpeed = localStorage.getItem("gameSpeed");
    document.getElementById('speed').textContent = config.gameSpeed+" turn/ms";
    SetFieldSize(config.fieldSize[0], config.fieldSize[1]);
    iniVars();
    update();
}
function getStartPosition(){
    return [Math.floor(config.fieldSize[0]/2), Math.floor(config.fieldSize[1]/2)];
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
    sendRequest();
    gameOn = false;
    buttonManager.setRestartMenuStatys(true);
}

function iniVars(){
    canvasDrawer = new CanvasDrawer("#a30000", "#f50505", "#55f505",config.cellSize);
    berry = new Berry(config.fieldSize);
    snake = new Snake(config.startSize, getStartPosition(), config.startDir, config.fieldSize);
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

function sendRequest(){
    var xhr = new XMLHttpRequest();
    var url = "/src/scoreProcessor.php";
    xhr.open("Post", url);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    console.log(scoreManager.score);
    var params = "score=" + scoreManager.score+"&fieldWidth=" + config.fieldSize[0] +"&fieldHeight=" + config.fieldSize[1] +"&speed="+config.gameSpeed;

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Парсим JSON-ответ
            var response = JSON.parse(xhr.responseText);
            // Выводим ответ в консоль
            console.log("Ответ от сервера: " + response.message);
        }
    };

    xhr.send(params);
}

gameStart();