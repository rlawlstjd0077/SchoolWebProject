var temp;

﻿$(function(){
	$(window).scroll(function(){
		var val = Math.floor($(window).scrollTop() / 1000);
		console.log("temp : " + temp + "val : " + val)
		switch(val){
			case 0 :
				if(!(val == temp)){
					console.log("first image");
					$(".main_bg").stop().fadeOut('slow');
					$("#area1").stop().fadeIn("slow");
				}
				break;
			case 1 :
				if(!(val == temp)){
					console.log("second image");
					$(".main_bg").stop().fadeOut('slow');
					$("#area2").stop().fadeIn("slow");
				}
				break;
			case 2 :
				if(!(val == temp)){
					console.log("third image");
					$(".main_bg").stop().fadeOut('slow');
					$("#area3").stop().fadeIn("slow");
				}
				break;
			case 3 :
				if(!(val == temp)){
					console.log("fourth image");
					$(".main_bg").stop().fadeOut('slow');
					$("#area4").stop(.fadeIn("slow");
				}
				break;
		}
		temp = val;
	});
});
