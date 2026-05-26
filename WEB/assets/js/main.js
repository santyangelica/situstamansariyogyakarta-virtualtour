function openPopup() {
  const popup = document.getElementById('audioPopup');
  popup.style.display = 'flex';
  popup.setAttribute('aria-hidden', 'false');
}

function startTour(useAudio, tourQuery = '') {
  localStorage.setItem('playMusic', useAudio ? 'yes' : 'no');
  window.location.href = `pages/virtualtour.html${tourQuery}`;
}

document.addEventListener('DOMContentLoaded', function () {
  const modals = [
   
    { button: 'jamBtn', modal: 'jamModal', close: '.close-jam' },
    { button: 'ticketBtn', modal: 'ticketModal', close: '.close-ticket' }
  ];

  modals.forEach(({ button, modal, close }) => {
    const trigger = document.getElementById(button);
    const dialog = document.getElementById(modal);
    const closeButton = document.querySelector(close);

    trigger.addEventListener('click', () => {
      dialog.style.display = 'flex';
    });

    closeButton.addEventListener('click', () => {
      dialog.style.display = 'none';
    });

    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) {
        dialog.style.display = 'none';
      }
    });
  });

  const revealItems = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  revealItems.forEach((item) => observer.observe(item));
});
