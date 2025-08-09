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

  const checkboxes = document.querySelectorAll(".goal-checkbox");
const progressBar = document.getElementById("goal-progress");

checkboxes.forEach(cb => {
  cb.addEventListener("change", () => {
    let checkedCount = document.querySelectorAll(".goal-checkbox:checked").length;
    progressBar.value = checkedCount;
  });
});

const noteInput = document.getElementById("note-input");
const submitBtn = document.querySelector(".submit-btn");
const notesList = document.getElementById("notes-list");

let notes = JSON.parse(localStorage.getItem("notes")) || [];
renderNotes();
// Add new note
submitBtn.addEventListener("click", () => {
  const text = noteInput.value.trim();
  if (!text) return; // Ignore empty notes
  const newNote = {
    text,
    date: new Date().toLocaleDateString()
  };
  notes.push(newNote);
  localStorage.setItem("notes", JSON.stringify(notes));
  noteInput.value = "";
  renderNotes();
});

function renderNotes() {
  notesList.innerHTML = "";
  notes.forEach((note, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="note-text"><strong>${note.date}</strong>: ${note.text}</span>
      <button class="delete-btn" data-index="${index}">✖</button>
    `;
    notesList.appendChild(li);
  });
  document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = btn.dataset.index;
      notes.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(notes));
      renderNotes();
    });
  });
}

