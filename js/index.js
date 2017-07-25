//预加载
/*var images = new Array();
function preload(){
	for(var i=0;i<preload.arguments.length;i++){
		images[i] = new Image();
		images[i].src = preload.arguments[i];
	}
}*/
function preLoad(b, e) {
    var c = 0,
        a = {},
        d = 0;
    for (src in b) {
        d++;
    }
    for (src in b) {
        a[src] = new Image();
        a[src].onload = function() {
            if (++c >= d) {
                e(a)
            }
        };
        a[src].src = b[src];
    }
}
preLoad([
	"images/arrow.png",
	"images/bigcar.png",
	"images/car.png",
	"images/eightbc.png",
	"images/fivencs.png",
	"images/fourbc.png",
	"images/hand.png",
	"images/hidden1.png",
	"images/hidden2.png",
	"images/hidden3s.png",
	"images/hidden4.png",
	"images/left.png"
],function(){
	setTimeout(function(){
		var loader = document.getElementById("loading");
		mySwiper.slideTo(0,1000,false);
		document.body.removeChild(loader);
		$("#swiper-container").css("display","block");
	},2000);
})

//音乐
$(".music").on("click",function(){
	if($(".icon-music").attr("num")=="1"){
		$(".icon-music").removeClass("open");
		$(".icon-music").attr("num","2");
		document.getElementById("aud").pause();
	}else{
		$(".icon-music").attr("num","1");
		$(".icon-music").addClass("open");
		document.getElementById("aud").play();
		document.getElementById("au").pause();
	}
})
//	切换歌曲
$(".round").click(function(){
		$('.hand2').css("display","none");
		$(".icon-music").removeClass("open");
		document.getElementById("aud").pause();
		document.getElementById("au").play();
})
//	LED灯
$(function(){
	var open = true;
	$(".deng").on("click",function(){
		if(open){
			$(".biglight").css({
				display:"block"
			});
			open = false;
		}else{
			$(".biglight").css({
				display:"none"
			});
			open = true;
		}
	});
})
//	前脸
$(function(){
	var face = true;
	$(".qian").on("click",function(){
		$(".hand").css("display","none");
		if(face){
			$(".bigcar").css({
				top:"1.4rem",
				left:"0.5rem"
			});
			face = false;
		}else{
			$(".bigcar").css({
				top:"3.4rem",
				left:"-2.5rem"
			});
			face = true;
		}
	})
})
//	18寸轮廓
var eight = true;
$(".lunkuo").on("click",function(){
	if(eight){
		$(".bigcar").css({
			top:"0.8rem",
			left:"-3.8rem"
		})
		eight = false;
	}else{
		$(".bigcar").css({
			top:"3.4rem",
			left:"-2.5rem"
		})
		eight = true;
	}
})

//	360旋转
var dian = true;
var time1 = null;
var	time2 = 50; 
$(".dianji").on("click",function(){
	if(dian){
		clearInterval(time1);
		var x=0;
		function Animate(){
			$("#box img").css("display","none");
			$("#box img").eq(x).css("display","block");
			if(x>=71){
				x=0;
			}
			x++;
		}
		time1 = setInterval(Animate,time2);
		dian = false;
	}else{
		clearInterval(time1);
		dian = true;
	}
})
//	变大
var n=1;
$(".jia").on("click",function(){
	n+=0.5;
	if(n>=2){
		n=2;	
	}
	$("#box").css({
		transform:"scale("+n+")",
	})
})
//	变小
$(".jian").on("click",function(){
	n-=0.5;
	if(n<=0.5){
		n=0.5;
	}
	$("#box").css({
		transform:"scale("+n+")",
	})
})
//	AQS空气质量
$(".title1").on("click",function(){
	$(".hand1").css("display","none");
	$(".title1").fadeOut(100);
	$(".title2").fadeOut(100,function(){
		$(".suna").fadeIn(1000);
		$(".sunb").fadeIn(1000,function(){
			$(".suna").fadeOut(1000);
			$(".sunb").fadeOut(1000,function(){
				$(".sunc").fadeIn(1000);
				$('.sund').fadeIn(1000,function(){
					$(".sunc").fadeOut(1000);
					$(".sund").fadeOut(1000,function(){
						$('.title1').css("display","block");
						$(".title2").css("display","block");
					})
				})
			})
		})
	});
})
//	遮罩
$(".ji").on("click",function(){
	$(".zhezhao").css("display","none");
	$(".fourbc").css("display","none");
	$(".ji").css("display","none");
})

