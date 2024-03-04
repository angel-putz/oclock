$(document).ready(function() {

    let intervalId;
    $("form").submit(function(e) {
        e.preventDefault();

        let formHeures = parseInt($('#heure').val());
        let formMinutes = parseInt($('#minutes').val());
        let message = $('#message').val();
        //let Audio = new Audio('alarme.mp3');

        if (formHeures < 0 || formHeures > 23 || formMinutes < 0 || formMinutes > 59) {
            alert('Veuillez entrer une heure valide');
            return;
        }




        intervalId = setInterval(function() {
            if (formMinutes == new Date().getMinutes() && formHeures == new Date().getHours()) {
                alert(message);
                clearInterval(intervalId);
                //Audio.play();
            }


            $('#alarme').html(    "Votre reveil sonnera a " +  formHeures + "h" + ' : ' + formMinutes + "min" );


        });
    });
});