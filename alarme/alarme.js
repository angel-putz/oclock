$(alarme.php).ready(function() {

    let intervalId;
    let intervalIdAjout;

        $("#alarme_2").submit(function(e) {
            e.preventDefault();
            let formAjoutHeures = parseInt($('#heureAjout').val());
            let formAjoutMinutes = parseInt($('#minutesAjout').val());
            let Ajoutmessage = $('#messageAjout').val();
            let audio = new Audio('alarme.wav');


            if (formAjoutHeures < 0 || formAjoutHeures > 23 || formAjoutMinutes < 0 || formAjoutMinutes > 59) {
                alert('Veuillez entrer une heure valide');
                return;
            } 
            
            intervalIdAjout = setInterval(function() {
            if (formAjoutHeures == new Date().getHours() && formAjoutMinutes < new Date().getMinutes()){
                alert(Ajoutmessage);
                audio.play();
                $("#alarmePasse").append('<li>' + formAjoutHeures + "h" + ' : ' + formAjoutMinutes + "min" + '</li>'+ " alarme passée");
            }
            else {
                $('#nouvelleAlarme').html("Votre reveil sonnera a " +  formAjoutHeures + "h" + ' : ' + formAjoutMinutes + "min" );
            }
        });
    });



    });










    $("#alarme_1").submit(function(e) {
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

});
