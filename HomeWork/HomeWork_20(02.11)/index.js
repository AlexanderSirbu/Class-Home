const btnBlock = document.getElementById('btn-block');
const paragraph = document.getElementById('paragraph');



function test(event) {
    if (event.target.classList.contains('first')) {
        paragraph.innerText = "You clicked First button";        
        console.log("capturing", this.tagName);
    }else if(event.target.classList.contains('second')){
        paragraph.innerText = "You clicked Second button"; 
        console.log("capturing", this.tagName);
    }else if(event.target.classList.contains('third')){
        paragraph.innerText = "You clicked Third button"; 
        console.log("capturing", this.tagName);
    }
};

btnBlock.addEventListener('click', test);