const form=document.querySelector("form")
const dob=document.getElementById("dob") 
const time=document.getElementById("time")   
    form.addEventListener("submit",(e)=>{
         e.preventDefault();
        const currentTime=Date.now();
        const DOB=new Date(dob.value + "T" + time.value).getTime();
        let timer=currentTime-DOB;
        const year=Math.floor((timer)/(1000*60*60*24*365));
        timer%=1000*60*60*24*365;
        const month=Math.floor((timer)/(1000*60*60*24*30));
        timer%=1000*60*60*24*30;
        const day=Math.floor((timer)/(1000*60*60*24));
        timer%=1000*60*60*24;
        const hour=Math.floor((timer)/(1000*60*60));
        timer%=1000*60*60;
        const minute=Math.floor((timer)/(1000*60));
        timer%=1000*60;
        const second=Math.floor((timer)/(1000));
        timer%=1000;
        document.querySelector("h2").textContent=(`Age :${year}Year ${month}Month ${day}Day ${hour}Hour ${minute}Minute ${second}Second`);
    })
