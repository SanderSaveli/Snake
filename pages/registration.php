<?php 
    require_once "/Program/OSPanel/domains/Snake/src/validationHelpers.php";
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
    <title>Registration</title>
</head>
<body>
    <div class="wrapepr">
            <form action="/src/registration.php" method="post" class="body">
                <h2>Registration</h2>
                <input type="text" name="username" aria-invalid="true" required class="inputField" placeholder="Username">
                <?php if(HasValidationError("name")) : ?>
                    <small class="errorMassage"><?php GetValidationErrorMassage("name")?></small>
                <?php endif; ?>
                <input type="password" name="password" aria-invalid="true" required class="inputField" placeholder="Password">
                <?php if(HasValidationError("password")) : ?>
                    <small class="errorMassage"><?php GetValidationErrorMassage("password")?></small>
                <?php endif; ?>
                <input type="password" name="confirm_password" class="inputField" placeholder="Confirm password">
                <?php if(HasValidationError("confirm_password")) : ?>
                    <small class="errorMassage"><?php GetValidationErrorMassage("confirm_password")?></small>
                <?php endif; ?>
                <button type="submit" class="body__button">Create</button>
                <a href="/index.php" class="body__button red">Back</a>
            </form>
    </div>
    <?php ClearValidation()?>
</body>
</html>