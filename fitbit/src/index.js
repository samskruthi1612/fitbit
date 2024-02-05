import './scss/main.scss';

const items = document.querySelectorAll(".product-slide__list-items");
let counter = 0;
let maxSlide = items.length - 1;


for(let i=0;i<items.length;i++) {
    items[i].style.transform=`translateX(${i*100}%)`;
}
function nextSlide(){
if(counter==maxSlide){
    counter = 0;
}
else{
    counter++;
}
items.forEach((item,index)=>{
    item.style.transform=`translateX(${100*(index-counter)}%)`;

});
}
setInterval(()=>{
    nextSlide()
},3000);

// let playBtn = document.querySelector('')
 



