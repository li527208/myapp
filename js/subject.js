$(function(){
	//加载头部页面
	$("#head").load("header.html")
//	轮播图
    var num=0;
		function move(){
			num++;
			if(num>4){
				num=0;
			}
			$(".slideshow_box div").eq(num).fadeIn().siblings().fadeOut();
			$(".box_index li").eq(num).addClass("hue").siblings().removeClass("hue");
		}
		//圆点点击
		$(".box_index li").hover(function(){
			num=$(this).index();
			$(".slideshow_box div").eq(num).fadeIn().siblings().fadeOut();
			$(".box_index li").eq(num).addClass("hue").siblings().removeClass("hue");
		})
		$(".advance").click(function(){
			move();
		})
		//左按钮点击事件
		$(".retreat").click(function(){
			num--;
			if(num<0){
				num=4;
			}
			$(".slideshow_box div").eq(num).fadeIn().siblings().fadeOut();
			$(".box_index li").eq(num).addClass("hue").siblings().removeClass("hue");
		})
//		商品切换
        $(".guide>ul>li").hover(function(){
        	num=$(this).index();
        	$(".guide>ul>li").eq(num).addClass("hide").siblings().removeClass("hide");
        })
//      中间部分
        $(".fresh>ul>li").hover(function(){
        	num=$(this).index();
        	$(this).addClass("domestic").siblings().removeClass("domestic");
        	$(".fresh_middle>div").eq(num).show().siblings().hide();
        })
//      右边部分
        $(".coat>li").hover(function(){
        	
        	num=$(this).index();
        	$(".coat>li>ul").eq(num).addClass("reveal").siblings().removeClass("reveal");
        })
    })
//      商品加载
        $(function(){
	        $.ajax({
	        	type:"get",
				url:"js/product.json",
				async:true,
				success:function(res){
					var proarr=res.recommend;
					
					var str="";
					$.each(proarr,function(index,ele) {
						str+='<li pid="'+ele.pid+'">'
								+'<img src="'+ele.imgsrc+'"/>'
								+'<h6><a href="?">'+ele.name+'</a></h6>'
								+'<ul>'
									+'<li><span>'+ele.price+'</span></li>'
									+'<li><span>'+ele.oldprice+'</span></li>'
								+'</ul>'
							+'</li>'
					});
					$(".rank_middle>ul").eq(0).html(str);
					
					var proarr=res.quality;
					var str="";
					$.each(proarr,function(index,ele) {
						str+='<li pid="'+ele.pid+'">'
								+'<img src="'+ele.imgsrc+'"/>'
								+'<h6><a href="?">'+ele.name+'</a></h6>'
								+'<ul>'
									+'<li><span>'+ele.price+'</span></li>'
									+'<li><span>'+ele.oldprice+'</span></li>'
								+'</ul>'
							+'</li>'
					});
					$(".rank_middle>ul").eq(1).html(str);
					$(".rank_middle>ul:eq(0)>li").eq(0).click(function(){
			        	window.location.href="particulars.html";
			        })
				}	
	       })
	        
	        
        
        
        
        
})
