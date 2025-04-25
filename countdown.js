<script>
  // Set your target cut-off date here (2025-05-01T19:30:00)
  const targetDate = new Date("2025-05-01T18:00:00"); 

  function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      document.getElementById("countdown").innerText = "Closed";
      clearInterval(timerInterval);
      return;
    }

    const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours   = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days"   ).textContent = String(days   ).padStart(2, '0');
    document.getElementById("hours"  ).textContent = String(hours  ).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
  }

  // kick off
  updateCountdown();
  const timerInterval = setInterval(updateCountdown, 1000);
</script>

