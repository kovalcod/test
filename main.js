var swiper = new Swiper('.swiper-container', {
    spaceBetween:20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination'
    },
    grabCursor: true,
  });

  $(document).ready(function(){
    $('.header_burger').click(function(event){
        $('.header_burger, .header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
  });
