//var num1Input = parseInt(document.getElementsByName("firstNumber")[0].value);
//var num2Input = parseInt(document.getElementsByName("secondNumber")[0].value);
//var opt =document.getElementsByName("算术运算符")[0].value;
//var num3Input = document.getElementsByName("lastNumber")[0];
//var result;错的，答案显示不出来。所以要在函数内声明。
var sum;
function sum() {
	var num1Input = parseInt(document.getElementsByName("firstNumber")[0].value);
	var num2Input = parseInt(document.getElementsByName("secondNumber")[0].value);
	var opt =document.getElementsByName("算术运算符")[0].value;
	var num3Input = document.getElementsByName("lastNumber")[0];
	var result;
	if (opt == "加法") {
		result = num1Input + num2Input;
	} else if (opt == "减法") {
		result = num1Input - num2Input;
	} else if (opt == "乘法") {
		result = num1Input * num2Input;
	} else if (opt == "除法") {
		result = num1Input / num2Input;
	} else {
		result;
	}
	num3Input.value = result;
}
