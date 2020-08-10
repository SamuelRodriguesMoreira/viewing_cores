window.addEventListener('load', start);
var Color1 = null;
var Color2 = null;
var Color3 = null;

function start() {
  Color1 = document.getElementById('Color1').value;
  document.getElementById('NumberColor1').value = Color1;

  Color2 = document.getElementById('Color2').value;
  document.getElementById('NumberColor2').value = Color2;

  Color3 = document.getElementById('Color3').value;
  document.getElementById('NumberColor3').value = Color3;

  var box = 'rgb(' + Color1 + ',' + Color2 + ',' + Color3 + ')';

  var VarColor1 = 255 - Color1;
  var VarColor2 = 255 - Color2;
  var VarColor3 = 255 - Color3;

  var VarBox = 'rgb(' + VarColor1 + ',' + VarColor2 + ',' + VarColor3 + ')';

  var Div = document.querySelector('.Box');

  Div.style.backgroundColor = box;
  document.body.style.backgroundColor = VarBox;
}
