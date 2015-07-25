function highlight_active(nav_id){
    setInterval(once,100);
    function once(){   
        var ele=document.getElementById(nav_id);
        console.log(nav_id);
        console.log(ele);
        var temp="#"+ele.id+" a";
        var list=document.querySelectorAll(temp);
        var target_el=[];
        var targets=[];
        for (var i=0; i<list.length; i++){
            var target=list[i].getAttribute("href");
            var e=document.getElementById(target.slice(1));
            targets.push(e.offsetTop);
        }
        console.log(list);
        for(var i=0; i<targets.length-1; i++){
            if(window.scrollY>=targets[i] && window.scrollY<=targets[i+1]){
                console.log("reached here");
                if(list[i].style.color="red"){
                    if(i!=0){
                        list[i-1].style.color="red";
                    }
                    list[i].style.color="grey";
                    list[i+1].style.color="red";
                }
                console.log( list[i].style.color);
            }
        }
        if(window.scrollY>=targets[targets.length-1]){
             if(list[i].style.color="red"){
                    if(i!=0){
                        list[i-1].style.color="red";
                    }
                    list[i].style.color="grey";
            }
        }
    }
}