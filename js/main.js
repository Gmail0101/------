


/* Nav */
$(".gnb>li").hover(function(){
    $(this).children("ul").stop().slideToggle(300)
});



/* sec02 click */
 $(".Images_click>ul>li>img").click(function(){
    let imgSrc = $(this).attr("src");
    $(".Img_big>img").attr("src", imgSrc);
})
