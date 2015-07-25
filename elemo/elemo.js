function myfunction(){
	var list=arguments;
	var i=0;
	function movepic(){
		var el=document.getElementById(list[i]);
		if(i==list.length-3){
			i=-1;
		}
		var el2=document.getElementById(list[i+1]);
		i=i+1;
		el.style.display="none";
		el2.style.display="flex";
	}
	var x=setInterval(movepic, 4000);
	function change_image_left(){
		i=i-2;
		if(i<2){
			i=list.length-3+i;
		}
		movepic();
	}
	function change_image_right(){
		//i=i+1;
		movepic();
	}
	var id1=list[list.length-2];
	var id2=list[list.length-1];
	var ele1=document.getElementsByClassName(id1);
	var ele2=document.getElementsByClassName(id2);
	ele1[0].addEventListener("click",change_image_left);
	ele2[0].addEventListener("click",change_image_right);
}

function myfunction2(list){
	var tags=[];
	var target=[]
	for(var i=0; i<list.length; i++){
		tags.push(document.getElementById(list[i]));
	}
	console.log(tags);
	for( var j=0; j<tags.length; j++){
		target.push(document.getElementById(tags[j].getAttribute("href").substring(1))) ;
	}
	console.log(target);
	for(var i=0; i<tags.length; i++ ){
		if(target[j]!=null){
			target[j].addEventListener("mouseover",changecolor.bind(target[j],j));
		}	
	}
	function changecolor(j){
		console.log(tags[j]);
		tags[j].style.color="green";
	}
}

var myfunction3= (function(){
	function more(el2,e){
		console.log(this);
		e.preventDefault();
		this.style.display="none";
		el2.style.display="block";
	}
	function less(el2,el,i){
		el2.style.display="none";
		el[i].style.display="block";
	}
	return{
		init:function(id, id2,id3){
			var el=document.getElementsByClassName(id);
			var el2=document.getElementById(id2);
			var el3=document.getElementsByClassName(id3);
			for(var i=0; i<el.length; i++){
				el[i].addEventListener("click",more.bind(el[i],el2))
			}	
			for(var i=0; i<el.length; i++){
				el3[i].addEventListener("click",less.bind(el3[i],el2,el,i))
			}
		}
	}
})();
