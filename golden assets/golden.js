function myfunction(){
	//var a=document.getElementsByTagName("a");
	/*var myinterval;
	function scrolltotop(){
		if(scrollY<=0){
			clearInterval(myinterval);
		}
		else{
			window.scrollTo(window.scrollX,window.scrollY-10);
		}	
		myinterval= setInterval(scrolltotop,100);
	}
	
	var el=document.getElementById('scroll_to_top');
	el.addEventListener('click',scrolltotop);	*/
	function generate_inpage_links_list(){
		var list= document.documentElement.querySelectorAll("a[href^='#']");
		console.log(list);
		return list;
	}
	var list=generate_inpage_links_list();
	console.log(list[0].getAttribute("href"));
	for(var i=0; i<list.length;i++){
		if(list[i].getAttribute("href").length>=2){
			console.log(list[i]);
			list[i].addEventListener("click",scroll);
		}
	}
	function scroll(e){
		var t=this.getAttribute("href");
		var ele=document.getElementById(t.substring(1));
		e.preventDefault();
		var curr_y=window.scrollY;
		var t_y=ele.offsetTop;
		var diff=curr_y>t_y ? -10:10;
		var myinterval= setInterval(function () {
			if(t_y === window.scrollY){
				clearInterval(myinterval);
			}
			else if((diff>0 && t_y-window.scrollY<diff) ||(diff>0 && window.innerHeight+window.scrollY==document.body.offsetTop)){
				diff=t_y-window.scrollY;
			}
			else if(diff<0 && t_y-window.scrollY>diff){
				diff=t_y-window.scrollY;
			}
			else{
				window.scrollTo(window.scrollX,window.scrollY+diff);
			}
		},10);
		
	}
}