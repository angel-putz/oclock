$(document).ready(function() {



    $('#pause').click(function() {
        clearInterval();

    });





    $("form").submit(function(e) {
        e.preventDefault();          
        let minutes = parseInt($('#minutes').val());
        let secondes = parseInt($('#secondes').val());
        let total = minutes * 60 + secondes * 1;
            setInterval(function() {

                if (total <= 0) {
                    alert('Fin du minuteur');
                    clearInterval(minutes , secondes);
                }
                else {
                    for (let i = 0; i < total; i++) {
                        if (secondes == 0) {
                            minutes = minutes - 1;
                            secondes = 60;
                        } else {
                        secondes = secondes - 1;
                        total = total - 1;
                        console.log(total);
                        };
                    };
                };
                $('#minuteur').html(minutes + ' : ' + secondes + ' restantes');
            }, 5000);
        });
    });