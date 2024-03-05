$(document).ready(function() {
    let intervalId;
    let resumeIntervalId;

    let audio = new Audio('minuteur.wav');
    


    $("form").submit(function(e) {
        e.preventDefault();          
        let minutes = parseInt($('#minutes').val());
        let secondes = parseInt($('#secondes').val());
        let total = minutes * 60 + secondes;




        intervalId = setInterval(function() {
                if (total <= 0) {
                    audio.play();
                    alert('Fin du minuteur');
                    clearInterval(intervalId);
                } else {
                    if (secondes == 0) {
                        minutes = minutes - 1;
                        secondes = 59;
                    } else {
                        secondes = secondes - 1;
                    }
                    total = total - 1;
                    console.log(total);
            }
            $('#minuteur').html(minutes + ' : ' + secondes + ' restantes');

        
        }, 1000);



        $('#pause').click(function() {
            clearInterval(intervalId);
        }); 

        $('#resume').click(function() {
            resumeIntervalId = setInterval(function() {
                if (total <= 0) {
                    audio.play();
                    alert('Fin du minuteur');
                    clearInterval(resumeIntervalId);
                } else {
                    if (secondes == 0) {
                        minutes = minutes - 1;
                        secondes = 59;
                    } else {
                        secondes = secondes - 1;
                    }
                    total = total - 1;
                    console.log(total);
            }

            $('#minuteur').html(minutes + ' : ' + secondes + ' restantes');


        },1000);




    });
});
});