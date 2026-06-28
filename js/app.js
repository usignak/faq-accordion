const faqItem = document.querySelectorAll('.faq__item');

faqItem.forEach(item => {
  item.addEventListener('click', () => {
    const btn = item.querySelector('.button__image');
    const text = item.querySelector('.text');

    btn.classList.toggle('active');
    text.classList.toggle('show');
  })
})