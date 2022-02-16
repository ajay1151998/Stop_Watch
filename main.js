// minute
var min=0;
//second
var sec=0;
//millisecond
var milliSec=0;
//Timer
var timer=0;

function callTimer(){
    milliSec++;
    if(milliSec<100){
        // millisec==99 then sec =1
        if(milliSec==99){
            milliSec=0;
            sec++;
            //when sec==99 then minute =1
            if(sec==59){
                sec=0;
                min++;
            }
        }
    }
    else{
        milliSec=0;
    }
    document.getElementById("timer").innerHTML=min +":" + sec + ":" + milliSec;
}
// start function
function start(){
    document.getElementById("start").disabled=true;
    timer=setInterval(callTimer,10);
}
// stop function
function stop(){
    document.getElementById("start").disabled=false;
    clearInterval(timer);
}
// reset function
function reset(){
    stop();
    min=0;
    sec=0;
    milliSec=0;
    document.getElementById("timer").innerHTML= min + ":" + sec + ":" + milliSec;
}