var btn = $('.btn')[0];
var content = $('.content')[0];
//方法一
data = [[0, 0], [1, 1], [2, 2], [3, 1], [4, 0]];
btn.onclick = function(){
  data = [
    data[4], 
    data[3], 
    data[2], 
    [4-data[1][0],4-data[1][1]], 
    [4-data[0][0],4-data[0][1]]
  ];
  str = '';
  for(i=0;i<5;i++){ str="" +="<div style="left:" +data[i][0]*100+'px;="" top:'+data[i][1]*100+'px"="">'+i+'';
  }
	content.innerHTML = str;
};
btn.onclick(); 

//方法二
// var num = 0;
// btn.onclick = function(){
// 	var left = 0;
// 	var top = 0;
// 	str = '';
	// if(num==0){
	// 	for(var i=0;i<5;i++){ left="i*100;" if(i<3){="" top="i*100;" }else{="" };="" str="" +="<div style="left:" +left+'px;="" top:'+top+'px"="">'+i+'';
	// 	};
	// }

	// if(num==1){
	// 	for(var i=0;i<5;i++){ top="i*100;" if(i<3){="" left="400-i*100;" }else{="" };="" str="" +="<div style="left:" +left+'px;="" top:'+top+'px"="">'+i+'';
	// 	};
	// }

	// if(num==2){
	// 	for(var i=0;i<5;i++){ left="i*100;" if(i<3){="" top="400-i*100;" }else{="" };="" str="" +="<div style="left:" +left+'px;="" top:'+top+'px"="">'+i+'';
	// 	};
	// }

	// if(num==3){
	// 	for(var i=0;i<5;i++){ top="i*100;" if(i<3){="" left="i*100;" }else{="" };="" str="" +="<div style="left:" +left+'px;="" top:'+top+'px"="">'+i+'';
	// 	};
	// 	num = -1;
	// }

// 	num++;
// 	content.innerHTML = str;
// }</5;i++){></5;i++){></5;i++){></5;i++){></5;i++){>