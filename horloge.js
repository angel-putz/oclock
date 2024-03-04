$(document).ready(function() {

    $("#start").click(function() {

    let heures = new Date().getHours();
    let minutes = new Date().getMinutes();
    let secondes = new Date().getSeconds();
    let intervalId = setInterval(function() {
        secondes = secondes + 1;
        if (secondes == 60) {
            minutes = minutes + 1;
            secondes = 0;
        }
        if (minutes == 60) {
            heures = heures + 1;
            minutes = 0;
        }
        if (heures == 24) {
            heures = 0;
        }
        $('#horloge').html(heures + ' : ' + minutes + ' : ' + secondes);
    }, 1000);
});
});