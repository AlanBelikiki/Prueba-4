// Animación de aparición de mensajes
const messages = document.querySelectorAll('.message');

messages.forEach((message, index) => {
    gsap.fromTo(message, { opacity: 0, translateY: 100 }, { opacity: 1, translateY: 0, duration: 1, delay: index * 1.5 });
});

// Animación de la puerta al hacer clic
const door = document.getElementById('door');

door.addEventListener('click', function() {
    gsap.to('#door', { rotation: 0, duration: 0.5, ease: 'back.out(2)' });
});
