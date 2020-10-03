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

$(document).ready(function(){
  $('.drop-title').click(function(){
      if((this).classList.contains('active')){
        $('.drop-discr').slideUp();
        $(this).removeClass();
      }else{
        $('.drop-discr').slideDown();
        $(this).addClass('active');
      }
    });
    $('.header_burger').click(function(event){
        $('.header_burger, .header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
