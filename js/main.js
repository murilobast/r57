//menu fixo
$('.menu').addClass('original').clone().insertAfter('.menu').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);


function stickIt() {

  var orgElementPos = $('.original').offset();
  orgElementTop = orgElementPos.top;               

  if ($(window).scrollTop() >= (orgElementTop)) {
    
    orgElement = $('.original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;  
    widthOrgElement = orgElement.width();
    $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement+'px').show();
    $('.original').css('visibility','hidden');
      
  } else {
      
    $('.cloned').hide();
    $('.original').css('visibility','visible');
      
  }
}

//scroll
$('a[href^="#"]').click(function() {

    $('html,body').animate({ scrollTop: $(this.hash).offset().top}, 800);

    return false;

    e.preventDefault();

});

//exibição de imagem do projeto
$('.container').click(function(event){
    if ($(window).width() > 600) {
    //    event.preventDefault()
        $('.container').css(({ 'width' : '42%', 'height' : '0', 'padding-bottom' : '23.7%' }));
        $(this).css({ 'width' : '90%', 'padding-bottom' : '0px', 'height' : 'auto' });
    }
});
