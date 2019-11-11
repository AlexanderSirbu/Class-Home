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

// function repeatRegister() {
//   let name = prompt('What is ur name?');
//   if (name.length >= 2) {
//     localStorage.setItem('name', name);
//   } else {
//     alert('name need to be longer ')
//     //  repeatRegister();
//   }
// }
// };

function main(event) {

  if (event.target.classList.contains('register')) {
    // repeatRegister();
    for (let i = 0; name.length < 2; i++) {
      let name = prompt('What is ur name?');
      if (name.length >= 2) {
        localStorage.setItem('name', name);
        break;
      } else {
        alert('name need to be longer ')
      }
    };
  document.querySelector('p').textContent = 'Hello ' + localStorage.getItem('name');
} else if (event.target.classList.contains('reset')) {
  localStorage.removeItem('name');
  document.querySelector('p').textContent = 'Hello guest!'
}

};

mainName.addEventListener("click", main);