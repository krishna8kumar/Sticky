logo=document.querySelector("#logo")
const nav=document.querySelector("nav")
const desc=document.querySelector(".Description")
const button=document.querySelector(".new")
const container=document.querySelector(".container")
function colorchange(){
    const h="1234567890abcdef"
    let color="#"
    for(i=0;i<6;i+=1){
        color+=h[Math.floor(Math.random()*16)]
    }
    return color
}
logo.addEventListener("click",(e)=>{
    e.preventDefault();
    nav.style.backgroundColor=colorchange()
    
})
items=document.querySelectorAll(".item")
items.forEach(items => { 
    items.addEventListener( "click",(event)=>{
        if(event.target.innerHTML==="About"){  
            desc.style.display="block"
            button.style.display="none"
            container.style.display="none" 
            document.querySelector(".welcome").style.display="none"
        }else if (event.target.innerHTML==="Notes"){ 
            document.querySelector(".welcome").style.display="none" 
            desc.style.display="none"
            button.style.display="block"
            container.style.display="unset"            
        }
    })
});
function NoteColor(){
    colors=['#c2f8cb', '#b9faf8', '#ff90b3', '#ffd6ff', '#deaaff']
   console.log( colors[Math.floor(Math.random()*5)])
    return colors[Math.floor(Math.random()*5)];
}
button.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    textarea.setAttribute("rows","7")
    textarea.setAttribute("placeholder",`Note`)
    textarea.className="textarea"
    textarea.style.backgroundColor=NoteColor()
    container.appendChild(textarea);
});

