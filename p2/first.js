// const bikash=document.getElementById("f1")
// const button=document.querySelector("button")



// button.addEventListener("click", ()=>{
//     let backgroundcolor1= bikash.style.backgroundColor;
//     if(backgroundcolor1==="aqua" || backgroundcolor1==="green" || backgroundcolor1==="blue" || backgroundcolor1==="orange"){
//         bikash.style.backgroundColor="black";
//         button.textContent="Green mode";
//     }
//     else if(backgroundcolor1==="aqua" || backgroundcolor1==="black" || backgroundcolor1==="blue" || backgroundcolor1==="orange"){
//         bikash.style.backgroundColor="green";
//         button.textContent="Dark mode";
//     }
//     else {
//         bikash.style.backgroundColor="aqua"
//         button.textContent="Dark Mode"
//     }
       
// })

const parent=document.getElementById("parent")
const body=document.getElementById("f1")

parent.addEventListener("click", (e)=>{
    const child=e.target
    body.style.backgroundColor=child.id
})