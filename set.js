$(document).ready(function(){
	var i=0;
	var tumgenislik=0;
	var genislik=$('.manset-listesi li').width();
	function animasyon(px){
		$('.ust-ekran').stop(false,false).animate({
			left:-px},1000);
		
		
	}
	var zamanlayici=setInterval(function(){
		tumgenislik=i*genislik;
		if(i==7){
			i=-1;
		}
		animasyon(tumgenislik);
		i++;
	},2000);


$(".ul-kapsam a").click(function(){
	clearInterval(zamanlayici);

	var element = $(this);
	var number = element.attr("data-no")-1;
	var genislik = $(".ust-ekran li").width();
	var hedefLeft = genislik * number;

	$(".ust-ekran").animate({
		left:hedefLeft * -1}, 1000);
});


  });


	$(document).ready(function(){ 
	var click=0;
	var allWidth=0;
	var width=$(".alt-ekran ul li").width()*4;

	function animasyon2(px){
		
		$(".alt-ekran ul").stop(false,false).animate({
			left:px*-1},1000);
	}
	$(".icon-kutu-1").click(function(){
	allWidth=click*width;
	$($(".alt-ekran ul")[1]).detach().prependTo($($(".alt-ekran .ul-kapsam")))
	$(".alt-ekran .ul-kapsam").css("left", "-816px");
	$(".alt-ekran .ul-kapsam").animate({left:0},1000);
	  animasyon2(allWidth);
	  click++;
	});
});
	$(document).ready(function(){
	var click=0;
	var allWidth=0;
	var width=$(".alt-ekran ul li").width()*4;
	function animasyon2(px){
		$(".alt-ekran ul").stop(false,false).animate({
			left:px},1000);
	}
	     $(".icon-kutu-2").click(function(){
        allWidth=click*width;
         $($(".alt-ekran ul")[1]).detach().appendTo($(".alt-ekran .ul-kapsam"))
         $(".alt-ekran .ul-kapsam").css("left", "0px");
         $(".alt-ekran .ul-kapsam").animate({left:-816}, 1000);
         animasyon2(allWidth);
         click++;
       });

       }); 


