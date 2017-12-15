function selectStyle(mark){
    if($(".slide1").is('.swiper-slide-active')){
        $(".swiper-slide-active img").attr("src","img/lu"+mark+".png");
    }else if($(".slide2").is('.swiper-slide-active')){
        $(".swiper-slide-active img").attr("src","img/xueren"+mark+".png");
    }else if($(".slide3").is('.swiper-slide-active')){
        $(".swiper-slide-active img").attr("src","img/shengdan"+mark+".png");
    }else if($(".slide4").is('.swiper-slide-active')){
        $(".swiper-slide-active img").attr("src","img/bkq"+mark+".png");
    }else if($(".slide5").is('.swiper-slide-active')){
        $(".swiper-slide-active img").attr("src","img/kulou"+mark+".png");
    }
   sessionStorage.mark = mark;
}
$(document).ready(function(){
    $(".spinner").hide();
    $(".main").show();
var swiper = new Swiper('.swiper-container', {//创建个swiper
        slidesPerView: 'auto', //设置slider容器能够同时显示的slides数量,'auto'则自动根据slides的宽度来设定数量。
        centeredSlides:!0,
        watchSlidesProgress:!0,
        pagination:".swiper-pagination",
        paginationClickable:!0,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        mousewheelControl: true,//开启鼠标控制，如果只针对移动端，可以去掉，加上方便在电脑调试。
onProgress:function(a){
    var b,c,d;
    for(b=0;b<a.slides.length;b++)c=a.slides[b],d=c.progress,scale=1-Math.min(Math.abs(.2*d),1),es=c.style,es.opacity=1-Math.min(Math.abs(d/2),1),es.webkitTransform=es.MsTransform=es.msTransform=es.MozTransform=es.OTransform=es.transform="translate3d(0px,0,"+-Math.abs(150*d)+"px )"
    },onSetTransition:function(a,b){
        for(var c=0;c<a.slides.length;c++)es=a.slides[c].style,es.webkitTransitionDuration=es.MsTransitionDuration=es.msTransitionDuration=es.MozTransitionDuration=es.OTransitionDuration=es.transitionDuration=b+"ms"}});

sessionStorage.mark = 1;

$(".over-button").click(function(){
        if($(".slide1").is('.swiper-slide-active')){
             $(".ceng img").attr("src","img/ceng-lu"+sessionStorage.mark+".png");
             $(".ceng").removeClass("ceng-dh2").addClass("ceng-dh");
        }else if($(".slide2").is('.swiper-slide-active')){
           $(".ceng img").attr("src","img/ceng-xueren"+sessionStorage.mark+".png");
             $(".ceng").removeClass("ceng-dh2").addClass("ceng-dh");
        }else if($(".slide3").is('.swiper-slide-active')){
            $(".ceng img").attr("src","img/ceng-shengdan"+sessionStorage.mark+".png");
             $(".ceng").removeClass("ceng-dh2").addClass("ceng-dh");
        }else if($(".slide4").is('.swiper-slide-active')){
           $(".ceng img").attr("src","img/ceng-bkq"+sessionStorage.mark+".png");
             $(".ceng").removeClass("ceng-dh2").addClass("ceng-dh");
        }else if($(".slide5").is('.swiper-slide-active')){
            $(".ceng img").attr("src","img/ceng-kulou"+sessionStorage.mark+".png");
             $(".ceng").removeClass("ceng-dh2").addClass("ceng-dh");
        }
})
$(".ceng").click(function(){
     $(".ceng").removeClass("ceng-dh1").addClass("ceng-dh2");
})
});
