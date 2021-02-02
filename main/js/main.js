  

/*----------------------------------------------------------------------*/
/* =  Preloader
/*----------------------------------------------------------------------*/
$(window).on('load', function () {

  TweenLite.to($('.loading .txt'), .4, {autoAlpha: 1, y:0});
  TweenLite.to($('.progress'), .5, {autoAlpha: 1, delay:.4});
  TweenLite.to($('.bar-loading'), 0.7, {width: '100%', delay:1 });

  TweenLite.to($('.loading'), 0.7, {y:-100, autoAlpha:0, delay:1.7 });
  TweenLite.to($('#loader'), 3, {y:-3000, delay:2, ease:'easeOutExpo' } );
  TweenLite.from($('.hero'), 1, {y:100, delay:2, ease:'easeOutExpo' } );
  
  setTimeout(function(){ window.scrollTo(0, 0); }, 2000);
  setTimeout(function(){ $('#loader').remove(); }, 3000);






});


 
 $(document).ready( function() {

  function ajaxLoad(){
    magnetizeFunc();
    letter_slider();
    allworks();
    PortfolioGrids();
    lightbox();
    map();
    wideslider();
    wheelslider();
    contactform();
    cursorMoveFunc();
    others();
    datascroll();
    header_options();


  $(window).resize(others);

  }

  ajaxLoad();
  
 


function datascroll(){
  if ($('.data-scroll').length) {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('.data-scroll'),
      smooth: true,
      getDirection: !0,
  });
        

    $('.uptotop').on('click', function(){
      const target = document.querySelector('.data-scroll');
      scroll.scrollTo(target);
    });

    $('.uptotop').on('click', function(){
      const target = document.querySelector('.data-scroll');
      scroll.scrollTo(target);
    });


  $('.section-down-arrow').on("click", function(e){
    const target = document.querySelector('.down-target');
    scroll.scrollTo(target);
    }); 

    $(".portfolio-filter a").on("click", function() {

      const target = document.querySelector('.portfolio');
      scroll.update();
    }); 


    if($('.full-image.hero').length ){
      $('header').addClass('dark');
    }else{
      $('header').removeClass('dark');
      }

    scroll.on('scroll', function(t){

     if(t.direction === 'down') {
      TweenMax.to("header",.3, {y:-100});
     }else{
      TweenMax.to("header",.3, {y:0});
     }

     hero_height = $('.hero').outerHeight(); 
     
     
     if(t.scroll.y >= 500 ){
       $('header').addClass('fixhead');
     }else{
      $('header').removeClass('fixhead');
     }
  
     if($('.full-image.hero').length ){
        if(t.scroll.y >= 500 ){
          $('header').removeClass('dark');
        }else{
        $('header').addClass('dark');
        }
    }


    });
  





  
}

}  


  var options = {
    duration: 2000, 
    prefetch: true,
    cacheLength: 0,
    onStart: {
      duration: 1000, // Duration of our animation
      render: function ($container) {
        // Add your CSS animation reversing class
        $container.addClass('is-exiting');
   $(".page-overlay").addClass("from-bottom");

        // Restart your animation
        smoothState.restartCSSAnimations();
      }
    },
    onReady: {
      duration: 0,
      render: function ($container, $newContent) {
        // Remove your CSS animation reversing class
        $container.removeClass('is-exiting');
          setTimeout( function(){
            $(".page-overlay").addClass("from-bottom-end");
            setTimeout( function(){
              $(".page-overlay").removeClass("from-bottom");
              $(".page-overlay").removeClass("from-bottom-end");
            } , 800 );
          } , 300 );

        // Inject the new content
        $container.html($newContent);
        ajaxLoad();
      }
    }
  },
  smoothState = $('main').smoothState(options).data('smoothState');



 $("body").on('click','[data-type="ajax-load"]', function(e) {
  e.preventDefault();
  var content = $('#main').smoothState().data('smoothState');
  var href = $(this).attr('href');
  content.load(href);
});





/*----------------------------------------------------------------------*/
/*   LETTER SLIDER
/*----------------------------------------------------------------------*/

function letter_slider() {
    if ($('#letter-slider').length) {
		$('html').addClass('showcase');
		var lnx = $('.swiper-slide .slide-content .title');
		for (let i = 0; i < lnx.length; i++) {
			var txt = lnx[i].textContent.charAt(0);
			$('.bullets ul').append('<li> <span data-cursor-type="medium">' + txt + '\n' + '</span></li>');
		}

		$('.bullets ul li:first-child, .slider-images ul li:first-child').addClass('focus');

		var swiper = new Swiper('.swiper-container', {
			speed: 1000,
			direction: 'vertical',
			slidesPerView: 'auto',
			simulateTouch: false,
			mousewheel: true,
			on: {
				slideChange: function () {
					var aktifindex = swiper.activeIndex;
					var coord = aktifindex * -55;
					$('.bullets ul li, .slider-images ul li').removeClass('focus');
					$('.bullets ul li:eq(' + aktifindex + '), .slider-images ul li:eq(' + aktifindex + ')').addClass('focus');
                  $('.bullets ul').css('margin-top', coord);
                  // $('.slider-images li video').get(0).pause(); 
                  // $('.slider-images .focus video').get(0).play(); 

                  $('.slider-images').find('video').each(function() {      
                    this.pause();
                  });
                  $('.slider-images .focus').find('video').each(function() {      
                    this.play();
                  });
                  
              },
          },
		});
		$('.bullets ul li').on('click', function () {
			swiper.slideTo($(this).index());
		});
	}else{
		$('html').removeClass('showcase');
  }


    
}



/*----------------------------------------------------------------------*/
/*   WIDE SLIDER
/*----------------------------------------------------------------------*/

function wideslider() {
  if($('#wide-slider').length){
    $('html').addClass('wide-slider');
    var dataAutoplay = $('.swiper-container').data('autoplay');
    var dataautospeed = $('.swiper-container').data('autospeed');
    var swiper = new Swiper('.swiper-container', {
      direction: "horizontal",
      centeredSlides: true,
      slidesPerView: 'auto',
      speed: 1000,
      autoplay:{
        delay: dataautospeed * 1000,
      },
      loop: true,
      mousewheel: true,  
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
          el: '.swiper-pagination',
              clickable: true,
              renderBullet: function (index, className) {
            return '<span class="' + className + '">'+'<div data-cursor-type="medium" class="bullet-outter">' + '<svg data-cursor-type="medium" class="fp-arc-loader" width="20" height="20" viewBox="0 0 20 20">'+
                    '<circle class="path" cx="10" cy="10" r="5.5" fill="none" transform="rotate(-90 10 10)" stroke="#FFF"'+
                    'stroke-opacity="1" stroke-width="2px"></circle>'+
                '<circle  data-cursor-type="medium" cx="10" cy="10" r="3" fill="#FFF"></circle>'+
                    '</svg></div></span>';
            },
      },
      });
      if ( dataAutoplay === false ){ swiper.autoplay.stop(); };
    }
}

  


/*----------------------------------------------------------------------*/
/*   WHEEL SLIDER
/*----------------------------------------------------------------------*/
  
function wheelslider() {
  if($('#wheel-slider').length){
		$('html').addClass('wheel-slider');
		var dataAutoplay = $('.swiper-container').data('autoplay');
		var dataautospeed = $('.swiper-container').data('autospeed');
		var swiper = new Swiper('.swiper-container', {
			effect: 'coverflow',
			centeredSlides: true,
			slidesPerView: 'auto',
			allowTouchMove:true,  
      simulateTouch	:false,
			speed: 1000,
			autoplay:{
				delay: dataautospeed * 1000,
			},
      loop: true,
			mousewheel: true,  
			coverflowEffect: {
				rotate: 0,
				stretch: 0,
				depth: 150,
				modifier: 1,
				slideShadows : true,
			},
		  });
  }
  

$(".slide-content").mouseenter(function(e) {	
  $(this).next().find('video').each(function() {
    $(this).get(0).play();
  });
});

$(".slide-content").mouseleave(function(e) {	
  $(this).next().find('video').each(function() {
    $(this).get(0).pause();
  });
});


}



/*----------------------------------------------------------------------*/
/*   ALL WORKS
/*----------------------------------------------------------------------*/

function allworks() {

	if ( $('.allworks').length ) {

	var main_works = $('.allworks .menu__item').length;
	if ( main_works >= 4) {
		$(".allworks").append( $(".allworks").children().clone());
		$(".allworks").prepend( $(".allworks").children().clone());
	
		if ( main_works <= 5 ){
			$(".allworks").prepend( $(".allworks").children().clone());
		}
		
		var scrollBottom = $('.allworks .menu__item:eq(' + main_works + ')').offset().top;
		$('.allworks').scrollTop(scrollBottom); 
		
		$('.allworks').on("scroll", function(event) {
			var windowst = $('.allworks').scrollTop();
			var works_height = ($('.allworks .menu__item').height() * main_works ) * 2 ;
			if( windowst > works_height ){	
				$('.allworks').scrollTop(100); 	
			}else if( windowst == 0  ){
				$('.allworks').scrollTop(scrollBottom - 25); 	
			}
		 });
		} 
  }
  if ( $('.forslide').length ) {   
		
		$('.allworks .menu__item').hover(mouseEnter, mouseLeave);
			function mouseEnter() {
  
        var total_image = $('.forslide.slider-images li').length;
        var list_index = $(this).index() / 2;
        if(list_index >= total_image){
           list_index = list_index % total_image;  console.log('bÃ¼yÃ¼k');
        }else{
          list_index = $(this).index() / 2; console.log('deÄŸil');
        }

      $('.forslide.slider-images li:eq('+ list_index +')').addClass('focus');
      $('.forslide.slider-images li:eq('+ list_index +')').find('video').each(function() {
        $(this).get(0).play();
      });
			};
			function mouseLeave() {
        $('.forslide.slider-images li').removeClass('focus');
        $('.forslide.slider-images li').find('video').each(function() {
          $(this).get(0).pause();
        });
			};

	}
}



/*----------------------------------------------------------------------*/
/*   PORTFOLIO
/*----------------------------------------------------------------------*/
function PortfolioGrids() {
  var $container = $('.masonry'); 
      $container.isotope({
        layoutMode: 'packery',
        itemSelector: '.grid-item',
        gutter:0,
        transitionDuration: "0.5s",
        columnWidth: '.grid-item'
      });
      $('.portfolio-filter ul li a').on("click", function(){
        $(".portfolio-filter ul li a").removeClass("select-cat");
        $(this).addClass("select-cat");        
        var selector = $(this).attr('data-filter');
        $(".masonry").isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
      }
    });
        return false;
    });   

  TweenMax.set(".portfolio-filter", {autoAlpha:0});
    $(".filter-icon").on("click", function() {
    TweenMax.to(".portfolio-filter",.3, {autoAlpha:1});
    TweenMax.staggerFrom(".portfolio-filter ul > li", .5, { y: "50",autoAlpha: 0,ease: Back.easeOut},0.2);
  });
    $(".close-filter,  .portfolio-filter ul li a").on("click", function() { 
        TweenMax.to(".portfolio-filter",.3, {autoAlpha:0, delay:.5});
    });
    $(".portfolio-filter, .portfolio-filter ul li a").on("click", function (event) {
      if (!$(event.target).is(".portfolio-filter ul li a")) {
    TweenMax.to(".portfolio-filter",.3, {autoAlpha:0});
              return false;
          }
  }); 

  $(window).on("scroll", function() {
  var sw =   $(window).scrollTop();
  var bottom_items = $('.filter-icon, .allworks-link.grid-portfolio');
    if ( sw >= 200 ){
      $(bottom_items).addClass("magnetize");
      TweenMax.from(bottom_items,.5, { y:0,autoAlpha:1},1);
    }else{
      $(bottom_items).removeClass("magnetize");
      TweenMax.to(bottom_items,.5, { y:200, autoAlpha:0},1);
    }

  });

// wide or long
$('.grid-item:even').addClass('wide');

  $('.grid-item .portfolio-item').on('mouseenter', function() {
  TweenMax.to('.portfolio-big-title',.5, { y:100, autoAlpha:1},1);

  if ($(this).data('title')) {
    $('.portfolio-big-title .title').html('<span>' + $(this).data('title') + '</span>');
  }

  if ($(this).data('category')) {
    $('.portfolio-big-title .category').html('<span>' + $(this).data('category') + '</span>');
  }

});

$('.grid-item .portfolio-item').on('mouseleave', function() {
  TweenMax.to('.portfolio-big-title',.5, { y:0, autoAlpha:0},1);

});


$(".video-wrapper").mouseenter(function(e) {	
  $(this).find('video').each(function() {
    $(this).get(0).play();
  });
});

$(".video-wrapper").mouseleave(function(e) {	
  $(this).find('video').each(function() {
    $(this).get(0).pause();
  });
});

}



/*----------------------------------------------------------------------*/
/*  CURSOR SETTINGS
/*----------------------------------------------------------------------*/
function cursorMoveFunc() {


  $('.comment-edit-link, .comment-reply-link, .logged-in-as a, .post-password-form input[type="submit"], input[type="password"], .site-menu a').attr("data-cursor-type", "medium");
      var e = $("#cursor");
      function t(t) {
          function n() {
              e.find(".cursor__label").text("")
          }
          TweenMax.to(e, 0, {
              left: t.clientX - e.width() / 2,
              top: t.clientY - e.height() / 2,
          }), "medium" == $(t.target).data("cursor-type") ? (e.removeClass().addClass("is-medium"), n()) : "big" == $(t.target).data("cursor-type") ? "btn-play" == $(t.target).data("cursor-text") ? (e.removeClass().addClass("is-play").addClass("is-big"), n()) : "btn-pause" == $(t.target).data("cursor-text") ? (e.removeClass().addClass("is-pause").addClass("is-big"), n()) : (e.removeClass().addClass("is-view").addClass("is-big"), e.find(".cursor__label").text($(t.target).data("cursor-text"))) : (e.removeClass(), n())
      
        }
      $("body, main, a").css("cursor", "none");
      var n = function() {
        $(window).on("mousemove", t)
      };
      n(), $(window).resize(n)

}
      
    
function magnetizeFunc(){

  if( $(window).width() >= 1024 ) {
    

  $(document).on('mousemove touch', function(e){  
      $('.magnetize').each(function() {
        magnetize(this, e); 
      });
    });
      
      function magnetize(el, e){
        var mX = e.pageX,
            mY = e.pageY;
        const item = $(el);
        
        const customDist = item.data('dist') * 20 || 120;
        const centerX = item.offset().left + (item.width()/2);
        const centerY = item.offset().top + (item.height()/2);
        
        var deltaX = Math.floor((centerX - mX)) * -0.45;
        var deltaY = Math.floor((centerY - mY)) * -0.45;
        
        var distance = calculateDistance(item, mX, mY);
          
        if(distance < customDist){
          TweenMax.to(item, 0.5, {y: deltaY, x: deltaX});
          item.addClass('magnet');
        }
        else {
          TweenMax.to(item, 0.6, {y: 0, x: 0, scale:1});
          item.removeClass('magnet');
        }
      }
      
      function calculateDistance(elem, mouseX, mouseY) {
        return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) + Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)));
      }

    }

}



/*----------------------------------------------------------------------*/
/*  HEADER OPTIONS
/*----------------------------------------------------------------------*/

function header_options(){


  if ($('.right-menu').length) {

  $('<div class="plus" data-cursor-type="medium"><span data-cursor-type="medium"></span><span data-cursor-type="medium"></span></div>').insertAfter('.right-menu nav ul li.hassub a:not("ul li ul li a")');

  $('.hassub .plus').on('click', function () {
    $(this).toggleClass('active');
    $(this).next('ul').slideToggle();
  });
  
  var tl = new TimelineMax({yoyo: false,reversed: true});
  
  tl.pause();
  tl.from('.overlay-bg', 0.1,{display:'none', autoAlpha:0});
  tl.to('.right-menu', .4,{x:0, display:'block'});
  tl.to('header.half-menu .nav-icon span:first-child', 0.2,{width:'90%', rotation:45});
  tl.from('header.half-menu .nav-icon span:last-child', 0.1,{ width:'70%'});
  tl.to('header.half-menu .nav-icon span:last-child', 0.2,{ width:'90%', rotation:-45, y:-6, x:-1});
  tl.staggerFrom('.right-menu nav ul li:not(".hassub ul li"), .right-menu .social li', .4, {y: "40", opacity: 0,  ease: Back.easeOut },0.1);
  tl.from('.bottom-mail', 0.2,{ y:100, autoAlpha:0 }, 1.6);
  $('header.half-menu .nav-icon, .overlay-bg').on('click', function () {
    tl.reversed() ? tl.play():tl.reverse();

    setTimeout(function(){ $('header:not(.darkness header)').toggleClass('active'); }, 500);

  });

  }





}





/*----------------------------------------------------------------------*/
/*  CONTACT FORM
/*----------------------------------------------------------------------*/

function contactform() {
  if( jQuery('#contact-formular').length > 0 ){
    $('#contactform').submit(function(){
        var action = $(this).attr('action');
        $("#message").slideUp(750,function() {
            $('#message').hide();
            $('#submit').attr('disabled','disabled');		
            $.post(action, {
                name: $('#name').val(),
                email: $('#email').val(),
                comments: $('#comments').val()
            },
            function(data){
                document.getElementById('message').innerHTML = data;
                $('#message').slideDown('slow');
                $('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
                $('#submit').removeAttr('disabled');
                if(data.match('success') != null) $('#contactform').slideUp('slow');		
            }
        );		
        });		
        return false;		
    });		
  }
}



/*----------------------------------------------------------------------*/
/*  MAP
/*----------------------------------------------------------------------*/

function map() {
  if ($('.map').length) {
    $('.open-map').on('click', function(){
      TweenMax.to(".map",.3, { autoAlpha:1, display: 'block'});
      TweenMax.to('.overlay-map', 0.2,{display:'block', autoAlpha:1});
    });
          
  
    $('.overlay-map').on('click', function(){
      TweenMax.to(".map",.3, { autoAlpha:0, display: 'none'});
      TweenMax.to('.overlay-map', 0.2,{display:'none', autoAlpha:0});
    });
  }
}




/*----------------------------------------------------------------------*/
/*  MAGNIFIC POPUP
/*----------------------------------------------------------------------*/
function lightbox() {
  if ($('.lightbox').length) {
    $('.lightbox').magnificPopup({
          type:'image',
          gallery:{enabled:true},
          zoom:{enabled: true, duration: 300}
      });
  }
}


  function others(){
    if( $('header.classic-menu').length ){
      $("header.classic-menu nav ul li a:not('header.classic-menu nav ul li ul li a')").hover(function(){
        $('header.classic-menu nav ul li a').not(this).not('header.classic-menu nav ul li ul li a').css("opacity", ".5");
        }, function(){
          $('header.classic-menu nav ul li a').not(this).not('header.classic-menu nav ul li ul li a').css("opacity", "1");
          });
    }

    if( $(window).width() <= 991 ){
      var sub_menu = new TimelineMax({yoyo: false,reversed: true});
      sub_menu.pause();
      sub_menu.from($('header.classic-menu nav ul li').find('ul'), 0.2,{height:'0', autoAlpha:0, display:'none'});
      sub_menu.to($('header.classic-menu nav ul li').find('i'), 0.1,{rotation:180});
  
      $('header.classic-menu nav ul li').on('click', function(){
        sub_menu.reversed() ? sub_menu.play():sub_menu.reverse();
      });
  
     
      var responsive_menu = new TimelineMax({yoyo: false,reversed: true});
      responsive_menu.pause();
      responsive_menu.to('header.classic-menu .close-menu span:first-child', 0.2,{ rotation:45, y:6});
      responsive_menu.to('header.classic-menu .close-menu span:last-child', 0.2,{ width:'100%', rotation:-45});
      responsive_menu.from("header.classic-menu nav", .5, { display: 'none' ,autoAlpha: 0,ease: Back.easeOut},0.2);
      responsive_menu.staggerFrom("header.classic-menu nav ul li:not('header.classic-menu nav ul li ul li')", .6, { y: "50",autoAlpha: 0,ease: Back.easeOut},0.1);
  
      $('header.classic-menu .close-menu').on('click', function(){
        responsive_menu.reversed() ? responsive_menu.play():responsive_menu.reverse();
      });

   

    }

  }

  


}); // document read end 







  