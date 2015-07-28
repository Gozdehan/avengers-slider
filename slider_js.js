$(function(){
	$(".slider #pictures li").hide();
	$(".slider #pictures li:first").show();
	$(".slider #buttons li:first").addClass("aktif");
	$(".slider #buttons li").click(function(){

		var index=$(this).index();
		slider=index;
		$(".slider #pictures li").hide();
		$(".slider #pictures li:eq("+index+")").fadeIn("slow");
		$(".slider #buttons li").removeClass("aktif");
		$(".slider #buttons li:eq("+index+")").addClass("aktif");
		return false
	})
	slider = 0;
	zaman=1000;
	$.Don = function(e){
	$(".slider #pictures li").hide();
	$(".slider #buttons li").removeClass("aktif");
	if(slider <e-1){
		slider++;

		$(".slider #pictures li:eq("+slider+")").fadeIn("slow");
		$(".slider #buttons li:eq("+slider+")").addClass("aktif");
	}else{slider=0;
		$(".slider #pictures li:first").fadeIn("slow");
		$(".slider #buttons li:first").addClass("aktif");
	}
	}
len=$(".slider #pictures li").size();
inter = setInterval("$.Don("+len+")",zaman);
$(".slider").hover(function(){
	clearInterval(inter);
},function(){inter=setInterval("$.Don("+len+")",zaman);})



});