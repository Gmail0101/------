


/* Nav */
$(function(){
    $(".gnb>li").on({
        mouseover : function(){
            $(".submenu").stop().show();
            $("#menu").css({"height":"410px"})


        },
        mouseleave : function(){
            $(".submenu").stop().hide();
            $("#menu").css({"height":"90px"})
        }
    })

    /* 사이드 메뉴 */
    $(".menuBar").click(function(){
        $(".sidemenu").animate({"right":"0%"}).show();
    });

    $(".side-close").click(function(){
        $(".sidemenu").css({"right":"-50%"}).hide();
    });
})


/* 사이드메뉴 수정해야함 */
$(function(){
    $(".side>li").click(function(){
        $(this).children("ul").stop().slideToggle(300)
        if($(".side-arr").hasClass("on")){
            $(".side-arr").css({"transform":"rotate(0deg)"})
            $(".side-arr").removeClass("on");
            $(".side-arr").addClass("off");
        } else if($(".side-arr").hasClass("off")) {
            $(".side-arr").css({"transform":"rotate(90deg)"})
            $(".side-arr").addClass("on");
        }
    });
});

