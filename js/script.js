(function($){
    $.fn.extend({ 
        
        parallaxElement: function(options) {


            var defaults = {
                parallaxSpeed: 1,
                parallaxRatio: 24
            }

            var options =  $.extend(defaults, options);

            return this.each(function() {
                var opts = options,
                    parallaxEl = $(this),
                    parallaxSpeedData = parallaxEl.attr('data-parallax-speed');                

                if (typeof parallaxSpeed !== typeof undefined && parallaxSpeed !== false) {
                    var durationStyle = [
                        'transition-duration: ' + parallaxSpeedData + 's',
                        '-webkit-transition-duration: ' + parallaxSpeedData + 's',
                        '-moz-transition-duration: ' + parallaxSpeedData + 's'
                    ].join(';');
                }else {
                    var durationStyle = [
                        'transition-duration: ' + opts.parallaxSpeed + 's',
                        '-webkit-transition-duration: ' + opts.parallaxSpeed + 's',
                        '-moz-transition-duration: ' + opts.parallaxSpeed + 's'
                    ].join(';');
                }

                var parallaxRatioData = parallaxEl.attr('data-parallax-ratio');
                

                $(window).scroll(function(){
                    var offsetParallaxEl = parallaxEl.offset().top,
                        offsetDelta = offsetParallaxEl - $(window).height(),
                        wScroll = $(this).scrollTop();

                    if (typeof parallaxRatioData !== typeof undefined && parallaxRatioData !== false) {
                        var translateYStyle = [
                            durationStyle,
                            'transform: translateY(' + (-(wScroll - offsetDelta)/parallaxRatioData) + 'px)',
                            '-webkit-transform: translateY(' + (-(wScroll - offsetDelta)/parallaxRatioData) + 'px)',
                            '-moz-transform: translateY(' + (-(wScroll - offsetDelta)/parallaxRatioData) + 'px)'
                        ].join(';');
                    }else {
                        var translateYStyle = [
                            durationStyle,
                            'transform: translateY(' + (-(wScroll - offsetDelta)/opts.parallaxRatio) + 'px)',
                            '-webkit-transform: translateY(' + (-(wScroll - offsetDelta)/opts.parallaxRatio) + 'px)',
                            '-moz-transform: translateY(' + (-(wScroll - offsetDelta)/opts.parallaxRatio) + 'px)'
                        ].join(';');
                    }

                    
                   


                    if (wScroll > offsetDelta) {         
                        parallaxEl.attr('style', translateYStyle);
                    }

                });
            
            });
        }
    });
    
})(jQuery);



$(document).ready(function(){
	
		$('.parallax-el').parallaxElement({
      parallaxRatio: 24, //default is 24, The larger the value, the amplitude of movement of objects as small
      parallaxSpeed: 0.9 // default is 1, The larger the number, the slower moving objects
    });
		
});