//找到url中匹配的字符串
function findInUrl(str){
	url = location.href;
	return url.indexOf(str) == -1 ? false : true;
}
//获取url参数
function queryString(key){
    return (document.location.search.match(new RegExp("(?:^\\?|&)"+key+"=(.*?)(?=&|$)"))||['',null])[1];
}

//产生指定范围的随机数
function randomNumb(minNumb,maxNumb){
	var rn=Math.round(Math.random()*(maxNumb-minNumb)+minNumb);
	return rn;
	}
	
var navTempOn;
var wHeight;
$(function(){
	wHeight=$(window).height();
	
	$('.navMoreBtn').mouseover(function(){
		
		var fd = $(this).offset().left;

		$(".navMoreBtn").removeClass('navMsOn');
		$(this).addClass('navMsOn');
		$('.navMore').hide();
		var nmid=$(this).attr('nmid');
		var fh = $('.navMore'+nmid).find('a').length;
		
		$('.navMore').height(fh*40+80);
		navTempOn=nmid;
		$('.navMore'+nmid).show();
		$('.navMore'+nmid).find('img').css({
			'left':fd+32,
			})
		$('.navMore'+nmid).find('li.nmlInit').css({
			'left':fd,
		})

	});

	$('.navMore,.nav').hover(function(){
		$(this).show();
		},function(){
			$('.navMore').hide();
			$(".navMoreBtn[nmid='"+navTempOn+"']").removeClass('navMsOn');
			}
		);
		


	$('.navSearch').hover(function(){
		$('.searchMoreOut').show();
		},function(){
			$('.searchMoreOut').hide();
			});
	$('.searchMoreOut').hover(function(){
		$('.searchMoreOut').show();
		},function(){
			$('.searchMoreOut').hide();
			});
	
	$('.qcBtn').hover(function(){
		$('.bottomQc').show();
		},function(){
			$('.bottomQc').hide();
			});
	$('.qcBtn2').hover(function(){
		$('.bottomQc2').show();
		},function(){
			$('.bottomQc2').hide();
			});
	$('.associatorBtn').hover(function(){
		$('.associatorTxt').show();
		},function(){
			$('.associatorTxt').hide();
			});
	$('.contactUsBtn').hover(function(){
		$('.contactUsTxt').show();
		},function(){
			$('.contactUsTxt').hide();
			});
			
	footeffect();
	})
	
//通用窗口大小改变
$(window).resize(function(){
	wHeight=$(window).height();
	});
	
//通用滚动
$(window).scroll(function(){
	footeffect();
	});

var myPlayer;	
function showVideo(e){
	var popVideo=document.getElementById('popVideo');
	var vSrc=$(e).attr('vSrc');
	var vPoster=$(e).attr('vPoster');
	var isIE = /msie/.test(navigator.userAgent.toLowerCase());
	$('.popVideo video').attr('poster',vPoster);
	$('.video-js').find('source').attr('src',vSrc);
	//$('.popVideo video source').attr('src',vSrc);
	
	$('.pop').hide();
	$('.popBg').show();
	$('.popVideo').show();
	
	myPlayer = videojs('popVideo');
	myPlayer.play();
}
	
function closeVideo(){
	myPlayer.pause();
	myPlayer.dispose();
	var popVideo=document.getElementById('popVideo_html5_api');
	// popVideo.pause();
	$('.popVideo .innerDiv').html('<video controls preload="none" src="" width="800" height="450" id="popVideo" class="video-js vjs-default-skin"><source src="" type="video/mp4" /></video><a href="javascript:void(0);" onclick="closeVideo();" class="videoClose"><img src="/resources/pc/images/videoClose.png" /></a>');
	$('.popBg').hide();
	$('.pop').hide();
	}
	
var isOpen=false;	
function openMapNav(){
	if(!isOpen){
		isOpen=true;
		$('.mapNavBtn,.mapNav').css('transform','translate(-280px,0)');
		}
		else{
			isOpen=false;
			$('.mapNavBtn,.mapNav').css('transform','translate(0,0)');
			}
	}
	
var isGoingTop=false;
function footeffect(){
	$('.upBtn').click(function(){
		if(!isGoingTop){
			isGoingTop=true;
			$('html,body').animate({scrollTop:'0px'}, 500 ,'linear',function(){
				isGoingTop=false;
				});
			}
		});
		
	var wstt=$(window).scrollTop();
	var wdh=$(document).height();
	if((wstt+50)>(wdh-wHeight)){
		$('.upBtn').fadeIn(500);
		}
		else{
			$('.upBtn').fadeOut(500);
			}
	}
	
	
	
//input失去焦点
$(function(){
$("input").each(function () {
    if (!$(this).attr("default-text")) {
        return;
    }
    this.value = $(this).attr("default-text");
});
$("input").on("focus", function () {
    if (!$(this).attr("default-text")) {
        return;
    }
    if (this.value == $(this).attr("default-text")) {
        this.value = ''
    }
});
$("input").on("blur", function () {
    if (!$(this).attr("default-text")) {
        return;
    }
    if (this.value == '') {
        this.value = $(this).attr("default-text");
    }
});
});
