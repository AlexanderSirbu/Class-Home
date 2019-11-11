const mainName = document.querySelector('.container-btn');
const text = document.querySelector('p');


verificateLocalStorage();

function verificateLocalStorage() {

  if (localStorage.getItem('name') != null) {
    text.textContent = 'Hello ' + localStorage.getItem('name');
  } else {
   text.innerText = "Hello guest,please register";
  }

};


function main(event) {

  if (event.target.classList.contains('register')) {
    let name = prompt('What is ur name?');
    localStorage.setItem('name', name);
    document.querySelector('p').textContent = 'Hello ' + localStorage.getItem('name');
  } else if (event.target.classList.contains('reset')) {
    localStorage.removeItem('name');
    document.querySelector('p').textContent = 'Hello guest!'
  }

};

mainName.addEventListener("click", main);

