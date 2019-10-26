function changeValueFirstBtn(){
    document.getElementById('paragraph').innerText = "This is action first-btn";
    setTimeout(() =>alert('When u click me i change text '),0);
};
function changeValueSecondBtn(){
    document.getElementById('paragraph').innerText = "This is action third-btn";
    setTimeout(() =>alert('When u hover me i change text '),0);
};
function changeValueThirdBtn(){
    document.getElementById('paragraph').innerText = "This is action second-btn";
    setTimeout(() =>alert('When u click me right btn  i change text '),0);
};



  first.addEventListener("click", changeValueFirstBtn);
  third.addEventListener("mouseover", changeValueSecondBtn);
  second.addEventListener("contextmenu", changeValueThirdBtn);

 