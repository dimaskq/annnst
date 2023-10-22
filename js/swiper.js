
const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    spaceBetween: 10,
    effect: 'flip',
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    history: {
        replaceState: true,
      },
  });


