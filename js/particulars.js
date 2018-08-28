$(function(){
//	加载头部页面
	$("#head").load("header.html");
//	放大镜
	$(".magnifying_big").hover(function(){
			$("#mask").show();
			$(".movement").show();
			
		},function(){
			$("#mask").hide();
			$(".movement").hide();
		})
		
		$(".magnifying_big").mousemove(function(e){
			var e=e||window.event;
			
			var  x=e.pageX-$(".magnifying_big").offset().left-$("#mask").width()/2;
			var  y=e.pageY-$(".magnifying_big").offset().top-$("#mask").height()/2;
			
			//限制移动范围
			x=x<0?0:x;
			y=y<0?0:y;
			var maxX=$(".magnifying_big").width()-$("#mask").width();
			var  maxY=$(".magnifying_big").height()-$("#mask").height();
			x=x>maxX?maxX:x;
			y=y>maxY?maxY:y;
			
			
			$("#mask").css({top:y,left:x});
			
			//算出大图和小盒子的比例
			var blix=$(".movement img").width()/$(".magnifying_big").width();
			var bliy=$(".movement img").height()/$(".magnifying_big").height();
			//设置大盒子的滚动  距离是遮罩*比例
			$(".movement").scrollTop(bliy*y);
			$(".movement").scrollLeft(blix*x);			
		})	
//		切换
   
})