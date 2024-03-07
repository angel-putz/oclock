<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./alarme.css">
    <title>Document</title>
</head>
<body>
    
<h1>Alarme</h1>

<form action="alarme.php" method="post" id="alarme_1">
    <input type="number" name="heure" id="heure" placeholder="heure">
    <input type="number" name="minutes" id="minutes" placeholder="minutes">
    <input type="text" name="message" id="message" placeholder="message">
    <input type="submit" value="lancer">
</form>

<p> Pour ajouter une alarme, veuillez renseigner l'heure, les minutes et le message de l'alarme.</p>

<form action="alarme.php" method="post" id="alarme_2">
    <input type="number" name="heure" id="heureAjout" placeholder="heure">
    <input type="number" name="minutes" id="minutesAjout" placeholder="minutes">
    <input type="text" name="message" id="messageAjout" placeholder="message">
    <input type="submit" value="lancer">
</form>

<p>Alarmes :</p>

<div id="alarme"></div>

<p>Nouvelle alarme :</p>

<div id="nouvelleAlarme"><br></div>

<p>Alarme passé :</p>

<div id="alarmePasse"></div>

<button onclick="window.location.href='../index.php'">Retour</button>

<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>

<script src="./alarme.js"></script>

</body>
</html>