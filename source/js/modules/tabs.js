export const tabs = () => {
  const head = document.querySelector('.catalog__tabs');
  const body = document.querySelector('.catalog__tab-content');

  const getActiveTabName = () => {
    return head.querySelector('.catalog__tab--active').dataset.tab;
  };

  const setActiveContent = () => {
    if (body.querySelector('.catalog__list--active')) {
      body.querySelector('.catalog__list--active').classList.remove('catalog__list--active');
    }
    body.querySelector(`[data-tab="${getActiveTabName()}"]`).classList.add('catalog__list--active');
  };

  if (!body.querySelector('.catalog__list--active')) {
    body.querySelector('.catalog__list').classList.add('catalog__list--active');
  }

  setActiveContent(getActiveTabName());

  head.addEventListener('click', event => {
    const caption = event.target.closest('.catalog__tab');
    if (!caption) return
    if (caption.classList.contains('catalog__tab--active')) return
    if (head.querySelector('.catalog__tab--active')) {
      head.querySelector('.catalog__tab--active').classList.remove('catalog__tab--active');
    }

    caption.classList.add('catalog__tab--active');

    setActiveContent(getActiveTabName());
  });
};
