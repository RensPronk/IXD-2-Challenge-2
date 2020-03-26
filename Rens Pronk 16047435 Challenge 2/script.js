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

// function updateDate()
// {
// var today = new Date();
// var dd = today.getDate();

// var mm = today.getMonth()+1; 
// var yyyy = today.getFullYear();
// if(dd<10) 
// {
//     dd='0'+dd;
// } 

// if(mm<10) 
// {
//     mm='0'+mm;
// } 
// today = mm+'-'+dd+'-'+yyyy;
//   document.getElementById('ClockDate').innerHTML = today;

// }