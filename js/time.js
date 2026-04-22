const timeEl = document.getElementById('time');

if (timeEl) {
    const updateTime = () => {
        timeEl.textContent = new Date().toLocaleTimeString('en-AU', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
        });
    };

    updateTime();
    setInterval(updateTime, 1000);
}