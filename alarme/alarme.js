$(alarme.php).ready(function() {

    let intervalId;
    $("form").submit(function(e) {
        e.preventDefault();

        let formHeures = parseInt($('#heure').val());
        let formMinutes = parseInt($('#minutes').val());
        let message = $('#message').val();
        let audio = new Audio('alarme.wav');

        if (formHeures < 0 || formHeures > 23 || formMinutes < 0 || formMinutes > 59) {
            alert('Veuillez entrer une heure valide');
            return;
        }

        intervalId = setInterval(function() {
            if (formMinutes == new Date().getMinutes() && formHeures == new Date().getHours()) {
                $('#alarme').html('');
                audio.play();
                alert(message);
                clearInterval(intervalId);
                $("#alarmePasse").append('<li>' + formHeures + " h" + ' : ' + formMinutes + " min" + " alarme passée" + '</li>');

            }else {
                $('#alarme').html("Votre reveil sonnera a " +  formHeures + "h" + ' : ' + formMinutes + "min" );
            }


        });

        $("#Ajout").submit(function(e) {
            e.preventDefault();
            let formAjoutHeures = parseInt($('#heureAjout').val());
            let formAjoutMinutes = parseInt($('#minutesAjout').val());
            let Ajoutmessage = $('#messageAjout').val();
            let audio = new Audio('alarme.wav');
            if (formAjoutHeures < 0 || formAjoutHeures > 23 || formAjoutMinutes < 0 || formAJoutMinutes > 59) {
                alert('Veuillez entrer une heure valide');
                return;
            } else if (formAjoutHeures == new Date().getHours() && formAjoutMinutes < new Date().getMinutes()){
                alert(Ajoutmessage);
                $("#alarmepasse").append('<li>' + formAjoutHeures + "h" + ' : ' + formAjoutMinutes + "min" + '</li>'+ " alarme passée");

            }
    });
});
});