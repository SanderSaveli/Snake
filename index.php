<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png">
    <link rel="manifest" href="icons/site.webmanifest">
    <link rel="mask-icon" href="icons/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#cf1111">
    <meta name="theme-color" content="#cf1111">
    <link rel="stylesheet" href="/css/menuStyle.css">

    <title>Snake</title>
    </head>
<body>
    <div class="wrapepr">
        <div class="body">
            <div class="body__title">
                Snake
            </div>
            <div class="paranetrName">
                Размер поля:
            </div>
            <div class="range">
                <div class="range__field">
                    <input type="range" name="fieldSize" id="fieldSize" min="6" max="20" oninput="setSize(this.value)"> 
                </div>
                <div class="range__pointer" id="fieldSizePointer"></div>
                <div class="range__value">
                    <div class="range__value-static range__value" id="fieldSizeValue">
                        <span id="fieldSizeText"></span>
                    </div>
                </div>
            </div>
            <div class="paranetrName">
                Скорость:
            </div>
            <div class="range">
                <div class="range__field">
                    <input type="range" name="gameSpeed" id="gameSpeed" min="100" max="600" step="50" oninput="setSpeed(this.value)"> 
                </div>
                <div class="range__pointer" id="gameSpeedPointer"></div>
                <div class="range__value">
                    <div class="range__value-static range__value" id="gameSpeedValue">
                        <span id="gameSpeedText"></span>
                    </div>
                </div>
            </div>
            <?php
             if(!empty($_SESSION["user"]["name"])) : ?>
                <a href="/pages/Login.php" class="body__username">Hello, <?php echo($_SESSION["user"]["name"]) ?></a>
                <a href="/pages/Score.php" class="body__button" id="Scorebutton">Score</a>
            <?php else : ?>
                <a href="/pages/login.php" class="body__button" id="LoginButton">Login</a>
            <?php endif ?>
            <a href="/pages/game.php" class="body__button">Start</a>
            <script src="js/rangeView.js"></script>
            <script src="js/configSetter.js"></script>
        </div>
    </div>
</body>
</html>