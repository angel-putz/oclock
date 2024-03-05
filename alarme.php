<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="alarme.css">
    <title>Document</title>
</head>
<body>
<h1>Alarme</h1>
<form action="alarme.php" method="post">
    <input type="number" name="heure" id="heure" placeholder="heure">
    <input type="number" name="minutes" id="minutes" placeholder="minutes">
    <input type="text" name="message" id="message" placeholder="message">
    <input type="submit" value="lancer">
</form>
<div id="alarme"></div>
<button onclick="window.location.href='index.php'">Retour</button>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="alarme.js"></script>
</body>
</html>