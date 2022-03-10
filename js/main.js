


/* Nav */
$(".gnb>li").hover(function(){
    $(this).children("ul").stop().slideToggle(300)
});

$(".menu-list").click(function(){
    if($(this).hasClass("off")){
        $("#header").css({"height":"auto"})     /* header auto 해서 세로크기를 자동으로 */
        $(".gnb").css({
            "float":"none",   /* float 지움 */
            "display":"block",  /* show  */
        })
        $(".gnb>li").css({
            "float":"none",   /* float 지움 */
            "width":"100%"  
        })
        $(this).css({"display":"block"});
        $(this).removeClass("off");
        $(this).addClass("active");
    } else if($(this).hasClass("active")){
        $("#header").css({"height":"10vh"})
        $(".gnb").css({
            "float":"right",
            "display":"none",
        })
        $(".gnb>li").css({
            "float":"left",
            "width":"130px"  
        })
        $(this).css({"display":"none"});
        $(this).removeClass("active");
        $(this).addClass("off");
    }
})





/* sec02 click */
 $(".Images_click>div>img").click(function(){
    let imgSrc = $(this).attr("src");   /* 내 주소 읽어옴 */
    // let imgModi = $(".Img_big>img");
    let imgAttr01 = './images/main/sec02_IMG_01.jpg';
    let imgAttr02 = './images/main/sec02_IMG_02.jpg';
    let imgAttr03 = './images/main/sec02_IMG_03.jpg';


    $(".Img_big>img").attr("src", imgSrc);  /* 읽어온 주소를 다른 img src 에 대입 */

    /* IMG의 주소를 읽어와 주소를 변경하고 해당주소와 변경된 이미지가 같을경우 설명하는 글 또한 변경 */
    if(imgSrc == imgAttr01){
        $(".content_title>h2").text("의림지 욕추폭포");
    }
    if(imgSrc == imgAttr02){
        $(".content_title>h2").text("월악산");
    }
    if(imgSrc == imgAttr03){
        $(".content_title>h2").text("송계계곡");
    }
})


/* scroll event header */

// $(window).scroll(function(){
//     let scroll_top = $(this).scrollTop();   /* window 스크롤 */

//     if(scroll_top <= 300){
//         $("#header").css({"background":"#fff"})
//         $(".logo>img").css({"filter":"none"})
//         $(".gnb>li>a").css({"color":"var(--main-color)"})
//     }
//     if(scroll_top >= 300){
//         $(".logo>img").css({"filter":"brightness(0) invert(1)"})
//         $(".gnb>li>a").css({"color":"var(--color-white)"})
//     }
// });
