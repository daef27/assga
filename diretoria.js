function filtrarAno(ano) {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    if (parseInt(card.getAttribute('data-ano')) === ano) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}