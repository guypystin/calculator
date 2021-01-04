let insert = function(num){
	document.form.textview.value = 
	document.form.textview.value + num;
}
let clean = function(){
	document.form.textview.value = ""
}
let back = function(){
	var pole = document.form.textview.value;
	document.form.textview.value = pole.substring(0, pole.length -1);
}
let result = function(){
	var pole = document.form.textview.value;
	if(pole){
		document.form.textview.value = eval(pole);
	}
}