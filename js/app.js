const faqItem = document.querySelectorAll('.faq__item');

faqItem.forEach(item => {
  item.addEventListener('click', (e) => {
    let btn = item.querySelector('.button__image');
    let text = item.querySelector('.text');

    btn.classList.toggle('active');
    text.classList.toggle('show');
  })
})