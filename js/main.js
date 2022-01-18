


/* Nav */
$(".gnb>li").hover(function(){
    $(this).children("ul").stop().slideToggle(300)
});



/* sec02 click */
 $(".Images_click>div>img").click(function(){
    let imgSrc = $(this).attr("src");
    $(".Img_big>img").attr("src", imgSrc);
})




/* scroll event header */

$(window).scroll(function(){
    let scroll_top = $(this).scrollTop();

    if(scroll_top <= 300){
        $("#header").css({"background":"#fff"})
        $(".logo>img").css({"filter":"none"})
        $(".gnb>li>a").css({"color":"var(--main-color)"})
    }
    if(scroll_top >= 300){
        $("#header").css({"background":"green"})
        $(".logo>img").css({"filter":"brightness(0) invert(1)"})
        $(".gnb>li>a").css({"color":"var(--color-white)"})
    }
});