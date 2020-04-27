(function(app) { 
	'use strict'; 
	
	var Animation = function() {};
  
	Animation.prototype.init = function() {
        Animation.prototype.inView();
        Animation.prototype.scrollDownAnimation();
        Animation.prototype.nextPageAnimation();
	};

    Animation.prototype.inView = function() {
        $('.animated').one('inview', function(event, isInView) {
            var _this = $(this);
            var animatedChildren = _this.find('.animated-child');
            if(isInView){
                if(animatedChildren.length > 0) {
                    TweenMax.staggerTo(animatedChildren, 0.4, { y: 0, opacity: 1, delay: 0.1}, 0.2)
                }
            }
        });
    }

    Animation.prototype.scrollDownAnimation = function() {
        $(".register-link").on("click", function(e){
            e.preventDefault();
            var position = $("#register").offset().top;
            $('body,html').animate({ scrollTop: position}, 800);
        })
        $(".item").map(function(){
            var _this = $(this);

            _this.on("click", function(){
                if($(window).outerWidth() < 767){
                    $('body,html').animate({ scrollTop: $(window).outerHeight()/ 1.1}, 800);
                }

            })
        })
    }

    Animation.prototype.nextPageAnimation = function() {
        var p1 =  $(".page-one");
        var p2 = $(".page-two")
        var tl = new TimelineMax();
        $(".btn-link").on("click" , function(){
            
            tl.to(p1 , 0.4 , {y : -999, opacity: 0, ease: Expo.easeIn})
              .to(p1, 0 , {display: "none"})
              .to("body", 0.4 , {y: 0})
              .to(p2 , 0.4 , {display: "block" , y: 0 , opacity: 1 , ease: Expo.easeOut, onComplete: function(){
            
              }})

        })
        $(".btn-goback").on("click" , function(){
            
            tl.to(p2 , 0.4 , {y : 999, opacity: 0, ease: Expo.easeIn})
              .to(p2, 0 , {display: "none"})
              .to("body", 0.4 , {y: 0})
              .to(p1 , 0.4 , {display: "block" , y: 0 , opacity: 1 , ease: Expo.easeOut, onComplete: function(){
            
              }})

        })
    }

    app.Animation = Animation;

    app.ready(function () {
        console.log('Animation Ready');
        Animation.prototype.init()
    })

    app.onLoad(function(){
        console.log('Animation Load');
        
    })


})(window.app);