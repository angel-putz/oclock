<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link src="minuteur.css">
    <title>Document</title>
</head>
<body>
    <h1>Minuteur</h1>
    <form action="minuteur.php" method="post">
        <input type="number" name="minutes" id="minutes" placeholder="minutes">
        <input type="number" name="secondes" id="secondes" placeholder="secondes">
        <input type="submit" value="lancer">
    </form>
    <div id="minuteur"></div>
    <button id="pause">pause</button>

    <button onclick="window.location.href='index.php'">Retour</button>


    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="minuteur.js"></script>
</body>
</html>