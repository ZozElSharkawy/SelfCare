
  const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Take time to do what makes your soul happy.",
    "Breathe. You're doing better than you think.",
    "Self-care is how you take your power back.",
    "Be kind to yourself today.",
    "Small steps every day lead to big changes.",
    "Progress, not perfection."
  ];

  const quoteElement = document.querySelector("q");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];


  const moodButtons = document.querySelectorAll(".mood-btn");

  moodButtons.forEach(button => {
    button.addEventListener("click", () => {
      const mood = button.dataset.mood;
      const emoji = button.textContent;
      const timestamp = new Date().toLocaleString();

      const newEntry = { mood, emoji, timestamp };

      // Get old history or start a new one
      let history = JSON.parse(sessionStorage.getItem("moodHistory")) || [];
      history.unshift(newEntry); // Add new entry to the beginning
      sessionStorage.setItem("moodHistory", JSON.stringify(history));
    });
  });
