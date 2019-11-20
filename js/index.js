$(function () {
    $("#banner .describe p.title").addClass("animate")
    $("#banner .describe p.title-eng").addClass("animate")
  document.onscroll = function () {
    console.log(window.pageYOffset);
    // addAnimate(-1000, "#banner .describe p.title", "animate")
    // addAnimate(-1, "#banner .describe .title-eng", "animate")

    //第一层
    addAnimate(100, "#reason .advantage", "animate")
    addAnimate(100, "#reason .authentication", "animate")

    //第二层
    addAnimate(1100, "#customized header .advantage", "animate")
    addAnimate(1100, "#customized .content", "animate")
    addAnimate(1100, "#customized .wrap .img-content .item-content", "animate")

    //第三层
    addAnimate(1850, "#effect .effect-info .effect-item .advantage", "animate")
    addAnimate(1850, "#effect .bg-item", "animate")
    addAnimate(1850, "#effect  .Box", "animate")
    addAnimate(1850, "#effect .tabbar", "animate")
    addAnimate(1850, "#effect .tab.wrap", "animate")

    //第四层
    addAnimate(2700, "#effect .product-box  .title", "animate")
    addAnimate(2700, "#effect  .six-item", "animate")
    addAnimate(2700, "#effect .product-box .lines", "animate")
    addAnimate(2700, "#effect .banner-box", "animate")

    //第五层
    addAnimate(3400, "#effect .news  .title", "animate")
    addAnimate(3400, "#effect .news .six-item", "animate")
    addAnimate(3400, "#effect .news  .lines", "animate")
    addAnimate(3400, "#effect .news  .news-item", "animate")

    //第六层
    addAnimate(4100, "#infoBox .info.wrap .info-item", "animate")
  }
})

function addAnimate(y, ele, amt) {
  if (window.pageYOffset > y) {
    $(ele).addClass(amt)
  }
}