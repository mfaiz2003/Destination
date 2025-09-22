const container = document.querySelector('.international-trip');
let scrollAmount = 0;

function autoScroll() {
  const cardWidth = container.children[0].offsetWidth + 30; // card + gap
  scrollAmount += cardWidth;

  // loop back if reached end
  if (scrollAmount > container.scrollWidth - container.clientWidth) {
    scrollAmount = 0;
  }

  container.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
}

setInterval(autoScroll, 4000);


