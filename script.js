/*------------------------------------------------
Alert and Interactive Contact Form to google Sheets
------------------------------------------------*/
const scriptURL = 'https://script.google.com/macros/s/AKfycbxC2m34jQdQB9XqTNAcJdR_y91Aq5y6mkUdCj1zEFbNaH9T-ArQyjBSRrGss1fcNn5i/exec';
const form = document.forms['project-contact-form'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // ketika tombol submit di kirim
  // tampilkan tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle('d-none');
  btnKirim.classList.toggle('d-none');
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      // tampilkan tombol kirim, hilangkan tombol loading
      btnKirim.classList.toggle('d-none');
      btnLoading.classList.toggle('d-none');
      // tampilkan alert
      swal('Terimakasih!', 'komentar sudah di terima', 'success');
      // reset formnya
      form.reset();
      console.log('Success!', response);
    })
    .catch((error) => console.error('Error!', error.message));
});

/**
 * Testimonials slider
 */
new Swiper('.testimonials-slider', {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
