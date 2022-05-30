qrCodeClickCounter = 0;
let detect = new MobileDetect(window.navigator.userAgent)
new ClipboardJS('.monobank__icon');
new ClipboardJS('.privatbank__icon');

console.log("userAgent: " + detect.userAgent());

$('#donation__butt').click(function(){
    $('#donation__info__screen').slideDown();
    $('#donation__info__screen').css('display', 'flex');
    
})

$('#donation__card-cross').click(function(){
    $('#donation__info__screen').slideUp()
})

$('#donation__card__accept-button').click(function(){
    $('#donation__info__screen').slideUp()
})



  if(detect.mobile() === null){
      tippy('#donation__butt', {
        content: "Натисніть, щоб дізнатися більше",
        animation: 'scale'
      });
    
      tippy('#monobank__icon', {
        content: "Натисніть, щоб скопіювати",
        animation: 'scale',
        followCursor: true
      });

        tippy('#qrCode__button', {
          content: "Показати QR код",
          animation: 'scale',
          placement: 'bottom'
        });

      tippy('#monobank__icon', {
        content: "Скопійовано",
        trigger: 'click',
        animation: 'scale',
        placement: 'bottom'
      });
    
      tippy('#privatbank__icon', {
        content: "Натисніть, щоб скопіювати",
        animation: 'scale',
        followCursor: true
      });
    
      tippy('#privatbank__icon', {
        content: "Скопійовано",
        trigger: 'click',
        animation: 'scale',
        placement: 'bottom'
      });


      $('#qrCode__button').click(function(){
        $('#donation__card-text').slideToggle();
        if(qrCodeClickCounter === 0){
          $('#qrCode__icon').css('display', 'block');
          qrCodeClickCounter = 1;
        }else{
          $('#qrCode__icon').css('display', 'none');
          qrCodeClickCounter = 0;
        }
      })

  }else{
    tippy('#monobank__icon', {
      content: "Скопійовано",
      trigger: 'click',
      animation: 'scale',
      placement: 'bottom'
    });

    tippy('#privatbank__icon', {
      content: "Скопійовано",
      trigger: 'click',
      animation: 'scale',
      placement: 'bottom'
    });

  }