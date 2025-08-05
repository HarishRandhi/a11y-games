document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentIndex = 0;

  const showSlide = (index) => {
    cards.forEach((card, i) => {
      card.classList.toggle('active', i === index);
    });
  };

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showSlide(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;
    showSlide(currentIndex);
  });

  // Handle "Show Meaning" buttons
  document.querySelectorAll('.reveal-btn').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      const isVisible = answer.classList.toggle('active');
      button.textContent = isVisible ? 'Hide Meaning' : 'Show Meaning';
    });
  });

  showSlide(currentIndex); // initial slide
});
