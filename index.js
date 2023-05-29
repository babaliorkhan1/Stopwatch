
const timer=document.getElementById("timer");
const startButton=document.getElementById("start-button");
const stopButton=document.getElementById("stop-button");
const resetButton=document.getElementById("reset-button");
let count=0;
let millideqiqe=00;
let millisaniye=000;
let millisaat=00;


startButton.addEventListener("click",()=>{
let intervalid=setInterval(hesabla,4)

    stopButton.addEventListener("click",()=>{
clearInterval(intervalid)


    })

    
resetButton.addEventListener("click",()=>{
    clearInterval(intervalid)
     millisaniye="000"
     millideqiqe="00"
     millisaat="00"
    timer.innerHTML=`${millisaat}:${millideqiqe}:${millisaniye}`
    })
    
})




function hesabla() {
    count+=4
    millisaniye=count
    if (millisaniye>999) {
        millisaniye=000
        millideqiqe++
        count=0
    }
    if (millideqiqe>59) {
        millisaat++
        millideqiqe=00
    }
    if (millisaat>59) {
        return
    }
    timer.innerHTML=`${millisaat}:${millideqiqe}:${millisaniye}`
}


