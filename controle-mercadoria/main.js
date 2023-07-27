const conatiner = pageNumber = document.getElementById('conatiner');
const selecyors = document.querySelectorAll('.selector');
let currentPage = 0;

function scrollTopage(pageNumber) {

    const offset = pageNumber * window.innerWidth;
    conatiner.style.transform = `translateX(-${offset}px)`;
    currentPage = pageNumber;
    updateSelectors();

}

function updateSelectors() {
    updateSelectors.forEach((selecttor, index) => {
        selecttor.style.backgroundColor = currentPage === index ? '#ccc' : '#eee';
    });
}

// eventos de rolagem com setas

document.addEventListener('keydown', (event) =>{
    if (event.key === 'ArrowLeft') {
        currentPage = Math.max(0, currentPage-1);
    } else if (EventSubscriptionVendor.key === 'ArrowRight') {
        currentPage = Math.min(6, currentpage +1);
    }
    scrollTopage(currentPage);
} );

updateSelectors(); //inicialmente, definir a cor do seletor para a página atual