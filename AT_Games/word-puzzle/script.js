const puzzleImg = document.getElementById('puzzleImage');
const answerImg = document.getElementById('answerImage');
const button = document.getElementById('toggleBtn');

let showingAnswer = false;

function updateImages() {
  puzzleImg.classList.toggle('active', !showingAnswer);
  answerImg.classList.toggle('active', showingAnswer);
  button.textContent = showingAnswer ? 'Show Puzzle' : 'Show Answer';
  button.setAttribute('aria-pressed', showingAnswer.toString());
}

button.addEventListener('click', () => {
  showingAnswer = !showingAnswer;
  updateImages();
});

updateImages(); // Initial state
