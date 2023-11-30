$(function(){
    // 메인 슬라이드 
    var swiper = new Swiper(".main_swiper", {
        autoplay :{
            delay : 1500,
            disableOnInteraction :false,
        },
        pagination: {
            el: ".pagination",
        },
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
    });

     // 스와이퍼 재생 정지 버튼
    $(".playpause").click(function(){
        if (swiper.autoplay.running) {
            // 스와이퍼 정지
            swiper.autoplay.stop();
            $(".play").css('display','flex');
            $(".stop").css('display','none');
        } else {
            // 스와이퍼 재생
            swiper.autoplay.start();
            $(".play").css('display','none');
            $(".stop").css('display','flex');
        }
    })

    // scrollmagic
    var ctrl = new ScrollMagic.Controller();

// Create scenes in jQuery each() loop
// $("section").each(function(i) {
//   var inner = $(this).find(".inner");
//   var outer = $(this).find(".outer");
//   var tl = new TimelineMax();
  
//   tl.from(outer, 0.25, { scaleX: 0 });
//   tl.from(inner, 0.65, { yPercent: 100, ease: Back.easeOut });
  
//   new ScrollMagic.Scene({
//     triggerElement: this,
//     triggerHook: 0.15
//   })
//     .setTween(tl)
//     .addIndicators({
//       colorTrigger: "white",
//       colorStart: "white",
//       colorEnd: "white",
//       indent: 40
//     })
//     .addTo(ctrl);

//});

    //보도자료 슬라이드 
    var news_swiper = new Swiper(".news_slide", {
        slidesPerView: 3,   
        spaceBetween: 40, 
        navigation: {
            nextEl: ".news_next",
            prevEl: ".news_prev",
        },
        pagination: {
            el: ".news_pagination",
        },
        
    });
})