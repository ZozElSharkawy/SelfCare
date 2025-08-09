document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("mood-history-list");

  function renderMoodHistory() {
    const storedHistory =
      JSON.parse(sessionStorage.getItem("moodHistory")) || [];
    list.innerHTML = ""; // Clear list
    if (storedHistory.length === 0) {
      const li = document.createElement("li");
      li.textContent = "No moods logged.";
      list.appendChild(li);
    } else {
      storedHistory.forEach((entry, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
          <span class="mood-emoji">${entry.emoji}</span>
          <span class="mood-text">${
            entry.mood.charAt(0).toUpperCase() + entry.mood.slice(1)
          }</span>
          <span class="mood-date">${entry.timestamp}</span>
          <button class="delete-btn" data-index="${index}">✖</button>
        `;
        list.appendChild(li);
      });

      document.querySelectorAll(".delete-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const index = btn.dataset.index;
          storedHistory.splice(index, 1);
          sessionStorage.setItem("moodHistory", JSON.stringify(storedHistory));
          renderMoodHistory();
        });
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