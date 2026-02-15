const result=document.getElementById("timer");
setInterval(() => {
const currentTime=Date.now();
const salestartTime=new Date(2026,3,3).getTime();
let timer=salestartTime-currentTime;
//for converting milisecond 
const day=Math.floor((timer)/(1000*60*60*24));
timer%=1000*60*60*24;
const hour=Math.floor((timer)/(1000*60*60));
timer%=1000*60*60;
const minute=Math.floor((timer)/(1000*60));
timer%=1000*60;
const second=Math.floor((timer)/(1000));
timer%=1000;
result.textContent=(`${day}d ${hour}h ${minute}m ${second}s`);},1000)