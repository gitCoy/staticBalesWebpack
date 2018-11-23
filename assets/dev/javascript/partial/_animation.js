const scroll = () => {
    const width =window.innerWidth;
    var $scroll = $('.scroll'),$scrollLeft = $('.scroll-left'),$scrollRight = $('.scroll-right'),
          $scrollDelay=$('.scroll-delay'),window_scroll_top;
    var bind = function () {
        $(window).scroll(function () {
            animation();
        });
        // document.addEventListener('touchmove', animation)
        // document.addEventListener('scroll', animation)
    };
   
    var animation = function () {
        window_scroll_top = $(window).scrollTop();
        
        // $scrollLeft.each(function () {
        //     if (window_scroll_top + window.innerHeight >= ($(this).offset().top)+200) {
        //         $(this).addClass('is_scoped');
        //     }
        // });
        // $scrollRight.each(function () {
        //     if (window_scroll_top + window.innerHeight >= ($(this).offset().top)+200) {
        //         $(this).addClass('is_scoped');
        //     }
        // });
        // $scroll.each(function () {
        //     if (window_scroll_top + window.innerHeight >= ($(this).offset().top) +200){
        //         $(this).addClass('is_scoped');
        //     }
        // });
        if(width<=800){
            $scrollDelay.each(function () {
                if (window_scroll_top + window.innerHeight >= ($(this).offset().top) +100){
                    $(this).addClass('is_scoped');
                }
            });

            $scrollLeft.each(function () {
                if (window_scroll_top + window.innerHeight >= ($(this).offset().top)+100) {
                    $(this).addClass('is_scoped');
                }
            });
            $scrollRight.each(function () {
                if (window_scroll_top + window.innerHeight >= ($(this).offset().top)+100) {
                    $(this).addClass('is_scoped');
                }
            });
            $scroll.each(function () {
                if (window_scroll_top + window.innerHeight >= ($(this).offset().top) +50){
                    $(this).addClass('is_scoped');
                }
            });
        }else
        {
            $scrollLeft.each(function () {
                if (window_scroll_top + window.innerHeight >= ($(this).offset().top)+200) {
                    $(this).addClass('is_scoped');
                }
            });
            $scrollRight.each(function () {
                if (window_scroll_top + window.innerHeight >= ($(this).offset().top)+200) {
                    $(this).addClass('is_scoped');
                }
            });
            $scroll.each(function () {
                if (window_scroll_top + window.innerHeight >= ($(this).offset().top) +200){
                    $(this).addClass('is_scoped');
                }
            });
        }
        
    };
    bind();
    animation();
  }

  const scrollfy = () => {
        var current;
        let is_open = true;
        const width = document.body.clientWidth;
       
        if(width<=800)
        {
            $(function(){
                $.scrollify({
                    section:".box",
                    // overflowScroll:false,
                     setHeights:false,
                    // scrollable:true,
                    // scrollbars:true,
                    // touchScroll:true,
                    before:function(i,box){
                        current = i;
                    },
                    after:function(){
                       // console.log(current)
                        if(current>=3)
                        {
                            console.log('setting to false')
                            $.scrollify.disable();
                            is_open = false;
                        }
                        
                            
                    },
                });
                $(window).scroll(function () {
                 //   const height = (window.innerHeight)*3;
                    const window_scroll_top = $(window).scrollTop();
                  
                    if(!is_open)
                    {
                        if((window.innerHeight)*3>window_scroll_top)
                        {
                            console.log('setting to true')
                            $.scrollify.enable();
                            is_open = true;
                        }
                    }else
                    {
                        if((window.innerHeight)*3<window_scroll_top)
                        {
                            console.log('setting to false')
                            $.scrollify.disable();
                            is_open = false;
                        }
                    }
                    
                });
                // console.log('in');
                // $(window).on('resize',function(){
                //     console.log(current)
                //     if(current===3)
                //     {
                //         $.scrollify.disable();
                //     }
                //     else
                //     {
                //         $.scrollify.enable();
                //     }
                //     $.scrollify.update();
                //     console.log('in');
                // });
            });	
        }
       
  }

  const addDelay = ()=>{
    const width = document.body.clientWidth;
    if(width<=800)
    {
        $('.add-delay').css('transition-delay','300ms');
    }
  }
  

  const addOrRemoveBG =() =>{
      const width = window.innerWidth;
    const height =window.innerHeight;
    if(width<813)
    {
        $(window).scroll(function () {
            const height = (window.innerHeight)*4;
            const window_scroll_top = $(window).scrollTop();
            if(window_scroll_top>height)
            {
                $('.banner-wrap').addClass('banner-wrap-none');
            }else
            {
                 $('.banner-wrap').removeClass('banner-wrap-none');
            } 
        })
    }
    
  }

  const init = () => {
    scroll();
    addOrRemoveBG();
    // scrollfy();
    //addDelay();
  }
  const bind = () => {

  }
  
  export default {
    bind,
    init
  }