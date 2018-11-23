import {isSP, isHSFn} from "../consist/GLOBAL_CONFIG";

const slidebarFixed = (function(bodyCls) {
  var scrollTop;
  return {
    afterOpen: function() {
      scrollTop = document.scrollingElement.scrollTop
      document.body.classList.add(bodyCls)
      document.body.style.top = -scrollTop + 'px'
    },
    beforeClose: function() {
      document.body.classList.remove(bodyCls)
      // scrollTop lost after set position:fixed, restore it back.
      document.scrollingElement.scrollTop = scrollTop
    }
  };
})('no-scroll')

const onScroll = () => {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.x-header').addClass('is-scrolled')
    } else {
      $('.x-header').removeClass('is-scrolled')
    }

  });
}

const menuFn = () => {
  $('.x-menu').click(function (e) {
    e.stopPropagation()
    if(!$('body').hasClass('no-scroll')) {
      slidebarFixed.afterOpen()
    } else {
      slidebarFixed.beforeClose()
    }
    $(this).toggleClass('menu-close')
    $('.x-header').toggleClass('header-slide')
    // $('body').toggleClass('no-scroll')
  })
}

const orientationSliderFn = () => {
  const changeClass = (param) => {
    if(!param) {
      $('.nav-slider-wrap').addClass('nav-slider-Sh')
    } else {
      $('.nav-slider-wrap').removeClass('nav-slider-Sh')
    }
  }

  changeClass(!isHSFn())

  window.addEventListener('orientationchange', () => {
    changeClass(isHSFn())
  })
}

const bind = () => {
  onScroll();
  if(isSP) {
    menuFn();
  }

  orientationSliderFn()
}

export default {
  bind
}