/*
 * Scrollpage (A JavaScript for touch device to scroll page) v1.0
 * Developed and maintanined by YangshunChen, 947293563@qq.com
 * Source repository: https://github.com/chenyangshun/scrollpage
 * Licensed under an MIT-style license. See https://github.com/chenyangshun/scrollpage/blob/master/LICENSE for details.
 */
;(function($){
	 $.fn.extend({
	        //插件名字
	        scrollpage: function(options) {
	        	//参数和默认值
	            var defaults = {
	            	currentPage:1,//初始页
	                speed: 300,//初始滚动速度
	                pageHeight:390//每页高度
	            };
	            var option = $.extend(defaults, options);
	            var v_touchstart=0;
	        	var v_touchstop=0;
	        	var v_top=0;
	        	var $scrollContent = $(this).children("div");
	        	var v_max_height=$scrollContent.height();
	        	
	        	log("option.currentPage="+option.currentPage); 
	        	log("option.pageHeight="+option.pageHeight); 
	        	log("option.speed="+option.speed); 
	        	log("v_max_height="+v_max_height);
	        	//add touch event listener
	        	var boxId = $(this).attr("id");
	        	document.getElementById(boxId).addEventListener("touchstart", touchStart, false);
	        	document.getElementById(boxId).addEventListener("touchmove", touchMove, false);
	        	document.getElementById(boxId).addEventListener("touchend", touchEnd, false);
	        	if(option.currentPage>1){
	        		v_top=(0-(option.currentPage-1) * option.pageHeight);
	        		log("v_top="+v_top);
	        		$scrollContent.css("top",v_top+"px");
	        	}
	        	function touchStart(event){
		       		 var touch = event.touches[0];
		       		 v_touchstart = touch.pageY;
		       		 log("v_touchstart"+v_touchstart); 
	        	}
		       	function touchMove(event){
		       		var touch = event.touches[0];
		       		v_touchstop = touch.pageY-v_touchstart;
		       		log("v_touchstop"+v_touchstop); 
		       	}
		       	function touchEnd(event){
		    		if(v_touchstop>0){
		    			//向下滑动 top+390
		    			log("向下滑动 top+390");
		    			if(v_top!=0 && Math.abs(v_top+option.pageHeight)<v_max_height){
		    				v_top+=option.pageHeight;
		    				$scrollContent.animate({top:v_top+'px'},option.speed);
		    			}
		    		}else{
		    			//向上滑动 top-390
		    			log("向上滑动 top-390");
		    			if(Math.abs(v_top-option.pageHeight)< v_max_height){
		    				v_top-=option.pageHeight;
		    				$scrollContent.animate({top:v_top+"px"},option.speed);
		    			}
		    		}
		    	}
		    	function log(info){
		    		 if(true){
		    			console.log(info);
		    		}else{
		    			alert(info);
		    		}  
		    	}
	        }
	    });
})(jQuery);
