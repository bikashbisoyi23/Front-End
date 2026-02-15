const form=document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const income=document.getElementById("income")
    const amount=parseInt(income.value);
    const result=document.querySelector("h2")
    let totalTax=0;
    if(amount<=1200000){
        totalTax=0;
    }
    else if(amount<=1600000){
        totalTax=(amount-1200000)*0.15;
    }
     else if(amount<=2000000){
        totalTax=(amount-1600000)*0.20+(1600000-1200000)*0.15;
    }
     else if(amount<=2400000){
        totalTax=(amount-2000000)*0.25+(1600000-1200000)*0.15+(2000000-1600000)*0.20;
    }
    else{
        totalTax=(amount-2400000)*0.30+(1600000-1200000)*0.15+(2000000-1600000)*0.20+(2400000-2000000)*0.25;
    }

    result.textContent=`Total Tax: ${totalTax}`;
    form.reset();
})