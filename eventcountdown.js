let countDownDate;
let notificationDate;
let eventName;

document.getElementById('eventForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    eventName = document.getElementById('eventName').value;
    const eventDate = new Date(document.getElementById('eventDate').value);
    const notifyDays = parseInt(document.getElementById('notifyDays').value);

    countDownDate = eventDate.getTime();
    notificationDate = new Date(countDownDate - (notifyDays * 24 * 60 * 60 * 1000));

    document.getElementById('eventTitle').textContent = `Countdown to ${eventName}`;

    startCountdown();
});

function startCountdown() {
    // Update the countdown every 1 second
    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days.toString().padStart(2, '0');
        document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EVENT HAS STARTED";
        }

        // Check if it's time for notification
        if (now >= notificationDate.getTime() && now < (notificationDate.getTime() + 1000)) {
            console.alert(`Reminder: ${eventName} is in ${document.getElementById('notifyDays').value} days!`);
        }
    }, 1000);
}
