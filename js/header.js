$(function(){
	$(".consult>img").hover(function(){
		$(".business").show();
		$(this).hide();
	})
//	$(".classify").hover(function(){
//		$(".popup").show();
//	},function(){
//		$(".popup").hide();
//	})
	$(".shut a").click(function(){
		$(".business").hide();
		$(".consult>img").show();
	})
	$(".enter>span").eq(0).click(function(){
		$(".enter_log").show();
	})
	$(".enter_log>b").click(function(){
		$(".enter_log").hide();
	})
	
	//用户名判断
		var reg=/^[\u4e00-\u9fa5]+$/;
		$("#user").blur(function(){
			
			if(!reg.test($(this).val())){
				$(this).next().show();

			}else{
				$(this).next().hide();
			}
		})
		//密码的判断
		var reg1=/^\d{6}$/;
		$("#code").blur(function(){
			
			if(!reg1.test($(this).val())){
				$(this).next().show();
			}else{
				$(this).next().hide();
			}
		})
		//验证码判断
			var  reg2=/^\d{4}$/;
			$("#verify").blur(function(){
				
				if(!reg2.test($(this).val())){
					$(this).next().show();
					
				}else{
					$(this).next().hide();
				}
				
			})
		$("#registry").click(function(){
			//把数据存储到cookie
			if(reg.test($("#user").val())&&reg1.test($("#code").val())&&reg2.test($("#verify").val())){
				setCookie("username",$("#user").val(),55);
				setCookie("pass",$("#code").val(),55);
				setCookie("phone",$("#verify").val(),55);
				alert("注册成功")
				window.location.href="haolive.html";
			}else{
				alert("用户名或密码有误，请重新输入")
			}
		})
		$(".enter_log>div")
		$(".introduce>ul>li").eq(0).click(function(){
			window.location.href="haolive.html";
		})
})