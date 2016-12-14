var pic = $('.people')[0];
var text = $('.text')[0];
var btn = $('.btn')[0];
var content = $('.content')[0];

var onoff = true;
pic.onclick = function(){
	if(onoff){
		pic.src = 'img/2.jpg';
	}else{
		pic.src = 'img/3.jpg';
	};
	onoff = !onoff;
}

btn.onclick = function(){
	if(onoff){
		content.innerHTML += '<li class="li-left"><img src="img/3.jpg"><p>'+text.value+'</p></li>';
	}else{
		content.innerHTML += '<li class="li-right"><img src="img/2.jpg"><p>'+text.value+'</p></li>';
	};
	text.value = '';
}