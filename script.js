console.log(window);

new ClipboardJS('.monobank__icon');

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

tippy('#donation__butt', {
    content: "Натисніть, щоб дізнатися більше",
    animation: 'scale'
  });

  tippy('#monobank__icon', {
    content: "Натисніть, щоб скопіювати",
    animation: 'scale',
    followCursor: true
  });

  tippy('#monobank__icon', {
    content: "Скопійовано",
    trigger: 'click',
    animation: 'scale',
    placement: 'bottom',
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
    placement: 'bottom',
  });