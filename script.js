document.addEventListener('DOMContentLoaded', () => {
  const loadingPercentage = document.getElementById('loading-percentage');
  const introSection = document.getElementById('intro-section');
  const loadingSection = document.querySelector('.loading-section');
  const projectItems = document.querySelectorAll('.project-item');

  let percentage = 0;
  const loadingInterval = setInterval(() => {
      percentage += 1;
      loadingPercentage.textContent = `${percentage}%`;

      if (percentage >= 100) {
          clearInterval(loadingInterval);
          setTimeout(() => {
              loadingSection.classList.add('hidden');
              introSection.classList.add('visible');
          }, 500); // Delay to allow the last frame of the animation
      }
  }, 30); // Faster increment for smoother animation

  window.addEventListener('scroll', () => {
      projectItems.forEach((item, index) => {
          const rect = item.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
              setTimeout(() => {
                  item.classList.add('visible');
              }, index * 150); // Stagger the animation
          }
      });
  });
});
