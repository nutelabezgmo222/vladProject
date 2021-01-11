$(document).ready(function() {
  let position = 0;
  const slidesToShow = 3;
  const slidesToScroll = 2;
  const container = $('.slider-container');
  const track = $('.slider-inner');
  const items = $('.slider-inner .slider-item');
  const nextBtn = $('.slider-next');
  const prevBtn = $('.slider-prev');
  const itemsCount = items.length;
  const itemWidth = container.width() / slidesToShow;
  const movePosition = slidesToScroll * itemWidth;
  const itemsWidthWithoutslides = -(itemsCount - slidesToShow)*itemWidth;

  items.each(function(index, item)  {
    $(item).css({minWidth: itemWidth})
  })

  nextBtn.click(function() {
    const itemsLeft = itemsCount - ( Math.abs(position) + slidesToShow * itemWidth ) / itemWidth;
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
    checkBtns();
  })
  prevBtn.click(function() {
    const itemsLeft = Math.abs(position) / itemWidth;

    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
    checkBtns()
  })
  const setPosition = () => {
    track.css({
      transform: `translateX(${position}px)`
    })
  }
  const checkBtns = () => {
    prevBtn.prop('disabled', position === 0);
    nextBtn.prop(
      'disabled',
       position <= itemsWidthWithoutslides
     );
  }
  checkBtns();

})
