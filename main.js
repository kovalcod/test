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
