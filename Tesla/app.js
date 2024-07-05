console.log("Hello IlON MASK");

const items = document.querySelectorAll('.items')
const Vencheles = document.querySelector('.Vencheles')
const Energy= document.querySelector('.Energy')
const Charning = document.querySelector('.Charning')
const Dicrover = document.querySelector('.Dicrover')
const Shop = document.querySelector('.Shop')

    
// console.log(items);
items[0].addEventListener("mouseenter",()=>{
    Vencheles.style.height= "150px"
})
Vencheles.addEventListener("mouseleave",()=>{
    Vencheles.style.height = "0px"
})
items[1].addEventListener("mouseenter",()=>{
    Energy.style.height= "150px"
})
Energy.addEventListener("mouseleave",()=>{
    Energy.style.height = "0px"
})
items[2].addEventListener("mouseenter", ()=>{
    Charning.style.height= "150px"
})
Charning.addEventListener("mouseleave", ()=>{
    Charning.style.height = "0px"
})
items[3].addEventListener("mouseenter", ()=>{
    Dicrover.style.height= "150px"
})
Dicrover.addEventListener("mouseleave", ()=>{
    Dicrover.style.height = "0px"
})
items[4].addEventListener("mouseenter", ()=>{
    Shop.style.height= "150px"
})
Shop.addEventListener("mouseleave", ()=>{
    Shop.style.height = "0px"
})