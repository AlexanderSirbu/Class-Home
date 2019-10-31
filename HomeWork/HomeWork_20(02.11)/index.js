
const html = document.documentElement;
//* advanced
const body = document.body;
const div = document.querySelector('div');
const btn = document.querySelector('button')
//*
function test(event) {

    if (event.target.classList.contains('first-btn')) {
        paragraph.textContent = "You clicked First button";
        console.log("capturing", this.tagName);//*  event.target.tagName

    } else if (event.target.classList.contains('second-btn')) {
        paragraph.textContent = "You clicked Second button";
        console.log("capturing", this.tagName);//*  event.target.tagName

    } else if (event.target.classList.contains('third-btn')) {
        paragraph.textContent = "You clicked Third button";
        console.log("capturing", this.tagName);//*  event.target.tagName
    }

};

html.addEventListener("click",test, true);
//* advanced
//capture
body.addEventListener("click",test, true);
div.addEventListener("click",test, true);
btn.addEventListener("click",test, true);
//bubble
html.addEventListener("click",test);
body.addEventListener("click",test);
div.addEventListener("click",test);
//*


