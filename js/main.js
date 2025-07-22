document.addEventListener('DOMContentLoaded', () => {
  // --- Carrusel de Noticias ---
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const items = document.querySelectorAll('.news-item');
  let currentIndex = 0;

  function showItem(index) {
    items.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });
  }

  if (prevBtn && nextBtn && items.length > 0) {
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      showItem(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % items.length;
      showItem(currentIndex);
    });

    showItem(currentIndex);
  }

  // --- Validación Formulario Contacto ---
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (!name) {
        alert('Por favor, ingresa tu nombre.');
        form.name.focus();
        return;
      }

      if (!email || !validateEmail(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        form.email.focus();
        return;
      }

      if (!message) {
        alert('Por favor, escribe un mensaje.');
        form.message.focus();
        return;
      }

      alert('Formulario enviado correctamente. ¡Gracias!');
      form.reset();
    });
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});
