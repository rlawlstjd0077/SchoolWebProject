$(function(){
  $(".image_area").show();
  $(".icons>p").hide();

  var n = 0;
  while("nav>ul>li").each(function(){
    n++;
    if($("nav>ul>li.menu"+n).hasClass("on")){
      $(".icons").find(".icons" + n).show();
    };
  });
});
