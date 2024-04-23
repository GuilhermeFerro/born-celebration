document.addEventListener("DOMContentLoaded", function () {
  var targetDate = new Date("2024-06-14T00:00:00"); // Data de nascimento
  var daysSpan = document.getElementById("days");
  var hoursSpan = document.getElementById("hours");
  var minutesSpan = document.getElementById("minutes");
  var secondsSpan = document.getElementById("seconds");

  function updateCountdown() {
    var now = new Date();
    var duration = targetDate - now;

    var days = Math.floor(duration / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((duration % (1000 * 60)) / 1000);

    daysSpan.textContent = days;
    hoursSpan.textContent = hours;
    minutesSpan.textContent = minutes;
    secondsSpan.textContent = seconds;

    setTimeout(updateCountdown, 1000); // Atualiza a contagem a cada segundo
  }

  updateCountdown();
});
