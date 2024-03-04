$(document).ready(function() {
    let intervalId;

    let nbtours = 0;    

    $("#reset").click(function() {
        location.reload();
    });



      $("#start").click(function() {
        
        let minutes = 0;
        let secondes =0;
        let total = minutes * 60 + secondes;

        $("#tour").click(function() {




            $('#tours').append('<li>Tour : ' + nbtours + " : " + minutes + "min" + ":" + secondes + "s" + '</li>');
    
            nbtours = nbtours + 1;
    
    
        });

        intervalId = setInterval(function() {
            if (total >=100000000000000) {
                alert('Fin du chronomètre');
                clearInterval(intervalId);
            } else {
                if (secondes == 59) {
                    minutes = minutes + 1;
                    secondes = 0;
                } else {
                    secondes = secondes + 1;
                }
                total = total + 1;
                console.log(total);
            }
            $('#chronometre').html(minutes + ' : ' + secondes + ' écoulées');
        }, 1000);
    });
    });
