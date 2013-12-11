(function($,sr){

  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }

  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');


function sliderResize(){
    $('.appsblock .apps .slider').height($('.slide.active .slide-wrapper').height());
}

$(document).ready(function(){
 
//===== Apps slider script =====

    var angle = 0;

    $('.appsblock .apps .slider .slide:odd').addClass('odd');
    var slideCount = $('.slider > .rotator > .slide').length;

    $('.slider .navigation-right').click(function(){
        if ($(this).parent().find('.active').is(':last-child') == false) {
            angle = angle - 180;
            var angledeg = 'rotateY(' + angle + 'deg)';

            $(this).parent().find('.rotator').css({
                "-webkit-transform": angledeg,
                "-moz-transform": angledeg,
                "-o-transform": angledeg,
                "-ms-transform": angledeg,
                "transform": angledeg
            });
            $(this).parent().find('.active').next().toggleClass('active');
            $(this).parent().find('.active:first').toggleClass('active');
        }
        else {
            angle = 0;
            var angledeg = 'rotateY(' + angle + 'deg)';

            $(this).parent().find('.rotator').css({
                "-webkit-transform": angledeg,
                "-moz-transform": angledeg,
                "-o-transform": angledeg,
                "-ms-transform": angledeg,
                "transform": angledeg
            });
            $(this).parent().find('.active:last').toggleClass('active');
            $(this).parent().find('.slide').css("opacity","1").delay(250).queue(function(){
                $(this).parent().find('.slide').removeAttr('style').stop();
            });
            $(this).parent().find('.slide:first').toggleClass('active');
        }
        $('.appsblock .apps .slider').height($('.slide.active .slide-wrapper').height());
    });

    $('.slider .navigation-left').click(function(){

        if ($(this).parent().find('.active').is(':first-child') == false) {
            angle = angle + 180;
            var angledeg = 'rotateY(' + angle + 'deg)';

            $(this).parent().find('.rotator').css({
                "-webkit-transform": angledeg,
                "-moz-transform": angledeg,
                "-o-transform": angledeg,
                "-ms-transform": angledeg,
                "transform": angledeg
            });
            $(this).parent().find('.active').prev().toggleClass('active');
            $(this).parent().find('.active:last').toggleClass('active');
        }
        else {
            angle = -180 * slideCount + 180;
            var angledeg = 'rotateY(' + angle + 'deg)';

            $(this).parent().find('.rotator').css({
                "-webkit-transform": angledeg,
                "-moz-transform": angledeg,
                "-o-transform": angledeg,
                "-ms-transform": angledeg,
                "transform": angledeg
            });
            $(this).parent().find('.active:first').toggleClass('active');
            $(this).parent().find('.slide').css("opacity","1").delay(250).queue(function(){
                $(this).parent().find('.slide').removeAttr('style').stop();
            });
            $(this).parent().find('.slide:last').toggleClass('active');

        }
        $('.appsblock .apps .slider').height($('.slide.active .slide-wrapper').height());
    });

    $('.slide:first').addClass("active");
    $('.appsblock .apps .slider').height($('.slide.active .slide-wrapper').height());



//===== "Send mail" button =====
    $('.mailbutton').click(function(){
        $('.contactsblock .input-container').toggleClass('active');
    });

    hDelay = 500;

//====== Twitter messages rotator ======
        setInterval(function(){
            $('.twitterblock .messages-container').find('.active').addClass('post-active');
            $('.twitterblock .messages-container').find('.active').removeClass('active');
            $('.twitterblock .messages-container').find('.post-active').next().addClass('active');

            if($('.twitterblock .message:last').is('.post-active')){
                $('.twitterblock .message:first').addClass('active');
            };

            $('.twitterblock .messages-container').find('.post-active').removeClass('post-active');

        }, 5000);
        
        $('#picture-home').delay(hDelay).queue(function(){
            $(this).addClass('active');
        });
        $('#description-home').delay(hDelay - 500).queue(function(){$(this).addClass('active')});


    

//====== Other ======      


    $('a[href*=#]').bind("click", function(e){
        var anchor = $(this);
        var locate =  $.attr(this, 'href').substr($.attr(this, 'href').indexOf('#')+1);
        $('html, body').stop().animate({
            scrollTop: $('[id="' + locate + '"]').offset().top
        }, 800, "swing");

        $(this).delay(800).queue(function(){ window.location.hash = locate; });
        e.preventDefault();
    });

    $(window).smartresize(function(){
        sliderResize();
    });

});