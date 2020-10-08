var stime = 121000;
var running = 1;


function decrement(){
if(stime==0){stime=121000;}
 if(running == 1){
 setTimeout(function(){
 stime-=1000;
temp = stime;
if(temp>=60000){
 var mins = Math.floor(temp/60000);
temp = temp%60000;
 }else {mins =0;}
if(temp>=1000){
 var secs = Math.floor(temp/1000);
temp = temp%1000;
}else{secs = 0;}

 if(mins < 10){
 mins = "0" + mins;
 }
 if(secs < 10){
 secs = "0" + secs;
 }
 
 document.getElementById('output').innerHTML = mins + ":" + secs ;
 decrement();
 
 }, 1000);
 }
}


if(running==1){
decrement();
}