<?php 
    require_once "/Program/OSPanel/domains/Snake/src/helpers.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png">
    <link rel="manifest" href="/icons/site.webmanifest">
    <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#cf1111">
    <meta name="theme-color" content="#cf1111">
    <link rel="stylesheet" href="/css/menuStyle.css">
    <title>Login</title>
</head>
<body>
    <div class="wrapepr">
       <form action="/src/login.php" method="post" class="body">
           <h2>Login</h2>
           <input type="text" name="username" value="" placeholder="Username" aria-invalid="true" class="inputField">
           <?php if(HasValidationError("name")) : ?>
                    <small class="errorMassage"><?php GetValidationErrorMassage("name")?></small>
            <?php endif; ?>
           <input type="password" name="password" value="" placeholder="Password" aria-invalid="true" class="inputField">
           <?php if(HasValidationError("password")) : ?>
                <small class="errorMassage"><?php GetValidationErrorMassage("password")?></small>
            <?php endif; ?>
           <a href="/pages/registration.php" class="body__link">Нет аккаунта? Зарегистрируйтесь!</a>
           <button type="submit" class="body__button">Login</button>
           <a class="body__button red" href="/index.php">Back</a>
       </form>
    </div>
    <?php ClearValidation()?>
</body>
</html>