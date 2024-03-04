$(document).ready(function() {

    let intervalId;
    let heures = new Date().getHours();
    let minutes = new Date().getMinutes();

    let formHeures = $('#heures');
    let formMinutes = $('#minutes');

    $('#pause').click(function() {
        clearInterval(intervalId);
    });

    $("form").submit(function(e) {
        e.preventDefault();

        intervalId = setInterval(function() {