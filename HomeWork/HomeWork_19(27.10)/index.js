function changeValueFirstBtn(){
    document.getElementById('h1').innerText = "This is action first-btn";
};
function changeValueSecondBtn(){
    document.getElementById('h1').innerText = "This is action second-btn";
};
function changeValueThirdBtn(){
    document.getElementById('h1').innerText = "This is action third-btn";
};



  first.addEventListener("click", changeValueFirstBtn);
  second.addEventListener("mouseover", changeValueSecondBtn);
  third.addEventListener("contextmenu", changeValueThirdBtn);

 