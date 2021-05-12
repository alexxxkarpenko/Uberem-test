"use strict";

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
                isMobile.Android() ||
                isMobile.BlackBerry() ||
                isMobile.iOS() ||
                isMobile.Opera() ||
                isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');
}

const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

$(function () {
    $(document).scroll(function () {
        let $header = $(".header__container");
        if($(document).scrollTop() >= 200){
        $header.toggleClass('scrolled', $(this).scrollTop() > $header.height());
      }  else if ( $(document).scrollTop() >= 100 ) {
        $header.removeClass('scrolled', $(this).scrollTop() > $header.height());
      }
    });
});


// ------------------------------------------
$('.content_button').mousemove(function (e) {
 
    var i = $('.circle'),
        s = e.pageX - i.offset().left,
        o = e.pageY - i.offset().top;
    
    TweenMax.to($('.circle'), .3, {
      x: (s - i.width() / 2) / i.width() * 50,
      y: (o - i.height() / 2) / i.height() * 50,
      scale: 1.2,
      ease: Power2.easeOut
    })
    
    TweenMax.to($('.text'), .3, {
      x: (s - i.width() / 2) / i.width() * 80,
      y: (o - i.height() / 2) / i.height() * 80,
      ease: Power2.easeOut
    })
    
});
  
$('.content_button').mouseleave(function (e) {
   
    var i = $('.circle'),
        s = e.pageX - i.offset().left,
        o = e.pageY - i.offset().top;
    TweenMax.to($('.circle'), .3, {
      x: 0,
      y: 0,
      scale: 1,
      ease: Power2.easeOut
    })
    
    TweenMax.to($('.text'), .3, {
      x: 0,
      y: 0,
      ease: Power2.easeOut
    })
    
});
//   ---------------------------------
