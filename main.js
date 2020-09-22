this>$('.drop').click(function(){
    $('.drop-discr', this).toggle(500);
    $('.drop-title svg', this).toggleClass('revers');
});

$(document).ready(function(){
    $('.header_burger').click(function(event){
        $('.header_burger, .header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
