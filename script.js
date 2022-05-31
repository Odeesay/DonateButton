qrCodeClickCounter = 0;
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
    

      // tippy('#qrCode__button', {
      //   content: "Сховати QR код",
      //   animation: 'scale',
      //   placement: 'bottom'
      // });

      tippy('#privatbank__icon', {
        content: "Натисніть, щоб скопіювати",
        animation: 'scale',
        followCursor: true
      });
    
      tipCopied();
      

      $('#qrCode__button').click(function(){
        console.log(qrCodeClickCounter)
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
    tipCopied()
  }