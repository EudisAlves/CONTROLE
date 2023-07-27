const container = document.getElementById('container');
const selectors = document.querySelectorAll('.selector');
let currentPage = 0;

function scrollToPage(pageNumber) {
  const offset = pageNumber * window.innerWidth;
  container.style.transform = `translateX(-${offset}px)`;
  currentPage = pageNumber;
  updateSelectors();
}

function updateSelectors() {
  selectors.forEach((selector, index) => {
    selector.style.backgroundColor = currentPage === index ? '#ccc' : '#eee';
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    currentPage = Math.max(0, currentPage - 1);
  } else if (event.key === 'ArrowRight') {
    currentPage = Math.min(13, currentPage + 1);
  }
  scrollToPage(currentPage);
});

updateSelectors(); // Inicialmente, definir a cor do seletor para a página atual
