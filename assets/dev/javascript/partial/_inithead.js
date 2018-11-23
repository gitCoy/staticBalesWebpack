  const initHomeHeight = () => {
    let height = $(window).height(),width = $(window).width();
    $('.x-home-height').css('height', height)
  }
  
  const init = () => {
    initHomeHeight()
  }
  const bind = () => {

  }
  
  export default {
    bind,
    init
  }