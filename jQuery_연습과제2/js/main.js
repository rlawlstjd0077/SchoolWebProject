var $temp;
$(function(){
  $("nav ul>li").find("ul").stop().slideUp();
  $("nav ul>li").click(
    function(){
      var $this = $(this).find("ul");

      if($this.hasClass("seleted")){
        $this.stop().slideUp();
        $this.removeClass("seleted");
      }else{
        $this.removeClass("seleted");
        $this.stop().slideUp();
        $this.stop().slideDown();
        $this.addClass("seleted");
      }
    }
  );
	// $("nav ul>li").hover(
	// 	function(){
	// 		$(this).find("ul").stop().slideDown();
	// 	},
	// 	function(){
	// 		$(this).find("ul").stop().slideUp();
	// 	}
	// );
});
