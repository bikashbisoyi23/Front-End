const zodiacSign=["Capricorn","Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius",]

const futurep=["Your future is moving toward success, but patience is required.",

"A new opportunity is coming soon that will change your path positively.",

"Your hard work will bring good results within the next few months.",

"Financial growth is possible, but you must avoid unnecessary spending.",

"Your career will improve steadily, and recognition is on the way.",

"A major decision in your life will bring long-term benefits.",

"Your luck will support you strongly in the coming period.",

"Your relationship life will become more stable and peaceful soon.",

"Travel or relocation chances are visible in your future.",

"A powerful transformation is coming, making you stronger than before."]
const solution=["Avoid negative thinking and focus on self-discipline daily.",

"Start your day early and maintain a fixed routine for better results.",

"Wear light colors and stay calm to attract positive energy.",

"Keep faith in your goals, your time is approaching.",

"Avoid conflicts and practice silence when anger rises.",

"Meditation and deep breathing will help you control stress.",

"Donate food or water on Fridays for better spiritual balance.",

"Stay away from toxic people and protect your peace.",

"Chant positive affirmations daily to strengthen your mindset.",

"Helping others will bring unexpected blessings into your life."]

const dob=document.getElementById("dob")
const time=document.getElementById("time")
const form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const name=document.getElementById("name");
    const surename=document.getElementById("surename");
    const place=document.getElementById("place");
    const result=document.querySelector("h4");
  
    const currentTime=Date.now();
    const date=new Date(dob.value+"T"+time.value);
    let timer=currentTime-date.getTime();

    const year=Math.floor((timer)/(1000*60*60*24*365));
    timer%=1000*60*60*24*365;
    const tmonth=Math.floor((timer)/(1000*60*60*24*30));
    timer%=1000*60*60*24*30;
    const tday=Math.floor((timer)/(1000*60*60*24));
    timer%=1000*60*60*24;
    const hour=Math.floor((timer)/(1000*60*60));
    timer%=1000*60*60;
    const minute=Math.floor((timer)/(1000*60));
    timer%=1000*60;
    const second=Math.floor((timer)/(1000));
    timer%=1000;
    
    const pdate=date.toDateString();
    const ptime=date.toLocaleTimeString("en-US",);
    const month=date.getMonth();
    const day=date.getDate();
    // console.log(date.toString());
    // console.log(day);
    if(dob.value==="2004-11-07"){
        result.textContent=`Prediction: Hii ${name.value} ${surename.value},So you born at ${place.value} based on your DOB: ${pdate}, ${ptime}.Your age is ${year} years, ${tmonth} months, ${tday} days, ${hour} hours, ${minute} minutes and ${second} seconds. Your ZodiacSign is Scorpio And Your love life is entering a lucky phase. The girl whose name starts with “A” is already connected to your destiny. Since she studies in the same city, the chances of getting closer are very high. In the coming days, you may get a perfect moment to talk with her, and slowly your bond can turn into a beautiful relationship. If you stay confident and honest, your love story has a strong chance of success.  You should Keep your focus on studies and career, because that will attract her more. Thank you ${name.value}...`
    }
    else{
    result.textContent=`Prediction: Hii ${name.value} ${surename.value},So you born at ${place.value} based on your DOB: ${pdate}, ${ptime}.Your age is ${year} years, ${tmonth} months, ${tday} days, ${hour} hours, ${minute} minutes and ${second} seconds. Your ZodiacSign is ${zodiacSign[month]} And ${futurep[(name.value.length*surename.value.length*day)%10]}  You should ${solution[(name.value.length*name.value.length*day)%10]} Thank you ${name.value}...`
    }
    form.reset();
})
