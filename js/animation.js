const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;

function init(){
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width*images.length + 'px';
    images.forEach( item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider()
}

window.addEventListener('resize',init());
init();
document.querySelector('.slider-next').addEventListener('click',function(){
    count++;
    if(count >= images.length){
        count = 0;
    }
    rollSlider()
})

document.querySelector('.slider-prev').addEventListener('click',function(){
    count--;
    if(count <  0){
        count = images.length -1;
    }
    rollSlider()
})

function rollSlider(){
    sliderLine.style.transform = 'translate(-'+count*width+'px)';
}
/* DROP MENU */

/* let coll = document.getElementsByClassName('collapsible');
for(let i = 0; i < coll.length;i++){
    coll[i].addEventListener('click',function(){
        this.classList.toggle('active');
        let content = this.nextElementSibling;
        if(content.style.maxHeight){
            content.style.display == 'block'; 
        }else{
            content.style.maxHeight = content.scrollHeight + 'px'; 
        }
    });
} */

/* let imgDrop = document.querySelectorAll('.questions .questionWrapper div img');
let phidden = document.querySelectorAll('.questions .questionWrapper div .hiddenP');
imgDrop.addEventListener('click',function(){
    phidden.style.display = 'block' + 'px';
}) */

