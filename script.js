let insert = function(num){
  document.form.textview.value = 
  document.form.textview.value + num;
  reduce_font();
};
let clean = function(){
  document.form.textview.value = "";
  reduce_font();
};
let back = function(){
  let insert_value = document.form.textview.value;
  document.form.textview.value = insert_value.substring(0, insert_value.length -1);
  reduce_font();
};
let result = function(){
  let insert_value = document.form.textview.value;
  document.form.textview.value = eval(insert_value);
  reduce_font();
};

let input_length = function(){
  let get_element = document.getElementById('input');
  return get_element.value.length;
};
let reduce_font = function(){
  if(input_length() > 6){
    let get_element = document.getElementById('input');
    get_element.style.fontSize = '40px';
  }
  if(input_length() > 10){
    let get_element = document.getElementById('input');
    get_element.style.fontSize = '20px';
  }
  if(input_length() > 20){
    let get_element = document.getElementById('input');
    get_element.style.fontSize = '10px';
  }
  if(input_length() < 6){
    let get_element = document.getElementById('input');
    get_element.style.fontSize = '60px';
  }
};