function updateTime()
{
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('Clock').innerHTML = h + ":" + m + ":" + s;

  var t = new Date().getHours();

  if (t <= 6 || t >= 23) 
  {
    document.getElementById('TimeOfDay').src = "images/moon.png";
  } 
  else if (t >= 7 && t <= 22) 
  {
    document.getElementById('TimeOfDay').src = "images/sun.png";
  } 
}

function checkTime(i) 
{
  if (i < 10) {i = "0" + i};
  return i;
}
