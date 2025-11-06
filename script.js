// Desplazamiento suave al menú
document.getElementById('botonMenu').addEventListener('click', () => {
  document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
});

// Efecto visual en botón WhatsApp
const whatsappBtn = document.querySelector('.btn-whatsapp');
whatsappBtn.addEventListener('mouseenter', () => {
  whatsappBtn.style.transform = 'scale(1.1)';
});
whatsappBtn.addEventListener('mouseleave', () => {
  whatsappBtn.style.transform = 'scale(1)';
});
