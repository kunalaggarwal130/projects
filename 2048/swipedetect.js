function swipedetect(){
	function swipe_left(){
		
	}
	function swipe_right(){
		
	}
	function swipe_up(){
		
	}
	function swipe_down(){
		
	}
	function onSwipe(swipedir)(){
		console.log(swipedir);
	}
	var threshold=150;//minimum distance to detect swipe;
	var error_margin =50; //maximum y coordinates diffrence to allow admit as swipe left4
	var allowed_time=300;//in milliseconds
	var startx, starty,starttime;
	window.addEventListener("touchstart", function(e){
		console.log(e);
		startTime=new Date().getTime();
		var touchobj=e.changedTouches[0];//changedTouches is a list of touches(can be multiple touches)
		startx=touchobj.pageX;
		starty=touchobj.pageY;
		e.preventDefault();
	});
	window.addEventListener('touchmove',function(e){
		e.preventDefault();
	});
	window.addEventListener('touchend',function(e){
		var touchobj=e.changedTouches[0];//changedTouches is a list of touches(can be multiple touches)
		var dist_x=touchobj.pageX-startX;
		var dist_y=touchobj.pageY-startY;
		endy=touchobj.pageY;
		//e.preventDefault();
		var elapsed_Time=new Date().getTime()-startTime;
		var swipedir=" none";
		if(elapsed_time<=allowedTime){
			if(Math.abs(dist_x)>=threshold && Math.abs(dist_y)<=error_margin){
				swipedir=dist_x>0 ? ""
			}
		}
	})
}