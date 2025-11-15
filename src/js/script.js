// swiper

var banner = new Swiper(".banner", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false, // توقف نشود!
  },
  spaceBetween: 10,
});
var category = new Swiper(".category", {
  slidesPerView: 5.5,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false, // توقف نشود!
  },
  spaceBetween: 14,
  breakpoints: {
    992: {
      slidesPerView: 6.5,
    },
    1200: {
      slidesPerView: 7,
      spaceBetween: 40,
    }
  },
  navigation: {
    nextEl: '.swiper-button-next', // دکمه بعدی
    prevEl: '.swiper-button-prev', // دکمه قبلی
  },
});

var suggest = new Swiper(".suggest", {
  slidesPerView: 2.2,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false, // توقف نشود!
  },
  spaceBetween: 8,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 25,
    }
  },
  navigation: {
    nextEl: '.swiper-button-next2', // دکمه بعدی
    prevEl: '.swiper-button-prev2', // دکمه قبلی
  },
});
var products = new Swiper(".products", {
  slidesPerView: 3.2,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false, // توقف نشود!
  },
  spaceBetween: 8,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 8,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 25,
    }
  },
  navigation: {
    nextEl: '.swiper-button-next3', // دکمه بعدی
    prevEl: '.swiper-button-prev3', // دکمه قبلی
  },
});
var blog = new Swiper(".blog", {
  slidesPerView: 2.3,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false, // توقف نشود!
  },
    spaceBetween: 8,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 8,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 25,
    }
  },
  navigation: {
    nextEl: '.swiper-button-next4', // دکمه بعدی
    prevEl: '.swiper-button-prev4', // دکمه قبلی
  },
});
var similar = new Swiper(".similar", {
  slidesPerView: 1.5,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false, // توقف نشود!
  },
  spaceBetween: 14,
  breakpoints: {
      768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 21,
    }
  },
    navigation: {
    nextEl: '.swiper-button-next', // دکمه بعدی
    prevEl: '.swiper-button-prev', // دکمه قبلی
  },
});
var mySwiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var mySwiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  thumbs: {
    swiper: mySwiper,
  },
});
// persian number

function convertPageNumbersToPersian() {
  const elements = document.querySelectorAll('body *:not(script):not(style)');

  elements.forEach(element => {
    element.childNodes.forEach(node => {
      if (node.nodeType === 3) { // Text node
        node.nodeValue = node.nodeValue.replace(/\d/g, (digit) => {
          return String.fromCharCode(digit.charCodeAt(0) + 1728);
        });
      }
    });
  });
}
// accordion

let accordionBtn = Array.from(document.getElementsByClassName('accordionBtn'));
let accordionBtn2 = Array.from(document.getElementsByClassName('accordionBtn2'));

accordionBtn.forEach((item)=>{
  item.addEventListener('click', function () {
    item.classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
  })
});
accordionBtn2.forEach((item)=>{
  item.addEventListener('click', function () {
    item.classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
  })
});

// search

let openSearch = Array.from(document.getElementsByClassName('openSearch'));
let searchModal = document.getElementById('searchModal');
let overlay2 = document.getElementById('overlay2');

openSearch.forEach((item)=>{
  item.addEventListener('click',function () {
    searchModal.classList.add('active');
    overlay2.classList.add('active');
  });
})

overlay2.addEventListener('click',function () {
  searchModal.classList.remove('active');
  overlay2.classList.remove('active');
});