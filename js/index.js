$(function(){
		//toolbar start
		$height = document.documentElement.clientHeight;
		$(".right_nav_bg").css({height:$height,background:"#7A6E6E"});

		$(".toolbar").find("li").hover(function(){
			
		},function(){
		
		});
		//left_nav start
		$(".left_nav").find("li").hover(function(){
			var $index = $(this).index();
			if($index==0) $(this).find("span").text("服饰");
			if($index==1) $(this).find("span").text("美妆");
			if($index==2) $(this).find("span").text("手机");
			if($index==3) $(this).find("span").text("家电");
			if($index==4) $(this).find("span").text("数码");
			if($index==5) $(this).find("span").text("运动");
			if($index==6) $(this).find("span").text("居家");
			if($index==7) $(this).find("span").text("美婴");
			if($index==8) $(this).find("span").text("食品");
			if($index==9) $(this).find("span").text("图书");
			if($index==10) $(this).find("span").text("车品");
			if($index==11) $(this).find("span").text("服务");
			$(this).find("span").addClass("sel_a");
		},function(){
			$(this).find("span").removeClass("sel_a");
			var outindex = $(this).index();
			if(outindex==0) $(this).find("span").text("1F");
			if(outindex==1) $(this).find("span").text("2F");
			if(outindex==2) $(this).find("span").text("3F");
			if(outindex==3) $(this).find("span").text("4F");
			if(outindex==4) $(this).find("span").text("5F");
			if(outindex==5) $(this).find("span").text("6F");
			if(outindex==6) $(this).find("span").text("7F");
			if(outindex==7) $(this).find("span").text("8F");
			if(outindex==8) $(this).find("span").text("9F");
			if(outindex==9) $(this).find("span").text("10F");
			if(outindex==10) $(this).find("span").text("11F");
			if(outindex==11) $(this).find("span").text("12F");			
		});

		$(".left_nav").find("li").click(function(){
			//$(this).find("span").css({color:"#C81623"});
			$index = $(this).index();
			if($index == 0){
				$("body").animate({"scrollTop":1800},1000);
			}
			if($index == 1){
				$("body").animate({"scrollTop":2580},1000);
			}
			if($index == 2){
				$("body").animate({"scrollTop":3345},1000);
			}
			if($index == 3){
				$("body").animate({"scrollTop":4110},1000);
			}
			if($index == 4){
				$("body").animate({"scrollTop":4880},1000);
			}
			if($index == 5){
				$("body").animate({"scrollTop":5645},1000);
			}
		});
		$(window).scroll(function(){
			var top = $(this).scrollTop();
			if(top<1700){
				$(".left_nav").stop(true,true).hide();
			}else{
				$(".left_nav").stop(true,true).show();
			}
		});
		//end left_nav

		$(".f_cont_left_nav01").find("li").hover(function(){
			$(this).find(".clother_type").css({color:"#C81623"});
		},function(){
			$(this).find(".clother_type").css({color:"#666"});
		});
		//1f切换
		$(".one_f_nav").find("li").mouseover(function(){
			$(this).addClass("sel_li").siblings().removeClass("sel_li");
			$(this).find("a").addClass("sel_li_a").parent().siblings().children().removeClass("sel_li_a");
		});
		//鼠标经过向左移动
		$("#jd_life_cont_left01").find(".life_cont_title, #jd_life_img01")
		.hover(function(){
			$("#jd_life_img01").animate({
				left:'-2px'
			},300);
		},function(){
			$("#jd_life_img01").animate({
				left:'+10px'
			},300);
		});
		//鼠标经过向左移动
		$("#jd_life_cont_left02").find(".life_cont_title,#jd_life_img02")
		.hover(function(){
			$("#jd_life_img02").animate({
				left:'0px'
			},300);
		},function(){
			$("#jd_life_img02").animate({
				left:'+10px'
			},300);
		});




		$(".cat").hover(function(){
			$(this).css({background:"#fff"}).addClass("cat_hover");
			$(".cat a").css({color:"#B61D1D"});
		},function(){
			$(this).css({background:"#F9F9F9"}).removeClass("cat_hover");
			$(".cat a").css({color:"#666"});
		});
		//鼠标经过
		$(".left_item").hover(function(){
			$(this).find("a").css({color:"#B61D1D"});
		},function(){
			$(this).find("a").css({color:"#fff"});
		});

		$(".title_content").find("li").hover(function(){
			$(this).find("span").css({color:"#B61B1F"});
		},function(){
			$(this).find("span").css({color:"#666"});
		});

		$(".left_top").find("li").hover(function(){
			$(this).find("a").css({background:"#C81623"});
			$(this).find("span").css({background:"#B61B1F"});
		},function(){
			$(this).find("a").css({background:"#7C7171"});
			$(this).find("span").css({background:"#5c5251"});
		});
		//轮播
		$(".carousel_nav").find("li").mouseover(function(){
			$(this).addClass("li_sel").siblings().removeClass("li_sel");
			var $index = $(this).index();
			$(".carousel_img").eq($index).stop(true,true).fadeIn(1000).siblings().hide();
			$(".carousel_nav").show();
		});

		//切换左边导航栏
		$(".wrap_left").find(".left_item").hover(function(){
			$index = $(this).index();
			$(this).css({background:"#F7F7F7"}).siblings().css({background:"#C81623"});
			$(".wrap_left_content").eq($index).show().hover(function(){
				$(this).show();
				$(".wrap_left").find(".left_item").eq($index).css({background:"#F7F7F7"});
				//鼠标离开left_item进入wrap_left_content后left_item里面的a元素文字变为红色
				$(".left_item").eq($index).find("a").css({color:"#C81623"});
			},function(){
				$(this).hide();
				//鼠标离开.wrap_left_content时让左边导航栏恢复原来的背景颜色
				$(".wrap_left").find(".left_item").eq($index).css({background:"#C81623"});
				//鼠标离开left_item并且离开wrap_left_content后left_item里面的a元素文字变为原来的颜色（#fff）
				$(".left_item").eq($index).find("a").css({color:"#fff"});
			});
		},function(){
			$(".wrap_left_content").eq($index).hide();
			$(this).css({background:"#C81623"});
		});

		//显示时钟右边左右切换图
		$(".banner_img").hover(function(){
			$(".carousel_left ,.carousel_right").show();
		},function(){
			$(".carousel_left ,.carousel_right").hide();
		});

		//时钟右边图片向左轮播
		var count = 0;
		$(".carousel_left").click(function(){
			$length = $(".img_group").length; 
			count++;
			if(count==$length){
				count=0;
			}
			$(".img_group").eq(count).show().siblings().hide();
			$(".carousel_left ,.carousel_right").show();
		});
		//时钟右边图片向右轮播
		$(".carousel_right").click(function(){
			count--;
			if(count==-1){
				count=2;
			}
			$(".img_group").eq(count).show().siblings().hide();
			$(".carousel_left ,.carousel_right").show();
		});


	});
