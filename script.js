let qrCodeClickCounter = 0;
const copiedTippy = tippy('#qrCode__button', {
  placement: 'bottom',
  theme: 'clean'
})[0];

copiedTippy.setContent('Показати Qr код')

let detect = new MobileDetect(window.navigator.userAgent)
new ClipboardJS('.monobank__icon');
new ClipboardJS('.privatbank__icon');

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

function tipCopied(){
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

  if(detect.mobile() === null){
    qrCodeClickCounter = 0;

      tippy('#donation__butt', {
        content: "Натисніть, щоб дізнатися більше",
        animation: 'scale'
      });
    
      tippy('#monobank__icon', {
        content: "Натисніть, щоб скопіювати",
        animation: 'scale',
        followCursor: true
      });

      tippy('#privatbank__icon', {
        content: "Натисніть, щоб скопіювати",
        animation: 'scale',
        followCursor: true
      });
    
      tipCopied();
      
      $('#qrCode__button').click(function(){
        
        $('#donation__card-text').slideToggle();
        if(qrCodeClickCounter === 0){
          $('#qrCode__icon').css('display', 'block');
          qrCodeClickCounter = 1;
          copiedTippy.setContent('Сховати Qr код')
        }else{
          $('#qrCode__icon').css('display', 'none');
          qrCodeClickCounter = 0;
          copiedTippy.setContent('Показати Qr код')
        }
      })
  }else{
    tipCopied()
  }