// 获取现在的时间
// var today = new Date();
// var h = today.getHours();
// var m = today.getMinutes();
// var s = today.getSeconds();

// 得到现在图片的角度
// var h_deg = h*30;
// var m_deg = m*6;
// var s_deg = s*6;

function update(){
	var today = new Date();
  var h = today.getHours()*60;
  var m = today.getMinutes();
  var s = today.getSeconds();
	var h_deg = (h+m)*0.5;
  var m_deg = m*6;
  var s_deg = s*6;
	$(".hour")[0].style.transform = "rotate("+h_deg+"deg)";
	$(".minute")[0].style.transform = "rotate("+m_deg+"deg)";
	$(".second")[0].style.transform = "rotate("+s_deg+"deg)";
	// console.log("run");
	// console.log("rotate("+s_d+")");
	setTimeout("update()",1000);
}
// console.log("loaded");