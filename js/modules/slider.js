function slider({slide, prevArrow, nextArrow, currentCounter, totalCounter}) {

  const slides = document.querySelectorAll(slide),
    prev = document.querySelector(prevArrow),
    next = document.querySelector(nextArrow),
    current = document.querySelector(currentCounter),
    total = document.querySelector(totalCounter);

  let slideIndex = 1;

  showSlides(slideIndex)

  if (slides.length < 10) {
    total.textContent = `0${slides.length}`
  } else {
    total.textContent = slides.length
  }

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(item => {
      item.style.display = 'none'
    });

    slides[slideIndex - 1].style.display = 'block';

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex
    }
  }

  function plusSlide(n) {
    showSlides(slideIndex += n)
  }

  prev.addEventListener('click', () => {
    plusSlide(-1)
  })

  next.addEventListener('click', () => {
    plusSlide(1)
  })
}

export default slider;