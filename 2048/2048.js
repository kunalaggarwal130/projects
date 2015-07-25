function myfunction(id,re,un){
	var board=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
	function print(){
		//print the output;
		//var ele=document.getElementsByClassName(id);
		var list = document.getElementsByClassName(id);
		for(var i=0; i<board.length;i++){
			for(var j=0; j<board.length; j++){
				var element = document.getElementById(list[i*4+j].id);
				switch(board[i][j]){
					case 0:element.className ="base";break;
					case 2:element.className ="two base";break;
					case 4:element.className = "four base";break;
					case 8:element.className = "eight base";break;
					case 16:element.className ="sixteen base";break;
					case 32:element.className ="thirty_two base";break;
					case 64:element.className = "sixty_four base";break;
					case 128:element.className = "hundred_twenty_eight  base";break;
					case 256:element.className = "two_fifty_six  base";break;
					case 512:element.className = "five_one_two  base";break;
					case 1024:element.className = "one_zero_two_four  base";break;
					case 2048:element.className = "two_zero_four_eight  base";break;
				}
			}
		}
	}
	function init(){
		//initiase the board
		var number1=generate_random_2_4();
		var number2=generate_random_2_4();
		var place1=generate_random_place();
		var place2=generate_random_place();
		board[place1.x][place1.y]=number1;
		while(place2==place1){
			place2=generate_random_place();
		}
		board[place2.x][place2.y]=number2;
	}
	function generate_random_place(){
		//find place for random number
		function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
		var xplace=getRandomInt(0,3);
		var yplace=getRandomInt(0,3);
		var place={x:xplace , y:yplace };
		return place;
	}
	function generate_random_2_4(){
		var random=Math.random();
		if(random<=0.2){
			return 4;
		}
		else{
			return 2;
		}
	}
	function make_1_move(e){
		//write code for 1 move
         var a= localStorage;
        a['board']=JSON.stringify(board);
		if(game_over(2048)){
			
			return;
		}
		
		var current=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
		for(var i=0; i<board.length; i++){
			for(var j=0; j<board.length; j++){
				current[i][j]=board[i][j];
			}
		}
		var gamestatus_check=true;
		for(var i=0; i<board.length; i++){
			for(var j=0; j<board.length; j++){
				if(board[i][j]==0){
					gamestatus_check=false;
				}
			}
		}
		if(gamestatus_check){
			var l=[97,115,119,100];
			for(var i=0; i<l.length; i++){
				switch(l[i]){
					case 97:move_left();sum_left();move_left();break;
					case 115:move_down();sum_down();move_down();break;
					case 119:move_up();sum_up();move_up();break;
					case 100:move_right();sum_right();move_right();break;
				}
			}
			var check=true;
			for(var i=0; i<board.length; i++){
				for(var j=0; j<board.length; j++){
					if(current[i][j]!=board[i][j]){
						check=false;
					}
				}
			}
			if(check){
				
				return ;
			}
		}
		var code=e.charCode;
		switch(code){
			case 97:move_left();sum_left();move_left();break;
			case 115:move_down();sum_down();move_down();break;
			case 119:move_up();sum_up();move_up();break;
			case 100:move_right();sum_right();move_right();break;
		}
		var check=true;
		for(var i=0; i<board.length; i++){
			for(var j=0; j<board.length; j++){
				if(current[i][j]!=board[i][j]){
					check=false;
				}
			}
		}
		if(check){
			return;
		}
		var number1=generate_random_2_4();
		var place1=generate_random_place();
		while(board[place1.x][place1.y]!=0){
			place1=generate_random_place();
		}
		board[place1.x][place1.y]=number1;
		print();
	}
	function move_left(){
		for(var i=0;i<board.length; i++){
			var temp=[];
			for(var j=board.length-1;j>=0;j--){
				if(board[i][j]!=0){
					temp.push(board[i][j]);
				}
			}
			for(var y=0; y<board.length; y++){
				board[i][y]=0;
			}
			for(var y=0;y<temp.length; y++){
				board[i][y]=temp[temp.length-y-1];
			}
		}
	}
	function move_right(){
		for(var i=0;i<board.length; i++){
			var temp=[];
			for(var j=0;j<board.length;j++){
				if(board[i][j]!=0){
					temp.push(board[i][j]);
				}
			}
			for(var y=0; y<board.length; y++){
				board[i][y]=0;
			}
			for(var y=0;y<temp.length; y++){
				board[i][board.length-y-1]=temp[temp.length-y-1];
			}
		}
		
	}
	function sum_left(){
		for(var x=0; x<board.length;x++){
			for(var j=0; j<board.length-1; j++){
				if(board[x][j]==board[x][j+1]){
					board[x][j]=board[x][j]*2;
					board[x][j+1]=0;
				}
			}
		}
	}
	function sum_right(){
		for(var x=0; x<board.length; x++){
			for(var j=3;j>0;j--){
				if(board[x][j]==board[x][j-1]){
					board[x][j]=board[x][j]*2;
					board[x][j-1]=0;
				}
			}
		}
	}
	function sum_up(){
		for(var y=0; y<board.length;y++){
			for(var i=0; i<board.length-1; i++){
				if(board[i][y]==board[i+1][y]){
					board[i][y]=board[i][y]*2;
					board[i+1][y]=0;
				}
			}
		}
	}
	function sum_down(){
		for(var y=0; y<board.length; y++){
			for(var i=board.length-1; i>0; i--){
				if(board[i][y]==board[i-1][y]){
					board[i][y]=board[i][y]*2;
					board[i-1][y]=0;
				}
			}
		}
	}
	function move_up(){
		for(var j=0;j<board.length; j++){
			var temp=[];
			for(var i=board.length-1;i>=0;i--){
				if(board[i][j]!=0){
					temp.push(board[i][j]);
				}
			}
			for(var x=0; x<board.length; x++){
				board[x][j]=0;
			}
			for(var x=0;x<temp.length; x++){
				board[x][j]=temp[temp.length-x-1];
			}
		}
	
		
	}
	function move_down(){
		for(var j=0;j<board.length; j++){
			var temp=[];
			for(var i=0;i<board.length;i++){
				if(board[i][j]!=0){
					temp.push(board[i][j]);
				}
			}
			for(var x=0; x<board.length; x++){
				board[x][j]=0;
			}
			for(var x=0;x<temp.length; x++){
				board[board.length-x-1][j]=temp[temp.length-x-1];
			}
		}
	
	}
	function game_over(endnumber){
		for(var i=0; i<board.length; i++){
			for(var j=0; j<board.length; j++){
				if(board[i][j]===endnumber){
					return true;
				}
			}
		}
		return false;
	}
	function restart(){
		board=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
		init();
		print();
	}
	function reached_end(){
		
	}
	function stalemate(){
		
	}
    function undo(){
        console.log("i have been called");
        board=JSON.parse(localStorage['board']);
        console.log(board);
        print();
    }
	init();
	print();
	window.addEventListener("keypress",make_1_move);
	var re_ele=document.getElementById(re);
	re_ele.addEventListener("click",restart);
    var un_ele=document.getElementById(un);
    un_ele.addEventListener("click",undo);
	if(game_over(2048)){
		return function (){
			
		}
	}
}