var header = document.querySelector("header");
var nav = document.querySelector("nav");
var mediaQuerie = window.matchMedia("(min-width: 992px)")

// header turn to navbar 
changeHeader = ()=>{
     if (mediaQuerie.matches) { // If media query matches
          header.classList.toggle("sticky", window.scrollY > 30);
          header.childNodes[1].classList.toggle("sticky-img", window.scrollY > 30);
          header.childNodes[3].classList.toggle("sticky-none-visible", window.scrollY > 30);
          header.childNodes[5].classList.toggle("sticky-buttons", window.scrollY > 30);
          header.childNodes[5].childNodes[3].classList.toggle("order-reverse", window.scrollY > 30);
          setTimeout(()=>{
               nav.classList.toggle("fixed", window.scrollY > 30);
          }, 400)
     }
     
}

window.addEventListener("scroll", changeHeader);

window.addEventListener('load', function(){
     AOS.init({
          duration: 800, 
          offset: 80,
     });


     new Glider(document.querySelector('.glider'), {
          slidesToShow: 1,
          itemWidth: 5,
          slidesToScroll: 1,
          draggable: true,
          scrollLock: false,
          dots: '.dots',
          arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
          },
          responsive: [
               {
                 // screens greater than >= 775px
                 breakpoint: 576,
                 settings: {
                   // Set to `auto` and provide item width to adjust to viewport
                   slidesToShow: 2,
                   slidesToScroll: 1,
                 }
               },
               {
                    // screens greater than >= 775px
                    breakpoint: 768,
                    settings: {
                      // Set to `auto` and provide item width to adjust to viewport
                      slidesToShow: 2,
                      slidesToScroll: 1,
                    }
                  }
             ]
        });
});

