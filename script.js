document.addEventListener('DOMContentLoaded', () => {
  const loadingPercentage = document.getElementById('loading-percentage');
  const introSection = document.getElementById('intro-section');
  const loadingSection = document.querySelector('.loading-section');
  const fadeElements = document.querySelectorAll('.fade-in');

  let percentage = 0;
  const loadingInterval = setInterval(() => {
      percentage += 1;
      loadingPercentage.textContent = `${percentage}%`;

      if (percentage >= 100) {
          clearInterval(loadingInterval);
          loadingSection.classList.add('hidden');
          introSection.classList.add('visible');
      }
  }, 50);

  window.addEventListener('scroll', () => {
      fadeElements.forEach(element => {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
              element.classList.add('visible');
          } else {
              element.classList.remove('visible');
          }
      });
  });
});
