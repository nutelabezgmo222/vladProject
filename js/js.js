$(document).ready(function() {
  $('.acc-head').click(function() {
    if($(this).hasClass('active')) {
      $(this).removeClass('active')
    } else {
      $('.accordeon .acc-head').removeClass('active')
      $(this).addClass('active')
    }
    $('.accordeon .acc-body').not($(this).next()).slideUp(700)
    $(this).next().slideToggle(700)
  })
})
