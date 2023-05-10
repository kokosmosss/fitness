export const initTrainersSwiper = () => {
  const trainersSlider = new Swiper('.trainers__slider', { // eslint-disable-line
    direction: 'horizontal',
    loop: true,

    navigation: {
      nextEl: '.trainers__btn--next',
      prevEl: '.trainers__btn--prev',
    },
    maxBackfaceHiddenSlides: 0,
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },

      768: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },

      1200: {
        slidesPerView: 3,
        slidesPerGroup: 1,
      },

      1280: {
        slidesPerView: 4,
        slidesPerGroup: 1,
      },
    },
  });
};

export const initReviewsSwiper = () => {
  const reviewsSlider = new Swiper('.reviews__slider', { // eslint-disable-line
    direction: 'horizontal',

    navigation: {
      nextEl: '.reviews__btn--next',
      prevEl: '.reviews__btn--prev',
    },

    slidesPerView: 1,
  });
};
