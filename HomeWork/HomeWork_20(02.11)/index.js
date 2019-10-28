const btnBlock = document.getElementById('btn-main');
const paragraph = document.getElementById('paragraph');
const elems = document.querySelectorAll('*');


function test(event) {

    if (event.target.classList.contains('first')) {
        paragraph.innerText = "You clicked First button";
        console.log("capturing", this.tagName);

    } else if (event.target.classList.contains('second')) {
        paragraph.innerText = "You clicked Second button";
        console.log("capturing", this.tagName);

    } else if (event.target.classList.contains('third')) {
        paragraph.innerText = "You clicked Third button";
        console.log("capturing", this.tagName);
    }

};

for (var i = 0; i < elems.length; i++) {
    elems[i].addEventListener("click", test, true);
}
btnBlock.addEventListener("click", test, true)