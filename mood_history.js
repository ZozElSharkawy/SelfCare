document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("mood-history-list");

  function renderMoodHistory() {
    const storedHistory = JSON.parse(sessionStorage.getItem("moodHistory")) || [];

    // Clear the list first
    list.innerHTML = "";

    if (storedHistory.length === 0) {
      const li = document.createElement("li");
      li.textContent = "No moods logged.";
      list.appendChild(li);
    } else {
      storedHistory.forEach(entry => {
        const li = document.createElement("li");
        li.innerHTML = `
          <span class="mood-emoji">${entry.emoji}</span>
          <span class="mood-text">${entry.mood.charAt(0).toUpperCase() + entry.mood.slice(1)}</span>
          <span class="mood-date">${entry.timestamp}</span>
        `;
        list.appendChild(li);
      });
    }
  }
  renderMoodHistory();

  document.getElementById("clear-history-btn").addEventListener("click", () => {
    sessionStorage.removeItem("moodHistory");
    list.innerHTML = "<li>Mood history cleared.</li>";
    setTimeout(() => {
      renderMoodHistory();
    }, 2000);
  });
});
